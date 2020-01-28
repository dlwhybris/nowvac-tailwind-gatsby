const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest },
  { plugins, ...options }
) => {
  const apiUrl = `${options.url}?${queryString.stringify(
    options.searchParameters
  )}`
  const response = await fetch(apiUrl)
  const data = await response.json()

  data.products.forEach(product => {
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
}
