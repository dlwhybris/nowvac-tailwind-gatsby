import React, { useState } from "react"
import ProductReviewItem from "./ProductReviewItem"
import ReactStars from "react-rating-stars-component"

function ProductReview() {
  const reviews = [
    {
      name: "Jon Doe",
      date: "06. February 2019",
      stars: 5,
      reviewText:
        "Have the pump, with additional pressure switch, only a short time in operation for garden irrigation.Zur life therefore I can not say anything. Quiet in operation, the flow rate is good and druckreich.Bei about 40 meters hose and lighter.",
    },
    {
      name: "Maria St. Cullen",
      date: "06. February 2019",
      stars: 4,
      reviewText: "Great products. Fast delivery.",
    },
    {
      name: "Roger Smith",
      date: "06. February 2019",
      stars: 4,
      reviewText:
        "Our company is x10 more profitable since using your technology. Chapeau!",
    },
  ]

  const [isNameActive, setIsNameActive] = useState({
    focus: false,
    active: false,
  })
  const [isEmailActive, setIsEmailActive] = useState(false)
  const [isTextActive, setIsTextActive] = useState(false)

  function setClassNames(active, focus) {
    let classes = active ? "input-active" : ""
    return (classes += focus ? " input-focus" : "")
  }

  function handleInputBlur(e, setClasses) {
    const isTargetEmpty = e.target.value === ""
    setClasses({ focus: false, active: isTargetEmpty ? false : true })
  }

  function handleInputFocus(e, setClasses) {
    const isTargetEmpty = e.target.value === ""
    setClasses({ focus: true, active: isTargetEmpty ? false : true })
  }

  return (
    <div className="py-16 mx-4 flex flex-col xl:flex-row xl:justify-between xl:w-10/12 xl:m-auto">
      <div className="w-full xl:w-1/2 xl:pr-20">
        <h1 className="text-2xl">Write a review</h1>
        <div className="flex flex-col">
          <div
            className={setClassNames(isNameActive.active, isNameActive.focus)}
          >
            <label
              htmlFor="name"
              className="absolute bg-white mx-2 my-6 text-gray-500 pointer-events-none"
            >
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
          <div
            className={setClassNames(isEmailActive.active, isEmailActive.focus)}
          >
            <label
              htmlFor="email"
              className="absolute bg-white mx-2 my-6 text-gray-500 pointer-events-none"
            >
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
          <div
            className={setClassNames(isTextActive.active, isTextActive.focus)}
          >
            <label
              htmlFor="reviewText"
              className="absolute bg-white mx-2 my-6 text-gray-500 pointer-events-none"
            >
              Review Text
            </label>
            <textarea
              id="reviewText"
              className="w-full p-2 mt-4 h-48 p-2 rounded border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
              onFocus={e => handleInputFocus(e, setIsTextActive)}
              onBlur={e => handleInputBlur(e, setIsTextActive)}
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
        <h1 className="text-2xl mb-4">Reviews ({reviews.length})</h1>
        {reviews.map(review => (
          <ProductReviewItem key={review.name} data={review} />
        ))}
      </div>
    </div>
  )
}

export default ProductReview
