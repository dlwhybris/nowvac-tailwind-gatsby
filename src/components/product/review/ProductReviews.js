import React, { useState } from "react"
import ProductReviewItem from "./ProductReviewItem"
import ReactStars from "react-rating-stars-component"

function ProductReview({ reviews, productCode }) {
  const displayReviews = reviews.map((review, index) => (
    <ProductReviewItem key={index} review={review} />
  ))
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)

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

  const postReview = event => {
    event.preventDefault()

    fetch(
      `https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com/rest/v2/powertools/products/${productCode}/reviews?fields=DEFAULT`,
      {
        method: "post",
        body: JSON.stringify({
          rating: rating,
          alias: name,
          headline: comment.slice(0, 20),
          comment: comment,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(res => res.json())
      .then(json => console.log(json))
  }

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
        <h1 className="text-2xl">Write a review about {productCode}</h1>
        <form className="flex flex-col" onSubmit={e => postReview(e)}>
          <div>
            <label htmlFor="name" className={setLabelState(isNameActive)}>
              Your Name
            </label>
            <input
              autoComplete="none"
              id="name"
              type="text"
              className="w-full p-2 mt-4 rounded border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
              onFocus={e => handleInputFocus(e, setIsNameActive)}
              onBlur={e => handleInputBlur(e, setIsNameActive)}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className={setLabelState(isEmailActive)}>
              Your E-Mail-Address
            </label>
            <input
              autoComplete="none"
              id="email"
              type="text"
              className="w-full p-2 mt-4 rounded border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
              onFocus={e => handleInputFocus(e, setIsEmailActive)}
              onBlur={e => handleInputBlur(e, setIsEmailActive)}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="reviewText"
              className={setLabelState(isReviewTextActive)}
            >
              Review Text
            </label>
            <textarea
              id="reviewText"
              className="w-full p-2 mt-4 h-48 p-2 rounded border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
              onFocus={e => handleInputFocus(e, setIsReviewTextActive)}
              onBlur={e => handleInputBlur(e, setIsReviewTextActive)}
              value={comment}
              onChange={e => setComment(e.target.value)}
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
                value={rating}
                onChange={newRating => setRating(newRating)}
              />
            </div>
            <button
              type="submit"
              className="uppercase flex rounded-lg bg-java-500 px-5 py-3 items-center text-sm text-white tracking-wide font-medium hover:bg-peach-500 focus:outline-none"
            >
              Submit review
            </button>
          </div>
        </form>
      </div>
      <div className="w-full xl:w-1/2 xl:pl-20">
        <h1 className="text-2xl mb-4">Reviews ({displayReviews.length})</h1>
        {displayReviews}
      </div>
    </div>
  )
}

export default ProductReview
