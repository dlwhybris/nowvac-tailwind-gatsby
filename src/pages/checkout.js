import React from "react"
import ContactBlock from "../components/ContactBlock"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CheckoutOverview from "../components/checkout/CheckoutOverview"
import OrderSummary from "../components/OrderSummary"

const CheckoutPage = props => {
  const { data, location } = props

  return (
    <Layout location={location} title="Checkout">
      <SEO title="Checkout" />

      <div className="bg-gray-200">
        <div className="w-full lg:w-10/12 lg:mx-auto lg:flex pb-32">
          <CheckoutOverview />
          <OrderSummary />
        </div>
      </div>
      <ContactBlock />
    </Layout>
  )
}

export default CheckoutPage
