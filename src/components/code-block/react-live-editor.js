import React from 'react'
import { LivePreview, LiveProvider } from 'react-live'
import LiveEditor from './live-editor'
import LiveError from './live-error'

const ReactLiveEditor = ({
  code,
  theme,
  scope,
  noInline,
  disabled,
  language,
  metastring,
  lineNumbers,
  shouldHighlightLine
}) => (
  <LiveProvider
    code={code}
    theme={theme}
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