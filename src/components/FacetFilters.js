import React from "react"
import FacetFilteredValue from "./FacetFilteredValue"

const FacetFilters = () => {
  return (
    <div>
      <div className="flex items-center justify-start">
        <h2 className="font-semibold text-lg tracking-wide">Filtered by</h2>
        <p className="ml-2 px-2 py-1 bg-gray-200 rounded-lg text-xs">3</p>
      </div>
      <ul className="mt-4">
        <FacetFilteredValue filterValue="Edwards" />
        <FacetFilteredValue filterValue="Dry Compressing" />
        <FacetFilteredValue filterValue="Panasonic" />
      </ul>
      <button className="block text-gray-600 text-xs mt-6 font-semibold">
        Reset all
      </button>
    </div>
  )
}

export default FacetFilters
