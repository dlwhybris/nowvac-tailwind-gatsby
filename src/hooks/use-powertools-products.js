import { useStaticQuery, graphql } from "gatsby"
export const usePowertoolsProducts = () => {
  const { allPowertoolsProduct } = useStaticQuery(
    graphql`
      {
        allPowertoolsProduct {
          edges {
            node {
              code
              name
              price {
                value
              }
            }
          }
        }
      }
    `
  )
  return allPowertoolsProduct.edges
}
