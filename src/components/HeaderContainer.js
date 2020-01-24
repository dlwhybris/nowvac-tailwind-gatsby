import React from "react"
import HeaderInfo from "./HeaderInfo"
import HeaderMeta from "./HeaderMeta"
import HeaderMain from "./HeaderMain"
import HeaderFeatures from "./HeaderFeatures"

const HeaderContainer = () => {
  return (
    <header className="relative border-gray-200 shadow-md">
      <HeaderInfo />
      <HeaderMeta />
      <div className="mt-3 pb-3">
        <HeaderMain />
        <HeaderFeatures />
      </div>
    </header>
  )
}

export default HeaderContainer
