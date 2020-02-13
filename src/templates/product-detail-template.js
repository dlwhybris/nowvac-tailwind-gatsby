import React from "react"
import {graphql} from "gatsby"
import {injectIntl} from "gatsby-plugin-intl"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ImageCarousel from "../components/carousel/ImageCarousel"
import ProductOrderCard from "../components/product/ProductOrderCard"
import ProductInfoTab from "../components/product/ProductInfoTab"
import ProductSpecifications from "../components/product/ProductSpecifications"
import StoryCarousel from "../components/carousel/StoryCarousel"
import RelatedProductsCarousel from "../components/carousel/RelatedProductsCarousel"
import ProductReviews from "../components/product/review/ProductReviews"

const ProductDetailTemplate = ({data, location, pageContext, intl}) => {
    const product = data.allContentfulProduct.edges.reduce(function (p1, p2) {
        return (p1.node.node_locale == intl.locale) ? p1 : p2;
    }).node;

    return (
        <Layout location={location} title="Product Detail Page">
            <SEO title={product.name}/>

            <main className="w-full text-gray-900 antialiased">
                {/* Create a Generic Carousel that works for most */}
                <div className="flex flex-row-reverse md:flex-row flex-wrap md:flex-no-wrap w-11/12 lg:w-10/12 m-auto">
                    <ImageCarousel images={product.image}/>
                    <ProductOrderCard product={product}/>
                </div>

                <div className="flex flex-row flex-wrap md:flex-no-wrap w-11/12 lg:w-10/12 m-auto mt-20">
                    <ProductInfoTab product={product}/>
                    <ProductSpecifications product={product}/>
                </div>

                <StoryCarousel/>

                <div className="bg-gray-200">
                    <RelatedProductsCarousel/>
                </div>

                <ProductReviews
                    reviews={product.review}
                    productCode={pageContext.code}
                />
            </main>
        </Layout>
    )
}

export default injectIntl(ProductDetailTemplate);

export const pageQuery = graphql`
  query ContentfulProductBySku($sku: String!) {
    allContentfulProduct(filter: {sku: {eq: $sku}}) {
      edges{
        node{
          sku
          slug
          price
          node_locale
          image {
            title
            file {
              url
            }
          }
          productDescription {
            productDescription
          }
          name
          review {
            date
            rating
            comment {
              comment
            }
            principalName
          }
        }
      }
    }
  }
`

// Query for hybris
// export const pageQuery = graphql`
//   query PowertoolsProductByCode($code: String!) {
//     powertoolsProduct(code: { eq: $code }) {
//       name
//       summary
//       description
//       stock {
//         stockLevelStatus
//       }
//       price {
//         formattedValue
//       }
//       reviews {
//         rating
//         date(formatString: "DD MMMM YYYY", locale: "nl")
//         comment
//         headline
//         principal {
//           name
//         }
//       }
//       images {
//         format
//         imageType
//         url
//       }
//     }
//   }
// `
