const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const productDetailTemplate = path.resolve(
    `./src/templates/product-detail-template.js`
  )
  const result = await graphql(
    `
      {
        allPowertoolsProduct {
          edges {
            node {
              code
              name
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create products pages.
  const products = result.data.allPowertoolsProduct.edges

  products.forEach(product => {
    createPage({
      path: product.node.code,
      component: productDetailTemplate,
      context: {
        code: product.node.code,
      },
    })
  })
}
