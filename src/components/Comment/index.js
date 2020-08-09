/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Card, Flex, Styled } from "theme-ui"
import Link from "../Link"

const Comment = ({ to, src, alt, name, text, published }) => {
  const [active, setActive] = useState(false)
  const addActiveState = () => setActive(true)
  const removeActiveState = () => setActive(false)

  return (
    <Card
      onFocus={addActiveState}
      onBlur={removeActiveState}
      onTouchStart={addActiveState}
      onTouchEnd={removeActiveState}
      onMouseEnter={addActiveState}
      onMouseLeave={removeActiveState}
      sx={{
        boxShadow: active ? `active` : `default`,
        borderColor: active ? `secondary` : `primary`,
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
            alt={`${name} twitter avatar`}
            sx={{
              display: `flex`,
              borderRadius: `100%`,
              width: `50px`,
              height: `50px`,
            }}
          />
        </a>

        <a
          href={to}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`${name} twitter account`}
          sx={{
            margin: 0,
            textDecoration: `none`,
          }}
        >
          {name}
        </a>

        {/* <time>{published}</time> */}
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
