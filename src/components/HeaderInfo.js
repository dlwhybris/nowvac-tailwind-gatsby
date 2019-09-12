import React, { Component } from "react"

export default class HeaderInfo extends Component {
  render() {
    return (
      <div className="bg-mango-500 h-12 text-gray-900 text-sm tracking-wide">
        <div className="w-10/12 mx-auto flex items-center justify-between h-full">
          <p className="">
            Save up to 50% with voucher code
            <span className="font-bold"> 50NOWVAC </span>
            till 23th of March!
          </p>
          <div className="uppercase font-bold flex items-center hover:text-peach-500 h-8">
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
              ></path>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}
