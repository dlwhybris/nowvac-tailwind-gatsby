import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "../../css/carousel.css"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Carousel1 = ({
  slides,
  responsive,
  configuration,
  customLeftArrow,
  customRightArrow,
  customDot,
}) => {
  return (
    <Carousel
      {...configuration}
      responsive={responsive}
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      customDot={customDot} // Custom navigation
    >
      {slides.map((slide, i) => (
        <div key={i}>{slide}</div>
      ))}
    </Carousel>
  )
}

export default Carousel1
