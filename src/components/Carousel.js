import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "../css/carousel.css"

const Carousel = ({ slides, configuration }) => {
  return (
    <AwesomeSlider {...configuration}>
      {slides.map((slide, i) => (
        <div key={i}>{slide}</div>
      ))}
    </AwesomeSlider>
  )
}

export default Carousel
