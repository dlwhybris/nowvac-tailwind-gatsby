import React from "react"

const OrderSummaryEntry = () => {
  return (
    <div className="flex justify-between border-b border-gray-400 py-4 text-xs">
      <div className="flex">
        <div>
          <img
            className="bg-cover rounded-lg"
            src="https://placehold.it/70x70"
            alt=""
          />
        </div>
        <div className="ml-2">
          <p className="text-red-700">LEYBOLD</p>
          <p className="font-semibold">Small Compact Vacuum Pump S 1.5</p>
          <p className="text-gray-600">SKU: 10101 </p>
          <p className="text-gray-600">QTY: 1</p>
        </div>
      </div>
      <div>
        <p>$ 1,750.00</p>
        <p className="font-semibold">$ 1,750.0</p>
      </div>
    </div>
  )
}

export default OrderSummaryEntry
