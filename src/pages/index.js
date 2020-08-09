/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"
import Layout from "../components/Layout"
import GlitchText from "../components/GlitchText"

const IndexPage = () => (
  <Layout>
    <Flex
      sx={{
        flex: 1,
        flexDirection: "column",
        justifyContent: `center`,
        minHeight: `100%`,
      }}
      className="h-card"
    >
      <Styled.h1
        sx={{
          fontSize: 9,
          lineHeight: 1.25,
          letterSpacing: 2,
        }}
      >
        Hi! My name is{` `}
        <div className="p-name">
          <span sx={{ variant: `text.italicHeading` }}>Vladimir</span>
          <span sx={{ display: `none` }}>Skok</span>.
        </div>
        <img
          sx={{ display: `none` }}
          src="https://pbs.twimg.com/profile_images/720846092531707905/fit8T8Xa_400x400.jpg"
          className="u-photo"
          alt="Vladimir Skok avatar"
        />
        <a
          sx={{ display: `none` }}
          className="p-name u-url"
          href="https://skok.club"
        >
          Vladimir Skok
        </a>
        <time className="dt-bday" dateTime="1990-9-28"></time>
        <data className="p-locality" value="Atlanta"></data>
        <data className="p-region" value="Georgia"></data>
        <data className="p-country-name" value="USA"></data>
      </Styled.h1>

      <Styled.h2
        sx={{
          color: `secondary`,
          marginTop: 0,
          fontSize: 6,
          wordSpacing: 4,
        }}
      >
        I move{" "}
        <GlitchText
          text="pixels"
          duration="5000ms"
          keyframesNum={20}
          limit={0.2}
          colors={["red", "green", "blue"]}
          position={[-5, 5]}
          shadow={[-2, 2]}
          backgroundColor="background"
        >
          pixels
        </GlitchText>{" "}
        on the web.
      </Styled.h2>
    </Flex>
  </Layout>
)

export default IndexPage
