import React from "react"

function ProductReviewItem({ data }) {
  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={
          "fill-current w-5 h-5 " +
          (i < data.stars ? "text-mango-500" : "text-gray-400")
        }
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          fillRule="evenodd"
        />
      </svg>
    )
  }

  return (
    <div className="w-full mb-4 p-4 rounded bg-gray-200 text-sm">
      <div className="flex justify-between w-full">
        <b>{data.name}</b>
        <p className="text-gray-700">{data.date}</p>
      </div>
      <div className="flex my-2">{stars}</div>
      <p className="text-gray-700">{data.reviewText}</p>
    </div>
  )
}

export default ProductReviewItem
