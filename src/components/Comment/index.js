/** @jsx jsx */
import { jsx, Card, Styled, Flex } from "theme-ui"
import { useState } from "react"
// import { format } from "date-fns"

const Comment = ({ to, src, alt, name, text, published }) => {
  const [highlight, setHighlight] = useState(false)
  const addHighlight = () => setHighlight(true)
  const removeHighlight = () => setHighlight(false)

  return (
    <Card
      onFocus={addHighlight}
      onBlur={removeHighlight}
      onTouchStart={addHighlight}
      onTouchEnd={removeHighlight}
      onMouseEnter={addHighlight}
      onMouseLeave={removeHighlight}
      sx={{
        boxShadow: highlight ? `active` : `default`,
        borderColor: highlight ? `secondary` : `primary`,
        marginBottom: 4,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
      }}
    >
      <div
        sx={{
          display: `flex`,
          alignItems: `center`,
          textDecoration: `none`,
          position: `relative`,
          zIndex: 1000,
        }}
      >
        <a
          href={to}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`${name} twitter account avatar`}
          sx={{
            marginRight: `25px`,
          }}
        >
          <img
            src={src}
            alt={alt}
            sx={{
              borderRadius: `100%`,
              width: `50px`,
              height: `50px`,
            }}
          />
        </a>

        <Flex sx={{ flexDirection: `column` }}>
          <a
            href={to}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`${name} twitter account`}
            sx={{
              color: highlight ? `secondary` : `primary`,
              margin: 0,
              textDecoration: `none`,
              transition: `color 400ms ease`,
            }}
          >
            {name}
          </a>

          {/* <time
            dateTime={published}
            sx={{
              fontSize: 1,
            }}
          >
            {format(new Date(published), `MM/dd/yyyy`)}
          </time> */}
        </Flex>
      </div>

      <Styled.p
        sx={{
          color: `text`,
          transition: `color 400ms ease`,
          flex: 1,
          marginLeft: `75px`,
        }}
      >
        {text}
      </Styled.p>
    </Card>
  )
}

export default Comment
