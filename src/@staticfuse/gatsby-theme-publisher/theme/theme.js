import theme from "@staticfuse/gatsby-theme-publisher/src/theme/theme"

const myBlue = "#01d8ff"

const publisherTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // text: "#2D3748",
    primary: myBlue,
    // muted: "#999",
    headings: "#2D3748",
    links: myBlue,
    navLink: myBlue,
    headerBg: "#2D3748",
    footerText: "#999"
  },
}

export default publisherTheme
