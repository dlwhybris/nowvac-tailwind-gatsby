import React from "react"
import HeaderInfo from "./HeaderInfo"
import HeaderMeta from "./HeaderMeta"
import HeaderMain from "./HeaderMain"

function Header() {
  return (
    <header>
      <HeaderInfo />
      <HeaderMeta />
      <HeaderMain />
    </header>
  )
}

export default Header
