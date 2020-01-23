import React from "react"
import { Link } from "gatsby"

const CheckoutStep = ({ name, number, completed }) => {
  return (
    <div className="flex justify-between bg-gray-300 py-4 my-4 w-5/6 px-6 rounded-lg content-center">
      <h3 className="text-lg font-medium">{name}</h3>
      {completed ? (
        <div className="flex content-center">
          <Link className="text-gray-600 font-light underline pr-4 text-xs">
            Edit
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="block w-6 h-6"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" fill-rule="evenodd" />
          </svg>
        </div>
      ) : (
        <div>{number}</div>
      )}
    </div>
  )
}

export default CheckoutStep
