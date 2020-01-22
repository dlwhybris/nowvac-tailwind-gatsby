import React from "react"
import LanguageSelector from "./LanguageSelector"
import CurrencySelector from "./CurrencySelector"
import { Link } from "gatsby"

const HeaderMain = () => {
  return (
    <div className="bg-white h-15 text-gray-900 font-bold text-sm">
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
            className="pr-8 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            Home
          </Link>
          <Link
            to="/brands"
            className="pr-8 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            Brands
          </Link>
          <Link
            to="/applications"
            className="pr-8 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            Applications
          </Link>
          <Link
            to="/product-list"
            className="pr-8 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            Products
          </Link>
          <Link
            to="/service"
            className="pr-8 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="pr-8 hover:text-peach-500"
            activeClassName="text-peach-500"
          >
            Contact us
          </Link>
        </div>
        <div className="w-2/12 flex ml-auto justify-end">
          <LanguageSelector />
          <CurrencySelector />
          <Link to="/login" className="text-gray-500 px-4 text-xs">
            Login
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default HeaderMain
