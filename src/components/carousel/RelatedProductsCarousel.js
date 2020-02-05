import React from "react"
import ProductGridItem from "../ProductGridItem"
import Carousel from "./Carousel"
import { responsiveBreakpoints } from "./CarouselHelper"

import { usePowertoolsProducts } from "../../hooks/use-powertools-products"

function renderSlides(data) {
  return data
    .slice(0, 8)
    .map(product => (
      <ProductGridItem key={product.node.code} product={product.node} />
    ))
}

const RelatedProductsCarousel = () => {
  const products = usePowertoolsProducts()
  const configuration = {
    name: "storyCarousel",
    className: "h-120",
    itemClass: "px-2",
    swipeable: false,
    draggable: false,
    arrows: false,
    showDots: true,
    infinite: true,
    keyBoardControl: true,
    transitionDuration: 200,
    removeArrowOnDeviceType: ["sm"],
  }

  const responsive = responsiveBreakpoints([1, 2, 2, 4], [1, 1, 2, 3])

  return (
    <div className="w-11/12 xl:w-10/12 py-16 m-auto">
      <h1 className="text-3xl">Simular Products</h1>
      <Carousel
        slides={renderSlides(products)}
        responsive={responsive}
        configuration={configuration}
      />
    </div>
  )
}

export default RelatedProductsCarousel
