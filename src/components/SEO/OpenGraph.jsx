import React from "react"
import { Helmet } from "react-helmet"

const OpenGraph = ({
  siteName,
  firstName,
  lastName,
  title,
  description,
  imageUrls: { openGraphImageUrl: image },
  imageAlt,
  dateModified,
  datePublished,
  language,
  activePages: { isArticle },
  url,
}) => (
  <Helmet>
    <meta property="og:type" content={isArticle ? `article` : `website`} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:locale" content={language} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={imageAlt} />

    {isArticle && datePublished && (
      <meta property="article:published_time" content={datePublished} />
    )}
    {isArticle && dateModified && (
      <meta property="article:modified_time" content={dateModified} />
    )}
    {isArticle && (
      <meta property="article:author" content={`${firstName} ${lastName}`} />
    )}
  </Helmet>
)

export default OpenGraph
