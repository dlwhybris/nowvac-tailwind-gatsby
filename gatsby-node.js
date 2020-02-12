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
        allContentfulProduct {
          edges {
            node {
              sku
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
  const products = result.data.allContentfulProduct.edges

  products.forEach(product => {
    console.log("products/" + product.node.sku)
    createPage({
      path: "products/" + product.node.sku,
      component: productDetailTemplate,
      context: {
        sku: product.node.sku,
      },
    })
  })
}
