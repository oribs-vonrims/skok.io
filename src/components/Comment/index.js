/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Card, Styled } from "theme-ui"
import Link from "../Link"

const Comment = ({ to, src, alt, name, text }) => {
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
      }}
    >
      <a href={to} rel="noopener noreferrer" target="_blank">
        <img
          src={src}
          alt={`${name} twitter avatar`}
          sx={{
            borderRadius: `100%`,
            width: `50px`,
          }}
        />
      </a>

      <a
        href={to}
        rel="noopener noreferrer"
        target="_blank"
        sx={{
          display: `inline-block`,
        }}
      >
        <p>{name}</p>
      </a>

      <Styled.p
        sx={{
          color: `text`,
          transition: `color 400ms ease`,
        }}
      >
        {text}
      </Styled.p>
    </Card>
  )
}

export default Comment
