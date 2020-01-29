import React from "react"
import FacetFilters from "./FacetFilters"
import FacetOptions from "./FacetOptions"
import ProductGridDescription from "./ProductGridDescription"

const FacetContainer = () => {
  return (
    <>
      <ProductGridDescription className={"lg:hidden mt-8 p-2"} />
      <div className="w-full lg:w-3/12 bg-white">
        <div className="shadow-lg">
          <div className="w-8/12 mx-auto pt-8 pb-2">
            <FacetFilters />
          </div>
        </div>
        <div className="bg-gray-100 shadow-inner ">
          <div className="w-8/12 mx-auto pt-8 pb-2">
            <FacetOptions />
          </div>
        </div>
      </div>
    </>
  )
}

export default FacetContainer
