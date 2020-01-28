const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest },
  { plugins, ...options }
) => {
  const apiUrl = `${options.url}products/search?${queryString.stringify(
    options.searchParameters
  )}`
  const productResponse = await fetch(apiUrl)
  const productData = await productResponse.json()

  await Promise.all(
    productData.products.map(async product => {
      const reviewReponse = await fetch(
        `${options.url}products/${product.code}/reviews?fields=DEFAULT`
      )
      const reviewData = await reviewReponse.json()
      product.reviews = reviewData.reviews

      createNode({
        ...product,
        id: createNodeId(`powertools-product-${product.code}`),
        parent: null,
        children: [],
        internal: {
          type: "PowertoolsProduct",
          content: JSON.stringify(product),
          contentDigest: createContentDigest(product),
        },
      })
    })
  )
}
