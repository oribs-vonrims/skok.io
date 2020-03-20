/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'

const LineNumber = ({ index, lineNumbers }) => (
  <PrismThemeConsumer>
    {({ prismTheme }) => (
      <span sx={{
        display: 'inline-block',
        width: 40,
        userSelect: 'none',
        textAlign: 'center',
        color: (prismTheme.lineNumber && prismTheme.lineNumber.color) || 'currentcolor',
        marginLeft: -20,
        marginRight: 20,
        transition: 'background-color 400ms ease, color 400ms ease, transform 400ms ease',
        transform: lineNumbers ? 'translate3d(0, 0, 0)' : 'translate3d(-40px, 0, 0)'
      }}>
        {++index}
      </span>
    )}
  </PrismThemeConsumer>
)

export default LineNumber