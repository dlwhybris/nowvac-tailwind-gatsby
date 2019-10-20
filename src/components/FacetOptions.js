import React, { Component } from "react"
import FacetOptionGroup from "./FacetOptionGroup"

export default class FacetOptions extends Component {
  render() {
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
}
