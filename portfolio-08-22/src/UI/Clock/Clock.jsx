import React, { useEffect, useState } from "react"
import "./Clock.scss"

const numbers = [
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
  [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
  [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 9
]

const Clock = () => {
  const [time, setTime] = useState({
    s: "",
    m: "",
    h: "",
    p: null,
  })

  useEffect(() => {
    const blocks = []
    const digits = Array.from(document.querySelectorAll(".block"))
    for (let i = 0; i < 4; i++) {
      blocks.push(digits.slice(i * 15, i * 15 + 15))
    }

    const setNum = (block, num) => {
      let n = numbers[num]
      for (let i = 0; i < block.length; i++) {
        block[i].classList[n[i] === 1 ? "add" : "remove"]("active")
      }
    }

    const animator = () => {
      let d = new Date(),
        h = d.getHours().toString(),
        m = d.getMinutes().toString(),
        s = d.getSeconds().toString()

      s = s.length === 1 ? "0" + s : s
      m = m.length === 1 ? "0" + m : m
      h = h.length === 1 ? "0" + h : h

      if (s !== time.s) {
        for (let i = 0; i < digits.length; i++) {
          let d = digits[i]
          if (i === +s) {
            d.classList.add("second")
            if (time.p !== null) digits[time.p].classList.remove("second")
            setTime((prevTime) => ({
              ...prevTime,
              s,
              p: i,
            }))
          }
        }
      }

      if (m !== time.m) {
        setNum(blocks[2], m[0])
        setNum(blocks[3], m[1])
        setTime((prevTime) => ({
          ...prevTime,
          m,
        }))
      }

      if (h !== time.h) {
        setNum(blocks[0], h[0])
        setNum(blocks[1], h[1])
        setTime((prevTime) => ({
          ...prevTime,
          h,
        }))
      }

      window.requestAnimationFrame(animator)
    }

    window.requestAnimationFrame(animator)
  }, [time])


  return (
    <>
      <div className='clock'>
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className='block'
            data-num={i}
          ></div>
        ))}
        <div className='divider'></div>
      </div>
    </>
  )
}

export default Clock
