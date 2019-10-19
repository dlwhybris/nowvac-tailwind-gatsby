import React, { Component } from "react"

export default class ContactBlock extends Component {
  render() {
    return (
      <div className="w-full bg-white">
        <div className="xl:w-10/12 mx-2 xl:mx-auto flex">
          <div className="w-1/3 border-r-2 border-gray-200  py-8">
            <h4 className="uppercase text-gray-500 text-xs py-4 tracking-wider">
              GET IN CONTACT
            </h4>
            <svg
              className="text-gray-200 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.174 16.826a15.053 15.053 0 0 1-8-8l2.12-2.12C5.686 6.314 6 5.556 6 5.009V.991A1 1 0 0 0 5 0H1.002A1 1 0 0 0 0 1.001V3c0 9.389 7.611 17 17 17h1.999A.998.998 0 0 0 20 18.998V15a1 1 0 0 0-.99-1h-4.02c-.546 0-1.304.314-1.696.706l-2.12 2.12z"
                fillRule="evenodd"
              />
            </svg>

            <p className="text-gray-900 text-2xl pt-4">+49 221 347 1112</p>
            <p className="tracking-wide text-gray-600 text-sm">
              Monday to Friday, 9am - 6pm MEZ.
            </p>
          </div>
          <div className="w-1/3 border-r-2 border-gray-200 px-4 py-8">
            <h4 className="uppercase text-gray-500 text-xs py-4 tracking-wider">
              WRITE US
            </h4>
            <svg
              className="text-gray-200 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.878 10.098L20 14v2l-6.373-4.902L10 14l-3.627-2.902L0 16v-2l5.122-3.902L0 6V4l10 8 10-8v2l-5.122 4.098zM18.009 2C19.11 2 20 2.895 20 3.994v12.012A1.997 1.997 0 0 1 18.01 18H1.99C.892 18 0 17.105 0 16.006V3.994C0 2.893.898 2 1.99 2h16.02z"
                fillRule="evenodd"
              />
            </svg>
            <p className="text-gray-900 text-2xl pt-4">Contact@nowvac.com</p>
            <p className="tracking-wide text-gray-600 text-sm">
              We try to reach you in 24h weekdays.
            </p>
          </div>
          <div className="w-1/3  px-4 py-8">
            <h4 className="uppercase text-gray-500 text-xs py-4 tracking-wider">
              DOCUMENTATION
            </h4>
            <svg
              className="text-gray-200 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7c0 .814-.425 1.84-1.004 2.418l-1.578 1.578C11.214 11.2 11 11.715 11 12v1H9v-1c0-.817.426-1.84 1.004-2.418l1.578-1.578C11.786 7.8 12 7.284 12 7a2 2 0 1 0-4 0H6a4 4 0 1 1 8 0zm-4 13c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm-1-5h2v2H9v-2z"
                fill="#000"
                fill-rule="evenodd"
              />
            </svg>
            <p className="text-gray-900 text-2xl pt-4">Check our faq-section</p>
            <p className="tracking-wide text-gray-600 text-sm">
              How can we help?
            </p>
          </div>
        </div>
      </div>
    )
  }
}
