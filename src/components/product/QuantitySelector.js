import React from "react"

const QuantitySelector = () => {
  return (
    <div className="inline-flex flex-row justify-center bg-gray-200 w3/12 h-12 p-2 rounded leading-none">
      <div className="flex-start bg-gray-300 p-2 rounded cursor-pointer">-</div>
      <input
        id="quantity"
        type="text"
        disabled="disabled"
        className="inline-block bg-gray-200 w-12 leading-none text-center"
        value="1"
      />
      <div className="flex-end bg-gray-300 p-2 rounded cursor-pointer">+</div>
    </div>
  )
}

export default QuantitySelector
