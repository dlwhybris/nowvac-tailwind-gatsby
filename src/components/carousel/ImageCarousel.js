import React from "react"

const baseUrl =
  "https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com"

const ImageCarousel = ({ images }) => {
  const url = `${baseUrl}${images[1].url}`

  return (
    <div className="w-3/5 h-120 bg-gray-500">
      <img className="h-full w-full bg-cover" src={url} alt="test" />
    </div>
  )
}

export default ImageCarousel
