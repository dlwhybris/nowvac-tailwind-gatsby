import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FacetContainer from "../components/FacetContainer"
import ProductGrid from "../components/ProductGrid"

const ProductListPage = location => {
  return (
    <Layout location={location}>
      <SEO title="Homepage" />
      <main className="text-gray-900 antialiased bg-gray-300 w-full">
        <div className="xl:w-10/12 mx-2 xl:mx-auto flex flex-col lg:flex-row">
          <FacetContainer />
          <div className="w-full lg:w-9/12">
            <ProductGrid />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ProductListPage
