/** @jsx jsx */
import { jsx, Embed } from "theme-ui"

const GraphiQLIframe = ({
  title = `Gatsby GraphiQL playground`,
  url = `https://graphiql.linte.rs/___graphql?query=`,
  query,
}) => <Embed title={title} src={`${url}${query}`} />

export default GraphiQLIframe
