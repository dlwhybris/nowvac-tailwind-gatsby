import React from "react"
import Carousel from "./Carousel"
import { responsiveBreakpoints, renderCarouselPreview } from "./CarouselHelper"

function renderSlides(data) {
    return data.map(data => (
        <div key={data.file.url}>
            <img className="bg-cover m-auto" src={data.file.url} alt="test"/>
    </div>
  ))
}

const ImageCarousel = ({ images }) => {

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
      renderSlides(images),
    "w-1/12 mx-2 my-4"
  )

  return (
    <div className="w-full md:w-2/5 lg:w-3/5 justify-center align-middle">
      <Carousel
          slides={renderSlides(images)}
          responsive={responsive}
          configuration={configuration}
          customDot={<CustomDot />}
      />
    </div>
  )
}

export default ImageCarousel
