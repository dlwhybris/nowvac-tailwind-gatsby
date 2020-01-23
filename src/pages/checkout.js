import React from "react"
import { graphql, Link } from "gatsby"
import ContactBlock from "../components/ContactBlock"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CheckoutStep from "../components/CheckoutStep"
import OrderSummarEntry from "../components/OrderSummarEntry"

const CheckoutPage = props => {
  const { data, location } = props

  return (
    <Layout location={location} title="Checkout">
      <SEO title="Checkout" />

      <div className="bg-gray-200">
        <div className="xl:w-10/12 mx-2 xl:mx-auto flex pb-32">
          <div className="checkoutOverview w-2/3">
            <h1>CHECKOUT/ FINAL REVIEW</h1>
            <h2>Secure Checkout</h2>
            <CheckoutStep />
            <CheckoutStep />
            <CheckoutStep />
            <CheckoutStep />
          </div>
          <div className="w-1/3  orderSummary bg-white shadow-lg p-8 pt-12">
            <div className="flex justify-between mb-4">
              <h4 className="text-lg font-semibold">Order Summary</h4>
              <span className="block bg-peach-600 px-3 py-1 rounded-lg text-white text-xs">
                3
              </span>
            </div>
            <p className="bg-gray-200 text-gray-900 font-light text-xs px-4 py-8 my-2 rounded-lg">
              SHIP TO: Mr. John Doe 5th Avenue, Los Angeles, California, 9001,
              United States
            </p>
            <OrderSummarEntry />
            <OrderSummarEntry />
            <OrderSummarEntry />
          </div>
        </div>
      </div>
      <ContactBlock />
    </Layout>
  )
}

export default CheckoutPage
