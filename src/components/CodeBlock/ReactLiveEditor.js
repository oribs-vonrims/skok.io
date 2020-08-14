import React from "react"
import { LivePreview, LiveProvider } from "react-live"
import LiveEditor from "./LiveEditor"
import LiveError from "./LiveError"

const ReactLiveEditor = ({
  code,
  scope,
  noInline,
  disabled,
  language,
  metastring,
  lineNumbers,
  shouldHighlightLine,
}) => (
  <LiveProvider
    code={code}
    theme={undefined}
    scope={scope}
    disabled={disabled}
    noInline={noInline}
  >
    <LiveEditor
      language={language}
      metastring={metastring}
      lineNumbers={lineNumbers}
      shouldHighlightLine={shouldHighlightLine}
    />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default ReactLiveEditor
