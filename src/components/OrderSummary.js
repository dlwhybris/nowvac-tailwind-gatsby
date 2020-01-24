import React from "react"
import OrderSummaryEntry from "../components/OrderSummaryEntry"
import OrderPrice from "../components/OrderPrice"

function OrderSummary() {
  return (
    <div className="w-full lg:w-1/3 lg:shadow-lg bg-white p-8 pt-12">
      <div className="flex justify-between mb-4">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <span className="block bg-java-500 px-3 py-1 rounded-lg text-white text-xs">
          3
        </span>
      </div>
      <div className="bg-gray-200 font-light text-xs px-4 py-6 my-2 rounded-lg">
        <p className="font-semibold text-gray-700">SHIP TO:</p>
        <p className="text-gray-600">Mr. John Doe</p>
        <p className="text-gray-600">
          5th Avenue, Los Angeles, California, 9001, United States
        </p>
      </div>
      <OrderSummaryEntry />
      <OrderSummaryEntry />
      <OrderSummaryEntry />
      <div className="bg-gray-200 text-xs pl-20 pt-4 pb-8 pr-4 rounded-b-lg">
        <OrderPrice />
      </div>
    </div>
  )
}

export default OrderSummary
