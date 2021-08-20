const pages = {
  home: {
    id: `home`,
    pathName: `/`,
    title: `Vladimir Skok 🧔`,
    description: `Software engineering blog`,
    image: `home.jpg`,
    imageAlt: `Home page cover photo`,
    breadcrumb: `🏠 Vladimir Skok`,
    type: `WebPage`,
  },
  blog: {
    id: `blog`,
    pathName: `blog`,
    title: `Blog ✍️ | Vladimir Skok`,
    description: `Thoughts on software engineering`,
    image: `blog.jpg`,
    imageAlt: `Blog image`,
    breadcrumb: `✍️ Blog`,
    type: `Blog`,
  },
  post: {
    id: `post`,
    type: `Article`,
    breadcrumb: `📝`,
  },
}

module.exports = pages
