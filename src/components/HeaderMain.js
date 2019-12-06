import React, { Component } from "react"
import LanguageSelector from "./LanguageSelector"
import CurrencySelector from "./CurrencySelector"
import { Link } from "gatsby"

export default class HeaderMain extends Component {
  render() {
    return (
      <div className="bg-white h-20 text-gray-900 font-bold text-sm">
        <nav className="xl:w-10/12 mx-2 xl:mx-auto flex items-center h-full">
          <div className="w-2/12">
            <Link to="/">
              <img
                className="w-40"
                src="https://nowvac.ljft.de/assets/img/logo.png"
                alt=""
              />
              <span className="text-xs font-hairline text-gray-500">
                Earth's biggest vacuum store
              </span>
            </Link>
          </div>
          <div className="w-7/12 flex uppercase">
            <Link
              to="/"
              className="pr-12 hover:text-peach-500"
              activeClassName="text-peach-500"
            >
              Home
            </Link>
            <Link
              to="/brands"
              className="pr-12 hover:text-peach-500"
              activeClassName="text-peach-500"
            >
              Brands
            </Link>
            <Link
              to="/applications"
              className="pr-12 hover:text-peach-500"
              activeClassName="text-peach-500"
            >
              Applications
            </Link>
            <Link
              to="/product-list"
              className="pr-12 hover:text-peach-500"
              activeClassName="text-peach-500"
            >
              Products
            </Link>
            <Link
              to="/service"
              className="pr-12 hover:text-peach-500"
              activeClassName="text-peach-500"
            >
              Service
            </Link>
            <Link
              to="/contact"
              className="pr-12 hover:text-peach-500"
              activeClassName="text-peach-500"
            >
              Contact us
            </Link>
          </div>
          <div className="w-2/12 flex justify-start">
            <LanguageSelector />
            <CurrencySelector />
            <Link to="/login" className="text-gray-500 px-4 text-xs">
              Login
            </Link>
          </div>
          <div className="w-1/12 flex justify-end">
            <div className="pl-4">
              <svg
                className="fill-current"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            <div className="pl-4">
              <svg
                className="fill-current"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5l1.333 4H4a3 3 0 0 0 0 6h13v-2H4.007a1.001 1.001 0 1 1-.008-2H17l3-9H4V.997C4 .453 3.548 0 2.99 0H0v2h2l1 3zm2 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
