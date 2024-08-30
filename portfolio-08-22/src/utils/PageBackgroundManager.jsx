import { useEffect } from "react"

const PageBackgroundManager = ({ page }) => {
  useEffect(() => {
    const updateBackgroundColor = () => {
      document.body.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue(`--background-color-${page}`)
    }
    updateBackgroundColor()

    const observer = new MutationObserver(() => {
      updateBackgroundColor()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    })

    return () => {
      observer.disconnect()
    }
  }, [page])

  return null
}

export default PageBackgroundManager
