import React from "react"

function OrderPrice() {
  return (
    <>
      <div className="flex justify-between font-semibold">
        <span>Subtotal:</span>
        <span>$ 5.172,74</span>
      </div>
      <div className="flex justify-between">
        <span>Delivery: </span>
        <span className="font-semibold">$ 19.99</span>
      </div>
      <div className="flex justify-between text-lg font-semibold">
        <span>Order total:</span>
        <span>$ 5,192.46</span>
      </div>
    </>
  )
}

export default OrderPrice
