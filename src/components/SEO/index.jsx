import React from "react"
// import { Helmet } from "react-helmet"
import DefaultMeta from "./DefaultMeta"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"
import SchemaOrg from "./SchemaOrg"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import { getActivePages, getImageUrls, getCurrentUrl } from "./helpers"

const SEO = ({
  pathName,
  slug,
  title,
  description,
  images,
  imageAlt,
  pageId,
  type,
  breadcrumb,
  datePublished,
  dateModified,
}) => {
  const {
    siteUrl,
    siteName,
    firstName,
    lastName,
    language,
    socialMedia,
    logo,
    address,
    speakableSelector,
    pages,
  } = useSiteMetadata()

  const imageUrls = getImageUrls({ images, siteUrl })
  const activePages = getActivePages({ pages, pageId })
  const url = getCurrentUrl({ siteUrl, pathName, slug, pages, activePages })

  const defaultMeta = {
    title,
    description,
    language,
    url,
  }

  const twitter = {
    title,
    description,
    imageUrls,
    imageAlt,
    socialMedia,
  }

  const openGraph = {
    siteName,
    firstName,
    lastName,
    title,
    description,
    imageUrls,
    imageAlt,
    dateModified,
    datePublished,
    language,
    activePages,
    url,
  }

  const schemaOrg = {
    siteUrl,
    siteName,
    firstName,
    lastName,
    logo,
    language,
    socialMedia,
    address,
    speakableSelector,
    pathName,
    title,
    description,
    imageUrls,
    breadcrumb,
    type,
    dateModified,
    datePublished,
    slug,
    pages,
    activePages,
    url,
  }

  return (
    <>
      <DefaultMeta {...defaultMeta} />
      <Twitter {...twitter} />
      <OpenGraph {...openGraph} />
      <SchemaOrg {...schemaOrg} />
    </>
  )
}

export default SEO
