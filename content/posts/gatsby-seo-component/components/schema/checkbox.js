/** @jsx jsx */
import { jsx, Flex, Checkbox as ThemeUiCheckbox } from "theme-ui"

const Checkbox = ({ label, onChange, isChecked }) => {
  return (
    <Flex
      as="label"
      sx={{
        alignItems: `center`,
      }}
    >
      <ThemeUiCheckbox
        onChange={onChange}
        defaultChecked={isChecked}
        sx={{
          "input:focus ~ &": {
            backgroundColor: `transparent`,
          },
          "input:focus-visible ~ &": {
            backgroundColor: `highlight`,
          },
          path: {
            color: `primary`,
          },
        }}
      />
      <span>{label}</span>
    </Flex>
  )
}

const checkboxList = [
  {
    label: `Address Schema`,
    type: `address`,
    isChecked: false,
  },
  {
    label: `Person Schema`,
    type: `person`,
    isChecked: false,
  },
  {
    label: `Organization Schema`,
    type: `organization`,
    isChecked: false,
  },
  {
    label: `Page Schema`,
    type: `page`,
    isChecked: true,
  },
  {
    label: `Breadcrumbs Schema`,
    type: `breadcrumbs`,
    isChecked: false,
  },
]

export { Checkbox, checkboxList }
