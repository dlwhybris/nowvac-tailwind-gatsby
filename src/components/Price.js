import React from "react"

const Price = ({ price, className, children }) => {
  return (
    <p className="flex flex-row">
      <span className="mr-2 font-bold text-lg">{price.formattedValue}</span>
      {/* <span className="mr-3 font-bold text-lg">1,750.00</span> */}
      {children}
    </p>
  )
}

export default Price
