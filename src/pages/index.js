/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Layout from '../components/layout'
import GlitchText from '../components/glitch-text'

const IndexPage = () => (
  <Layout>
    <Styled.h1 sx={{
      fontSize: 8,
      lineHeight: 1.2,
    }}>
      Hi! My name is <span sx={{ variant: `text.italicHeading` }}>Vladimir</span>.
    </Styled.h1>
    <Styled.h2>
      I move <GlitchText text="pixels">pixels</GlitchText> 
      on the web.
    </Styled.h2>
  </Layout>
)

export default IndexPage