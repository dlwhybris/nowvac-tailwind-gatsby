import React from "react"
import PropTypes from "prop-types"
import HeaderContainer from "./HeaderContainer"
import FooterMenu from "./FooterMenu"
import FooterBar from "./FooterBar"

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      {children}
      <FooterMenu />
      <FooterBar />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
