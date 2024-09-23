import React, { useRef, useEffect } from "react"
import "./StarField.scss"

const STAR_COLOR = "#fff"
const STAR_SIZE = 1
const STAR_MIN_SCALE = 0.2
const OVERFLOW_THRESHOLD = 50
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 20

const StarField = () => {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const stars = useRef([])
  const scale = useRef(1)
  const width = useRef(0)
  const height = useRef(0)
  const pointerX = useRef(null)
  const pointerY = useRef(null)
  const velocity = useRef({ x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 })
  const touchInput = useRef(false)
  const isScrolling = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    contextRef.current = context

    const resize = () => {
      width.current = window.innerWidth - 20
      height.current = window.innerHeight - 20
      canvas.width = width.current
      canvas.height = height.current
      canvas.style.width = `${width.current}px`
      canvas.style.height = `${height.current}px`
      stars.current.forEach((star) => placeStar(star))
    }

    const generateStars = () => {
      stars.current = Array.from({ length: STAR_COUNT }, () => ({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      }))
    }

    const placeStar = (star) => {
      star.x = Math.random() * width.current
      star.y = Math.random() * height.current
    }

    const recycleStar = (star) => {
      let direction = "z"
      const vx = Math.abs(velocity.current.x)
      const vy = Math.abs(velocity.current.y)

      if (vx > 1 || vy > 1) {
        const axis =
          vx > vy
            ? Math.random() < vx / (vx + vy)
              ? "h"
              : "v"
            : Math.random() < vy / (vx + vy)
            ? "v"
            : "h"

        direction =
          axis === "h"
            ? velocity.current.x > 0
              ? "l"
              : "r"
            : velocity.current.y > 0
            ? "t"
            : "b"
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)

      if (direction === "z") {
        star.z = 0.1
        star.x = Math.random() * width.current
        star.y = Math.random() * height.current
      } else if (direction === "l") {
        star.x = -OVERFLOW_THRESHOLD
        star.y = height.current * Math.random()
      } else if (direction === "r") {
        star.x = width.current + OVERFLOW_THRESHOLD
        star.y = height.current * Math.random()
      } else if (direction === "t") {
        star.x = width.current * Math.random()
        star.y = -OVERFLOW_THRESHOLD
      } else if (direction === "b") {
        star.x = width.current * Math.random()
        star.y = height.current + OVERFLOW_THRESHOLD
      }
    }

    const update = () => {
      velocity.current.tx *= 0.96
      velocity.current.ty *= 0.96
      velocity.current.x += (velocity.current.tx - velocity.current.x) * 0.8
      velocity.current.y += (velocity.current.ty - velocity.current.y) * 0.8

      stars.current.forEach((star) => {
        star.x += velocity.current.x * star.z
        star.y += velocity.current.y * star.z
        star.x += (star.x - width.current / 2) * velocity.current.z * star.z
        star.y += (star.y - height.current / 2) * velocity.current.z * star.z
        star.z += velocity.current.z

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width.current + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height.current + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star)
        }
      })
    }

    const render = () => {
      const { current: ctx } = contextRef

      ctx.clearRect(
        0,
        0,
        width.current * scale.current,
        height.current * scale.current
      )

      stars.current.forEach((star) => {
        ctx.beginPath()
        ctx.lineCap = "round"
        ctx.lineWidth = STAR_SIZE * star.z * scale.current
        ctx.globalAlpha = 0.5 + 0.5 * Math.random()
        ctx.strokeStyle = STAR_COLOR

        ctx.moveTo(star.x * scale.current, star.y * scale.current)

        const tailX =
          Math.abs(velocity.current.x) < 0.1 ? 0.5 : velocity.current.x * 2
        const tailY =
          Math.abs(velocity.current.y) < 0.1 ? 0.5 : velocity.current.y * 2

        ctx.lineTo(
          star.x * scale.current + tailX,
          star.y * scale.current + tailY
        )
        ctx.stroke()
      })
    }

    const step = () => {
      if (!isScrolling.current) {
        update()
      }
      render()
      requestAnimationFrame(step)
    }

    const movePointer = (x, y) => {
      if (pointerX.current !== null && pointerY.current !== null) {
        const ox = x - pointerX.current
        const oy = y - pointerY.current

        velocity.current.tx +=
          (ox / 8) * scale.current * (touchInput.current ? 1 : -1)
        velocity.current.ty +=
          (oy / 8) * scale.current * (touchInput.current ? 1 : -1)
      }

      pointerX.current = x
      pointerY.current = y
    }

    const onMouseMove = (event) => {
      touchInput.current = false
      movePointer(event.clientX, event.clientY)
    }

    const onTouchStart = () => {
      isScrolling.current = false
    }

    const onTouchMove = (event) => {
      touchInput.current = true

      if (!isScrolling.current) {
        movePointer(event.touches[0].clientX, event.touches[0].clientY)
        if (Math.abs(event.touches[0].clientY - pointerY.current) > 10) {
          isScrolling.current = true
        }
      }
    }

    const onTouchEnd = () => {
      isScrolling.current = false
    }

    const onMouseLeave = () => {
      pointerX.current = null
      pointerY.current = null
    }

    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("touchstart", onTouchStart)
    canvas.addEventListener("touchmove", onTouchMove)
    canvas.addEventListener("touchend", onTouchEnd)
    document.addEventListener("mouseleave", onMouseLeave)

    generateStars()
    resize()
    step()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", onMouseMove)
      canvas.removeEventListener("touchstart", onTouchStart)
      canvas.removeEventListener("touchmove", onTouchMove)
      canvas.removeEventListener("touchend", onTouchEnd)
      document.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 10,
      }}
    />
  )
}

export default StarField
