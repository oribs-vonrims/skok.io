/** @jsx jsx */
import { jsx } from 'theme-ui'

const Footer = () => (
  <footer sx={{
    textAlign: `center`
  }}>
    © Copyright { new Date().getFullYear() }
  </footer>
)

export default Footer