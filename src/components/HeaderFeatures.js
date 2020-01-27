import React from "react"
import Dropdown from "./Dropdown"
import Svg from "./base/Svg"
import { Link } from "gatsby"

const HeaderFeatures = () => {
  const data = [
    { value: "products", text: "Products" },
    { value: "category", text: "Category" },
    { value: "id", text: "SKU" },
  ]

  return (
    <div className="bg-white h-10 text-gray-900 font-bold text-sm">
      <div className="xl:w-10/12 mx-2 xl:mx-auto flex items-center h-full">
        <div className="w-full flex items-center">
          <Dropdown
            id="searchSelector"
            name="searchSelector"
            className="hidden xl:block h-8 w-1/6 bg-gray-200 focus:outline-none appearance-none rounded-l rounded-r-none py-2 pl-2 pr-4 text-gray-900 uppercase tracking-wider font-semibold text-xs"
            options={data}
          />
          <input
            placeholder="Search Product, Category , SKU,..."
            className="h-8 w-5/6 pl-2 bg-gray-100 rounded-l xl:rounded-l-none border-l-2 border-gray-200 focus:border-l-2 focus:outline-none focus:bg-white focus:border-t-2 focus:border-b-2 focus:border-gray-200"
          ></input>
          <button className="h-8 focus:outline-none bg-java-500 w-40 uppercase text-sm rounded-r-lg text-white font-light hover:bg-peach-500 tracking-wider">
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.192 12.606a7 7 0 111.414-1.414l1.41 1.41a1.991 1.991 0 011.932.518l2.832 2.831c.78.78.785 2.04-.002 2.827a1.994 1.994 0 01-2.827.002l-2.831-2.832a1.994 1.994 0 01-.518-1.932l-1.41-1.41zM7 12A5 5 0 107 2a5 5 0 000 10z"
                  fillRule="evenodd"
                />
              </svg>
              <span className="text-xs">Search</span>
            </div>
          </button>
        </div>

        <div className="hidden xl:block w-3/12 ml-auto justify-end">
          <div className="flex justify-end">
            <div className="m-3">
              <Svg
                size={20}
                classes="fill-current pr-2 float-left"
                pathD="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
              <p className="float-left">favorites</p>
            </div>

            <div className="m-3">
              <Link to="/checkout">
                <Svg
                  size={20}
                  classes="fill-current pr-2 float-left"
                  pathD="M3 5l1.333 4H4a3 3 0 0 0 0 6h13v-2H4.007a1.001 1.001 0 1 1-.008-2H17l3-9H4V.997C4 .453 3.548 0 2.99 0H0v2h2l1 3zm2 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
                <p className="float-left">Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderFeatures
