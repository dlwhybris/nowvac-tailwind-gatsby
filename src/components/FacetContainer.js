import React, { Component } from "react"
import FacetFilters from "./FacetFilters"
import FacetOptions from "./FacetOptions"

export default class FacetContainer extends Component {
  render() {
    return (
      <div className="">
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
    )
  }
}
