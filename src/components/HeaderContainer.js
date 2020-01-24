import React from "react"
import HeaderInfo from "./HeaderInfo"
import HeaderMeta from "./HeaderMeta"
import HeaderMain from "./HeaderMain"
import HeaderFeatures from "./HeaderFeatures"

const HeaderContainer = () => {
  return (
    <header className="shadow-lg border-b-4 border-gray-200">
      <HeaderInfo />
      <HeaderMeta />
      <div className="my-3">
        <HeaderMain />
        <HeaderFeatures />
      </div>
    </header>
  )
}

export default HeaderContainer
