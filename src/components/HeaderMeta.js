import React, { Component } from "react"

export default class HeaderMeta extends Component {
  render() {
    return (
      <div className="bg-gray-200">
        <div className="h-10 text-gray-600 text-xs tracking-wider uppercase xl:w-10/12 mx-2 xl:mx-auto font-hairline">
          <ul className="h-full flex justify-between items-center">
            <li className="hover:text-gray-800">GXS DRY SCREW VACUUM PUMPS</li>
            <li className="hover:text-gray-800">
              FREE DELIVERY FOR ALL ORDERS ABOVE 500,- EUR
            </li>
            <li className="hover:text-gray-800">
              THE SCIENCE OF ADVANCED VACUUM
            </li>
            <li className="flex hover:text-gray-800 items-center">
              <svg
                className="fill-current w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.174 16.826a15.053 15.053 0 0 1-8-8l2.12-2.12C5.686 6.314 6 5.556 6 5.009V.991A1 1 0 0 0 5 0H1.002A1 1 0 0 0 0 1.001V3c0 9.389 7.611 17 17 17h1.999A.998.998 0 0 0 20 18.998V15a1 1 0 0 0-.99-1h-4.02c-.546 0-1.304.314-1.696.706l-2.12 2.12z"
                  fillRule="evenodd"
                />
              </svg>
              <p className="pr-1"> +49 221 347 1112</p>
            </li>
            <li className="flex hover:text-gray-800 items-center">
              <svg
                className="fill-current w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.878 10.098L20 14v2l-6.373-4.902L10 14l-3.627-2.902L0 16v-2l5.122-3.902L0 6V4l10 8 10-8v2l-5.122 4.098zM18.009 2C19.11 2 20 2.895 20 3.994v12.012A1.997 1.997 0 0 1 18.01 18H1.99C.892 18 0 17.105 0 16.006V3.994C0 2.893.898 2 1.99 2h16.02z"
                  fillRule="evenodd"
                />
              </svg>
              <p className="pr-1"> SERVICE@NOWVAC.COM</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
