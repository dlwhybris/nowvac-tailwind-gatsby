import React, { Component } from "react"
import ProductGridItem from "./ProductGridItem"

export default class ProductGrid extends Component {
  render() {
    return (
      <div className="pt-8 pb-2 px-6">
        <h3 className="uppercase text-gray-600 font-semibold text-sm tracking-wider">
          Products / Vacuum pumps
        </h3>
        <h1 className="text-3xl">nXDS Scroll Pumps</h1>
        <p className="text-gray-700 tracking-wider text-sm pt-4 pb-8">
          nXDS improves on legacy XDS pumps by offering increased pumping
          speeds, combined with lower ultimate pressures, lower power
          consumption and lower noise. Gas ballast allows for pumping of
          condensable vapours including, water, solvents, dilute acids and
          bases.
        </p>
        {/* add pagination and icons */}
        <div className="flex flex-wrap justify-between">
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
          <div className="w-1/3 mb-12">
            <ProductGridItem />
          </div>
        </div>
      </div>
    )
  }
}
