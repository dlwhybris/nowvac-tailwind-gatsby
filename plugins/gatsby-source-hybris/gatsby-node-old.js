const fetch = require("node-fetch")
exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const processproduct = product => {
    const nodeId = createNodeId(product.code)
    const nodeContent = JSON.stringify(product)
    const nodeData = Object.assign({}, product, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `PowertoolsProduct`,
        content: nodeContent,
        contentDigest: createContentDigest(product),
      },
    })
    return nodeData
  }

  const apiUrl = configOptions.url
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      .then(data => {
        data.products.forEach(product => {
          console.log(
            "url",
            `https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com/rest/v2/powertools/products/${product.code}/reviews?fields=DEFAULT`
          )
          fetch(
            `https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com/rest/v2/powertools/products/${product.code}/reviews?fields=DEFAULT`
          )
            .then(reviewResponse => reviewResponse.json())
            .then(console.log)
            .then(reviews => (product.reviews = reviews))

          const nodeData = processproduct(product)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}
