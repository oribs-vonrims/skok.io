/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Container } from "theme-ui"
import GlobalStyles from "../GlobalStyles"
import Header from "../Header"
import PreloadLinks from "../PreloadLinks"
import SEO from "../SEO"

const Layout = ({
  children,
  pageId,
  pathName,
  slug,
  title,
  description,
  images,
  imageAlt,
  breadcrumb,
  published,
  modified,
  type,
}) => (
  <Fragment>
    <GlobalStyles />
    <PreloadLinks />
    {pageId && (
      /* eslint-disable-next-line react/jsx-pascal-case */
      <SEO
        pageId={pageId}
        pathName={pathName}
        slug={slug}
        title={title}
        description={description}
        images={images}
        imageAlt={imageAlt}
        breadcrumb={breadcrumb}
        published={published}
        modified={modified}
        type={type}
      />
    )}
    <Container
      sx={{
        paddingX: 3,
        minHeight: `100%`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <Header />
      <main
        sx={{
          display: `flex`,
          flexDirection: `column`,
          flex: 1,
        }}
      >
        {children}
      </main>
    </Container>
  </Fragment>
)

export default Layout
