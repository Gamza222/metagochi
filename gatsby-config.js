module.exports = {
  pathPrefix: "/metagochi",
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/meta-circle.svg',
      },
    },
  ]
};