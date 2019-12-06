import React from "react"
import HeaderInfo from "./HeaderInfo"
import HeaderMeta from "./HeaderMeta"
import HeaderMain from "./HeaderMain"

function HeaderContainer() {
  return (
    <header className="shadow-lg border-b-4 border-gray-200">
      <HeaderInfo />
      <HeaderMeta />
      <HeaderMain />
    </header>
  )
}

export default HeaderContainer
