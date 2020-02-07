import React from "react"
import HeaderSearch from "./HeaderSearch"
import Svg from "./base/Svg"
import { Link } from "gatsby-plugin-intl"

const HeaderFeatures = () => {
  return (
    <div className="bg-white h-10 text-gray-900 font-bold text-sm">
      <div className="xl:w-10/12 mx-2 xl:mx-auto flex items-center h-full">
        <HeaderSearch />
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
