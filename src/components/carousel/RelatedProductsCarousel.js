import React from "react"
import ProductGridItem from "../ProductGridItem"

const RelatedProductsCarousel = () => {
  return (
    <div className="w-10/12 py-16 m-auto">
      <h1 className="text-2xl">Simular Products</h1>
      <ul className="flex flex-wrap justify-between">
        <div className="w-1/4 mb-12">
          <ProductGridItem />
        </div>

        <div className="w-1/4 mb-12">
          <ProductGridItem />
        </div>

        <div className="w-1/4 mb-12">
          <ProductGridItem />
        </div>

        <div className="w-1/4 mb-12">
          <ProductGridItem />
        </div>
      </ul>
    </div>
  )
}

export default RelatedProductsCarousel
