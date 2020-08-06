/** @jsx jsx */
import { jsx, Box, Styled } from "theme-ui"

const BlockQuote = props => {
  return (
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
      }}
    >
      {props.children}
    </Styled.blockquote>
  )
}

export default BlockQuote
