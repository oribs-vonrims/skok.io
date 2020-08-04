import React from "react"

const WebMentions = ({ allWebmentionEntry }) => {
  return (
    <div>
      <b>WebMentions</b>
      <pre>
        <code>{JSON.stringify(allWebmentionEntry)}</code>
      </pre>
    </div>
  )
}

export default WebMentions
