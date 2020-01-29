import React from "react"

const baseUrl =
  "https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com"

const ImageCarousel = ({ images }) => {
  const url = `${baseUrl}${images[1].url}`

  return (
    <div className="w-full md:w-2/5 lg:w-3/5 flex justify-center align-middle">
      <div className="m-auto">
        <img className="bg-cover" src={url} alt="test" />
      </div>
    </div>
  )
}

export default ImageCarousel
