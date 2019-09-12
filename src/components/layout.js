import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import FooterMenu from "./FooterMenu"
import FooterBar from "./FooterBar"

function Layout({ children }) {
  return (
    <div>
      <Header />
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
