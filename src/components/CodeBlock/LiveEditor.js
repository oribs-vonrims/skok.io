import React from "react"
import { LiveContext } from "react-live"
import Editor from "./Editor"

const LiveEditor = props => (
  <LiveContext.Consumer>
    {({ code, language, disabled, onChange }) => (
      <Editor
        theme={undefined}
        code={code}
        language={language}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    )}
  </LiveContext.Consumer>
)

export default LiveEditor
