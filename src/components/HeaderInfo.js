import React from "react"
import { Link } from "gatsby-plugin-intl"

const HeaderInfo = () => {
  return (
    <div className="bg-mango-500 h-12 text-gray-900 text-sm tracking-wide">
      <div className="xl:w-10/12 mx-2 xl:mx-auto flex items-center justify-between h-full">
        <p className="">
          Save up to 50% with voucher code
          <span className="font-bold"> 50NOWVAC </span>
          till 23th of March!
        </p>
        <div className="h-full">
          <Link
            className="uppercase font-bold hover:text-peach-500 h-8"
            to="/404"
          >
            <div className="flex items-center h-full">
              <p>Further info</p>
              <svg
                className="w-5 h-5 pl-1 mt-1 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.536 10.707L9 14.243l-1.414-1.415L10.414 10 7.586 7.172 9 5.757 13.243 10l-.707.707zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderInfo
