const productsQuery = `{
        allContentfulProduct {
          edges {
            node {
              sku
            }
          }
        }
      }`
const flatten = arr =>
    arr.map(({node: {frontmatter, ...rest}}) => ({
        ...frontmatter,
        ...rest,
    }))
const settings = {attributesToSnippet: [`excerpt:20`]}
const indexing = [
    {
        query: productsQuery,
        transformer: ({data}) => flatten(data.allContentfulProduct.edges),
        indexName: `products`,
        settings,
    },
]
module.exports = indexing