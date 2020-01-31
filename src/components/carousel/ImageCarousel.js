import React from "react"
import Carousel from "./Carousel"
import { responsiveBreakpoints } from "./CarouselHelper"

const baseUrl =
  "https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com"

function renderSlides(data) {
  /* <div className="m-auto"> */
  /* <img className="bg-cover" src={url} alt="test" /> */
  /* </div> */

  console.log(data.spaces[0].url)
  return data.spaces.map(slide => (
    <div className="m-auto">
      <img className="bg-cover" src={slide.url} alt="test" />
    </div>
  ))
}

const ImageCarousel = ({ images }) => {
  const data = {
    spaces: [
      { url: `${baseUrl}${images[1].url}` },
      { url: `${baseUrl}${images[1].url}` },
    ],
  }
  // const url = [`${baseUrl}${images[1].url}`]

  const configuration = {
    name: "testCarousel",
    className: "h-120",
    swipeable: false,
    draggable: false,
    showDots: true,
    infinite: true,
    keyBoardControl: true,
    transitionDuration: 200,
    removeArrowOnDeviceType: ["sm"],
    dotListClass: "custom-dot-list-style",
    slidesToSlide: 1,
  }

  const responsive = responsiveBreakpoints()

  const slides = renderSlides(data)
  slides.map(
    (slide, i) => console.log({ slide })
    // <div key={i}>{slide}</div>
  )

  return (
    <div className="w-full md:w-2/5 lg:w-3/5 flex justify-center align-middle">
      <Carousel
        slides={renderSlides(data)}
        responsive={responsive}
        configuration={configuration}
      />
    </div>
  )
}

export default ImageCarousel
