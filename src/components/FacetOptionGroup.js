import React, { Component } from "react"

export default class FacetOptionGroup extends Component {
  render() {
    const { title, options } = this.props
    return (
      <div>
        <div className="flex items-center justify-start">
          <h2 className="font-bold text-sm tracking-wide uppercase tracking-wider hover:text-peach-500">
            {title}
          </h2>
        </div>
        <ul className="mt-4 mb-6">
          {options.map(option => (
            <li
              key={option}
              className="font-normal text-sm py-1 flex items-center justify-between"
            >
              <div className="flex items-center">
                <input type="checkbox" className="border-black border-2" />
                <p className="ml-2">{option}</p>
              </div>
              <p className="">4</p>
            </li>
          ))}
          {}
        </ul>
      </div>
    )
  }
}
