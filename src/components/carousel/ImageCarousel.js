import React from "react"
import Carousel from "./Carousel"
import { responsiveBreakpoints, renderCarouselPreview } from "./CarouselHelper"

const baseUrl =
  "https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com"

function renderSlides(data) {
  return data.spaces.map(data => (
    <div key={data.url}>
      <img className="bg-cover m-auto" src={data.url} alt="test" />
    </div>
  ))
}

const ImageCarousel = ({ images }) => {
  const data = {
    spaces: [
      { url: `${baseUrl}${images[1].url}` },
      { url: `${baseUrl}${images[1].url}` },
      { url: `https://placehold.it/1200x605` },
    ],
  }

  const configuration = {
    name: "imageCarousel",
    className: "h-full",
    swipeable: false,
    draggable: false,
    arrows: false,
    showDots: true,
    transitionDuration: 200,
    dotListClass: "h-full flex flex-col",
  }
  const responsive = responsiveBreakpoints()
  const CustomDot = renderCarouselPreview(
    renderSlides(data),
    "w-1/12 mx-2 my-4"
  )

  return (
    <div className="w-full md:w-2/5 lg:w-3/5 justify-center align-middle">
      <Carousel
        slides={renderSlides(data)}
        responsive={responsive}
        configuration={configuration}
        customDot={<CustomDot />}
      />
    </div>
  )
}

export default ImageCarousel
