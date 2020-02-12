import React from "react"
import Svg from "../base/Svg"

// Tell the carousel when to apply breakpoints
//  1. How many items it should show
//  2. how many slides it should move when clicking previous/next button
export const responsiveBreakpoints = (itemsOnPage, slidesOnAnimation) => {
  const items = itemsOnPage ? itemsOnPage : [1, 1, 1, 1]
  const slides = slidesOnAnimation ? slidesOnAnimation : [1, 1, 1, 1]

  return {
    sm: {
      breakpoint: { max: 640, min: 0 },
      items: items[0],
      slidesToSlide: slides[0], // optional, default to 1.
    },
    md: {
      breakpoint: { max: 768, min: 640 },
      items: items[1],
      slidesToSlide: slides[1], // optional, default to 1.
    },
    lg: {
      breakpoint: { max: 1024, min: 768 },
      items: items[2],
      slidesToSlide: slides[2], // optional, default to 1.
    },
    xl: {
      breakpoint: { max: 3000, min: 1024 },
      items: items[3],
      slidesToSlide: slides[3], // optional, default to 1.
    },
  }
}

// **
// Replace the primary carousel navigation
// Wrapper - if not added carouselState will give error in fe logs
const Arrow = arrowProps => {
  const { carouselState, children, ...restArrowProps } = arrowProps
  return <span {...restArrowProps}> {children} </span>
}

export const leftArrow = () => {
  return (
    <Arrow>
      <button
        className="absolute left-0 w-10 h-10 border-2 border-white border-solid rounded-full bg-transparant text-white"
        style={{ left: "calc(4% + 1px)" }}
        // tabIndex="0"
        aria-label="Next slide"
      >
        <Svg
          size={20}
          transform="scale(1.5, 1.5)"
          classes="m-auto fill-current"
          pathD="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"
        />
      </button>
    </Arrow>
  )
}

export const rightArrow = () => {
  return (
    <Arrow>
      <button
        className="absolute right-0 w-10 h-10 border-2 border-white border-solid rounded-full bg-transparant text-white"
        style={{ right: "calc(4% + 1px)" }}
        // tabIndex="0"
        aria-label="Next slide"
      >
        <Svg
          size={20}
          transform="scale(1.5, 1.5)"
          classes="m-auto fill-current"
          pathD="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
        />
      </button>
    </Arrow>
  )
}

// **
// Replaces the secundary carousel navigation (fe: dots)
// Navigation node that renders the same as the content (fe: image carousel)
export const renderCarouselPreview = (slides, className) => {
  return ({
    index,
    onClick,
    active,
    // carouselState: { currentSlide }, //redundant info
  }) => {
    return (
      <button
        onClick={e => {
          onClick()
          e.preventDefault()
        }}
        className={className}
      >
        {React.Children.toArray(slides)[index]}
      </button>
    )
  }
}
