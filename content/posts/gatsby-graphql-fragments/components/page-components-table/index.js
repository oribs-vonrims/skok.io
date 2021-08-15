/* @jsx jsx */
import { Themed, jsx } from "theme-ui"
import ScrollX from "../../../../../src/components/scroll-x"

const PageComponentsTable = () => (
  <ScrollX sx={{ marginBottom: 4 }}>
    <Themed.table>
      <thead>
        <Themed.tr>
          <Themed.th>Page</Themed.th>
          <Themed.th>URL path</Themed.th>
          <Themed.th>Component path</Themed.th>
        </Themed.tr>
      </thead>
      <tbody>
        <Themed.tr>
          <Themed.td>Home</Themed.td>
          <Themed.td>
            <Themed.code>/</Themed.code>
          </Themed.td>
          <Themed.td>src/pages/index.jsx</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>Blog</Themed.td>
          <Themed.td>/blog/</Themed.td>
          <Themed.td>src/pages/blog.jsx</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>Article</Themed.td>
          <Themed.td>/article/</Themed.td>
          <Themed.td>src/templates/article.jsx</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>Contact</Themed.td>
          <Themed.td>/contact/</Themed.td>
          <Themed.td>src/pages/contact.jsx</Themed.td>
        </Themed.tr>
        <Themed.tr>
          <Themed.td>About</Themed.td>
          <Themed.td>/about/</Themed.td>
          <Themed.td>src/pages/about.jsx</Themed.td>
        </Themed.tr>
      </tbody>
    </Themed.table>
  </ScrollX>
)

export default PageComponentsTable
