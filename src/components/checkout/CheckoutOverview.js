import React, { useState } from "react"
import CheckoutStep from "./CheckoutStep"
import OrderPrice from "../OrderPrice"

function CheckoutOverview() {
  const [isChecked, setChecked] = useState(false)

  return (
    <div className="mx-4 lg:w-2/3 lg:mx-0">
      <div className="pt-12">
        <h1 className="text-lg text-gray-800 font-thin">
          CHECKOUT/ FINAL REVIEW
        </h1>
        <h2 className="text-3xl text-gray-900 tracking-wide font-medium flex items-center">
          <svg
            className="fill-content text-gray-800 w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 14.732a2 2 0 10-2 0V17h2v-2.268zM13 6a3 3 0 00-6 0v2h6V6zM4 8V6a6 6 0 1112 0v2h1.005C18.107 8 19 8.902 19 10.009v7.982c0 1.11-.893 2.009-1.995 2.009H2.995A2.004 2.004 0 011 17.991V10.01C1 8.899 1.893 8 2.995 8H4z"
              fillRule="evenodd"
            />
          </svg>
          Secure Checkout
        </h2>
      </div>
      <div className="py-6">
        <CheckoutStep
          name="Shipment / Pick Up Location"
          completed={true}
          number="01"
        />
        <CheckoutStep name="Shipping Method" completed={true} number="02" />
        <CheckoutStep
          name="Payment & Billing Address"
          completed={true}
          number="03"
        />
        <CheckoutStep name="Final Review" completed={false} number="04" />
        <div className="border border-gray-300 py-4 my-4 w-full lg:w-5/6 px-6 rounded-lg">
          <OrderPrice />
          <div className="my-4">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setChecked(!isChecked)}
            />
            <span
              className={
                "text-xs ml-2 " +
                (isChecked ? "text-gray-800 font-semibold" : "text-gray-600")
              }
              onClick={() => setChecked(!isChecked)}
            >
              I am confirming that i have read and agreed with the{" "}
              <a href="" className="underline text-gray-800">
                Terms & Conditions
              </a>
            </span>
          </div>
          <div className="flex justify-between">
            <button className="group mt-6 uppercase flex rounded-lg bg-gray-400 px-5 py-3 items-center text-sm tracking-wide font-medium text-black hover:bg-gray-900 hover:text-white">
              <svg
                className="fill-current group-hover:transform-l-half group-hover:transition-linear w-5 h-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"
                  fillRule="evenodd"
                />
              </svg>
              <span>Back</span>
            </button>
            <button className="group mt-6 uppercase flex rounded-lg bg-java-500 px-5 py-3 items-center text-sm text-white tracking-wide font-medium hover:bg-peach-500">
              <span>Place order</span>
              <svg
                className="fill-current group-hover:transform-r-half group-hover:transition-linear w-5 h-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutOverview
