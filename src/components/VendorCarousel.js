import React, { Component } from "react"

export default class VendorCarousel extends Component {
  render() {
    return (
      <div className="w-10/12 mx-auto flex items-center h-full flex-wrap text-sm">
        <div className="w-8/12 flex items-center">
          <div className="-ml-8 pr-8">
            <svg
              className="fill-current"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p>
              Leybold offers a large range of refurbished Leybold products.
              Choose out of hundreds of items online.
            </p>

            <div className="uppercase font-bold flex hover:text-peach-500">
              <a href="/">Further info</a>
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
            </div>
          </div>
        </div>
        <div className="w-4/12 flex justify-around items-center">
          <img className="w-48 py-4" src="http://placehold.it/495x310" alt="" />
          <img className="w-48 py-4" src="http://placehold.it/495x310" alt="" />

          <div className="-mr-8">
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
          </div>
        </div>

        <div className="w-full flex mx-auto justify-center py-4">
          <div className="w-10 h-2 border-b-2 border-black mx-2"></div>
          <div className="w-10 h-2 border-b-2 border-gray-500 mx-2"></div>
          <div className="w-10 h-2 border-b-2 border-gray-500 mx-2"></div>
        </div>
      </div>
    )
  }
}
