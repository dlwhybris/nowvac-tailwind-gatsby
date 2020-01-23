import React from "react"

const ProductStatus = ({ period, showDeliveryOptions }) => {
  return (
    <div className="flex flex-row justify-start mb-5 text-xs tracking-wide">
      <span className="p-1 m-1 mr-3 rounded-sm leading-none bg-green-500"></span>
      <p className="w-auto mr-5 inline-block text-green-500">
        Delivery in 2-3 weeks
      </p>

      <span className="relative pr-5 inline">
        {showDeliveryOptions === true ? (
          <a
            href="https://www.google.be"
            className="link -gray -extern text -small"
            title="Delivery options"
          >
            Delivery options
          </a>
        ) : (
          ""
        )}
      </span>
    </div>
  )
}

export default ProductStatus
