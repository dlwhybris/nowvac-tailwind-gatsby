import React from "react"
import ProductGridItem from "./ProductGridItem"
import { usePowertoolsProducts } from "../hooks/use-powertools-products"
import ProductGridDescription from "./ProductGridDescription"

const ProductGrid = () => {
  const products = usePowertoolsProducts()

  return (
    <div className="pt-8 pb-2 px-2 lg:pl-6 lg:pr-0">
      <ProductGridDescription className={"hidden lg:block"} />
      {/* add pagination and icons */}
      <div className="flex flex-col md:flex-row flex-wrap">
        {products.map(entry => (
          <div key={entry.node.code} className="w-full md:w-1/2 lg:w-1/3 mb-12">
            <ProductGridItem product={entry.node} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
