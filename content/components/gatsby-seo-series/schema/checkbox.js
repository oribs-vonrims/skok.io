/** @jsx jsx */
import { jsx, Label, Checkbox as ThemeUiCheckbox } from "theme-ui"

const Checkbox = ({ label, onChange, isChecked }) => {
  return (
    <Label>
      <span sx={{ fontWeight: `bold` }}>{label}</span>
      <ThemeUiCheckbox onChange={onChange} defaultChecked={isChecked} />
    </Label>
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
