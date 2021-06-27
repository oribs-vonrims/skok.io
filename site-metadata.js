module.exports = {
  firstName: `Vladimir`,
  lastName: `Skok`,
  siteName: `Vladimir Skok`,
  logo: {
    url: `logo.jpg`,
    width: 112,
    height: 112,
  },
  language: `en`,
  socialMedia: {
    twitter: `https://twitter.com/iamskok1`,
    github: `https://github.com/iamskok`,
  },
  address: {
    addressCountry: `US`,
    addressLocality: `Atlanta`,
    addressRegion: `GA`,
  },
  speakableSelector: [`[data-speakable="true"]`],
  pages: {
    home: {
      id: `home`,
      pathName: `/`,
      title: `Vladimir Skok`,
      description: `Software engineering blog`,
      image: `home.jpg`,
      imageAlt: `Home Page`,
      breadcrumb: `🏠 Home`,
      type: `WebPage`,
    },
    blog: {
      id: `blog`,
      pathName: `blog`,
      title: `Blog`,
      description: `Thoughts on software engineering`,
      image: `blog.jpg`,
      imageAlt: `Blog image`,
      breadcrumb: `🗒 Blog`,
      type: `Blog`,
    },
    post: {
      id: `article`,
      type: `Article`,
      breadcrumb: `📝`,
    },
  },
  colorModes: [`default`, `light`],
  favicons: {
    checkmarkEmoji: `/favicon-checkmark-emoji.svg`,
    eyesEmoji: `/favicon-eyes-emoji.svg`,
    light: `/favicon-light.svg`,
    dark: `/favicon-dark.svg`,
  },
  components: {
    codeBlock: {
      isCopy: true,
      isFocus: true,
      isLabel: true,
    },
    intro: {
      id: `introduction`,
    },
    tableOfContents: {
      introId: `introduction`,
      introTitle: `Introduction`,
    },
  },
}
