export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root")

  root.style.setProperty("--header-color", `var(--header-color-${theme})`)
  root.style.setProperty("--default-bgimage", `var(--${theme}-bgimage)`)
}
