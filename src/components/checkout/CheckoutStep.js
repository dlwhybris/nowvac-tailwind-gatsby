import React from "react"
import { Link } from "gatsby-plugin-intl"

const CheckoutStep = ({ name, number, completed }) => {
  return (
    <div className="lg:w-5/6 flex justify-between items-center bg-gray-300 py-4 my-4 px-6 rounded-lg">
      <h3 className="text-lg font-medium">{name}</h3>
      {completed ? (
        <div className="flex items-center">
          <Link
            to="/checkout"
            className="text-gray-600 font-light underline pr-4 text-xs"
          >
            Edit
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="block w-6 h-6"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" fillRule="evenodd" />
          </svg>
        </div>
      ) : (
        <div className="text-2xl font-bold">{number}</div>
      )}
    </div>
  )
}

export default CheckoutStep
