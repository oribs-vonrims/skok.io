/** @jsx jsx */
import React from "react"
import { jsx, Box, Styled } from "theme-ui"

const BlockQuote = props => (
  <Styled.blockquote
    {...props}
    sx={{
      borderWidth: 0,
      borderLeftWidth: 3,
      borderColor: `primary`,
      borderStyle: `solid`,

      "& > p": {
        marginBottom: 0,
      },

      "& > cite": {
        marginTop: 2,
        float: `right`,
        variant: `text.italic`,
        fontWeight: `light`,
      },
    }}
  >
    {props.children}
  </Styled.blockquote>
)

export default BlockQuote
