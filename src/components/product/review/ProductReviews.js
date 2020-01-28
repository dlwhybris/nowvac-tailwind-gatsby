import React, { useState } from "react"
import ProductReviewItem from "./ProductReviewItem"
import ReactStars from "react-rating-stars-component"

function ProductReview({ reviews }) {
  const displayReviews = reviews.map((review, index) => (
    <ProductReviewItem key={index} review={review} />
  ))

  const [isNameActive, setIsNameActive] = useState({
    focus: false,
    active: false,
  })
  const [isEmailActive, setIsEmailActive] = useState({
    focus: false,
    active: false,
  })
  const [isReviewTextActive, setIsReviewTextActive] = useState({
    focus: false,
    active: false,
  })

  function setLabelState(labelState) {
    return (
      (labelState.focus
        ? "mt-2 transition-linear transform-x-0 text-java-500 text-xs "
        : "text-gray-500 ") +
      (labelState.active && !labelState.focus
        ? "mt-2 transition-linear transform-x-0 text-xs "
        : "") +
      "absolute bg-white mx-2 my-6 pointer-events-none"
    )
  }

  function handleInputBlur(e, setClasses) {
    if (e.target.value === "") {
      setClasses({ focus: false, active: false })
    } else {
      setClasses({ focus: false, active: true })
    }
  }

  function handleInputFocus(e, setClasses) {
    if (e.target.value === "") {
      setClasses({ focus: true, active: false })
    } else {
      setClasses({ focus: true, active: true })
    }
  }

  return (
    <div className="py-16 mx-4 flex flex-col xl:flex-row xl:justify-between xl:w-10/12 xl:m-auto">
      <div className="w-full xl:w-1/2 xl:pr-20">
        <h1 className="text-2xl">Write a review</h1>
        <div className="flex flex-col">
          <div>
            <label htmlFor="name" class={setLabelState(isNameActive)}>
              Your Name
            </label>
            <input
              autoComplete="none"
              id="name"
              type="text"
              className="w-full p-2 mt-4 rounded border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
              onFocus={e => handleInputFocus(e, setIsNameActive)}
              onBlur={e => handleInputBlur(e, setIsNameActive)}
            />
          </div>
          <div>
            <label htmlFor="email" class={setLabelState(isEmailActive)}>
              Your E-Mail-Address
            </label>
            <input
              autoComplete="none"
              id="email"
              type="text"
              className="w-full p-2 mt-4 rounded border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
              onFocus={e => handleInputFocus(e, setIsEmailActive)}
              onBlur={e => handleInputBlur(e, setIsEmailActive)}
            />
          </div>
          <div>
            <label
              htmlFor="reviewText"
              class={setLabelState(isReviewTextActive)}
            >
              Review Text
            </label>
            <textarea
              id="reviewText"
              className="w-full p-2 mt-4 h-48 p-2 rounded border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
              onFocus={e => handleInputFocus(e, setIsReviewTextActive)}
              onBlur={e => handleInputBlur(e, setIsReviewTextActive)}
            />
          </div>
          <div className="flex mt-4 justify-between items-center text-gray-700">
            <div className="flex items-center">
              <span className="mr-2 xl:mr-12">Your Rating</span>
              <ReactStars
                size={20}
                half={false}
                color1={"#CBD5E0"}
                color2={"#FBB303"}
              />
            </div>
            <button className="uppercase flex rounded-lg bg-java-500 px-5 py-3 items-center text-sm text-white tracking-wide font-medium hover:bg-peach-500 focus:outline-none">
              Submit review
            </button>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2 xl:pl-20">
        <h1 className="text-2xl mb-4">Reviews ({displayReviews.length})</h1>
        {displayReviews}
      </div>
    </div>
  )
}

export default ProductReview
