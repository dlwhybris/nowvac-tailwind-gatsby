import React from "react"
import FacetOptionGroup from "./FacetOptionGroup"

const FacetOptions = () => {
  const facetOptionValues = [
    "Leybold",
    "Edwards",
    "Gamma Vacuum",
    "Bosch",
    "Panasonic",
  ]
  return (
    <div>
      <FacetOptionGroup options={facetOptionValues} title="Brand" />
      <FacetOptionGroup options={facetOptionValues} title="Category" />
      <FacetOptionGroup options={facetOptionValues} title="Application" />
    </div>
  )
}

export default FacetOptions
