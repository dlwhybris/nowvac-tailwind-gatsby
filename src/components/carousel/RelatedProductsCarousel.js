import React from "react"
import ProductGridItem from "../ProductGridItem"
import { usePowertoolsProducts } from "../../hooks/use-powertools-products"

const RelatedProductsCarousel = () => {
  const products = usePowertoolsProducts()

  return (
    <div className="w-10/12 py-16 m-auto">
      <h1 className="text-2xl">Simular Products</h1>
      <ul className="flex flex-wrap justify-between">
        {products.slice(0, 4).map(entry => (
          <div key={entry.node.code} className="w-1/4 mb-12">
            <ProductGridItem key={entry.node.code} product={entry.node} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default RelatedProductsCarousel
