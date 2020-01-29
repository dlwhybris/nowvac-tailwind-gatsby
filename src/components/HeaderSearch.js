import React from "react"
import Dropdown from "./Dropdown"

function HeaderSearch() {
  const data = [
    { value: "products", text: "Products" },
    { value: "category", text: "Category" },
    { value: "id", text: "SKU" },
  ]

  return (
    <div className="w-full flex items-center">
      <Dropdown
        id="searchSelector"
        name="searchSelector"
        selectClassName="hidden xl:block h-8 w-32 bg-gray-200 focus:outline-none appearance-none rounded-l rounded-r-none py-2 pl-2 pr-4 text-gray-900 uppercase tracking-wider font-semibold text-xs dropdown-background-icon"
        options={data}
      />
      <input
        placeholder="Search Product, Category , SKU,..."
        className="h-8 w-5/6 pl-2 bg-gray-100 rounded-l xl:rounded-l-none border-l-2 border-gray-200 focus:border-l-2 focus:outline-none focus:bg-white focus:border-t-2 focus:border-b-2 focus:border-gray-200"
      ></input>
      <button className="h-8 focus:outline-none bg-java-500 w-40 uppercase text-sm rounded-r-lg text-white font-light hover:bg-peach-500 tracking-wider">
        <div className="flex items-center justify-center">
          <svg
            className="fill-current text-white w-5 h-5 mr-2"
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
  )
}

export default HeaderSearch
