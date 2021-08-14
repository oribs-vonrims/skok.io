/** @jsx jsx */
import { jsx, Label, Select as ThemeUiSelect } from "theme-ui"
import { PAGE_LABELS } from "./constants"

const Select = ({ onChange }) => {
  return (
    <Label
      sx={{
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <span
        sx={{
          fontWeight: `bold`,
        }}
      >
        Select Page Template:
      </span>
      <ThemeUiSelect onChange={onChange}>
        {PAGE_LABELS.map(label => (
          <option key={label} value={label.toLowerCase()}>
            {label}
          </option>
        ))}
      </ThemeUiSelect>
    </Label>
  )
}

export default Select
