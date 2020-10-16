import React from "react"

const MetaTags = ({ title, description, author }) => (
  <>
    <meta name="description" content={description || props.description} />
    <meta name="og:title" content={title || props.title} />
    <meta name="og:description" content={description || props.description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title || props.title} />
    <meta
      name="twitter:description"
      content={description || props.description}
    />
    <meta name="twitter:creator" content={author || props.author} />
  </>
)

export default MetaTags
