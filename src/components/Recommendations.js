import React, { Component } from "react"
import ProductCard from "./ProductCard"
import FullCoverCard from "./FullCoverCard"

export default class Recommendations extends Component {
  render() {
    return (
      <section className="bg-gray-200 py-4">
        <div className="w-10/12 mx-auto">
          <h2 className="text-sm font-medium uppercase text-gray-600 pt-8 tracking-wide text-gray-400">
            Nowvac Online Shop
          </h2>
          <h3 className="text-4xl font-normal pb-8 leading-none">
            Recommandations for you
          </h3>
          <div className="flex py-4">
            <ProductCard />
            <ProductCard />
            <FullCoverCard />
          </div>

          <button className="my-12 mx-auto uppercase flex rounded-sm bg-gray-400 px-5 py-3 items-center text-sm tracking-wide font-medium text-black">
            <p>All Products</p>
            <svg
              className="fill-current"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    )
  }
}
