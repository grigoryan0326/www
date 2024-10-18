import UiButton from "./UiButton"

export default {
  title: "UI-Kit/UiButton",
  component: UiButton,
}

const Template = (args) => <UiButton {...args} />

const props = {
  text: "Button",
  disabled: false,
  theme: "dark",
  classes: "",
}

export const Dark = Template.bind({})

Dark.args = {
  ...props,
  theme: "dark",
}

export const Light = Template.bind({})

Light.args = {
  ...props,
  theme: "light",
}

export const disabled = Template.bind({})

disabled.args = {
  ...props,
  disabled: true,
}