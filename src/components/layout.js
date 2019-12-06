import React from "react"
import PropTypes from "prop-types"
import HeaderContainer from "./HeaderContainer"
import FooterMenu from "./FooterMenu"
import FooterBar from "./FooterBar"

function Layout({ children }) {
  return (
    <div>
      <HeaderContainer />
      {children}
      <FooterMenu />
      <FooterBar />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
