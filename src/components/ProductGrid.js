import React from "react"
import ProductGridItem from "./ProductGridItem"
import { usePowertoolsProducts } from "../hooks/use-powertools-products"

const ProductGrid = () => {
  const products = usePowertoolsProducts()

  return (
    <div className="pt-8 pb-2 px-6">
      <h3 className="uppercase text-gray-600 font-semibold text-sm tracking-wider">
        Products / Vacuum pumps
      </h3>
      <h1 className="text-3xl">nXDS Scroll Pumps</h1>
      <p className="text-gray-700 tracking-wider text-sm pt-4 pb-8">
        nXDS improves on legacy XDS pumps by offering increased pumping speeds,
        combined with lower ultimate pressures, lower power consumption and
        lower noise. Gas ballast allows for pumping of condensable vapours
        including, water, solvents, dilute acids and bases.
      </p>
      {/* add pagination and icons */}
      <div className="flex flex-wrap">
        {products.map(entry => (
          <div className="w-1/3 mb-12">
            <ProductGridItem key={entry.node.code} product={entry.node} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
