const path = require(`path`)
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            // You don't need to add the matching ExtractText plugin
            // because gatsby already includes it and makes sure it's only
            // run at the appropriate stages, e.g. not in development
            loaders.miniCssExtract(),
            loaders.css({ importLoaders: 1 }),
            // the postcss loader comes with some nice defaults
            // including autoprefixer for our configured browsers
            loaders.postcss(),
            `less-loader`,
          ],
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allContentfulBlogs {
        nodes {
          slug
        }
      }
    }
  
  `)
  result.data.allContentfulBlogs.nodes.map(el => {
    const posts = result.data.allContentfulBlogs.nodes;
    const postsPerPage = 2;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numberOfPages }).forEach((page, index) => {
      createPage({
        path: index === 0 ? `/resources` : `/resources/${index + 1}`,
        component: require.resolve("./src/templates/resources.js"),
        context: {
          currentPage: index + 1,
          skip: index * 2,
          numberOfPages: numberOfPages,
          postsPerPage: postsPerPage
        },
      })
    })

  })
  result.data.allContentfulBlogs.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
