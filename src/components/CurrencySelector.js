import React from "react"
import Dropdown from "./Dropdown"

const CurrencySelector = () => {
  const data = [
    { value: "EUR", text: "EUR" },
    { value: "USD", text: "USD" },
    { value: "NL", text: "NL" },
  ]

  return (
    <div className="px-4 text-xs">
      <Dropdown id="currencySelector" name="currencySelector" options={data} />
    </div>
  )
}

export default CurrencySelector
