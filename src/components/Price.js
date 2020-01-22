import React from "react"

const Price = ({ className, children }) => {
  return (
    <p class="text -bold -large">
      <span class="price-currency | js-currency-sign">$</span>
      <span class="price-value">1,750.00</span>
      {children}
    </p>
  )
}

export default Price
