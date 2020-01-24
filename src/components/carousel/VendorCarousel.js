import React from "react"
import Carousel from "./Carousel"

function renderSlides(data) {
  return data.spaces.map(data => (
    <div className="w-screen mx-auto flex items-center justify-around h-40 bg-white text-black">
      <div className="">
        <div className="w-80">
          <p>{data.text}</p>

          <div className="uppercase font-bold hover:text-peach-500">
            <a href="/">{data.button.text}</a>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <img
          className="w-48 mx-4"
          src={data.image[0].src}
          alt={data.image[0].alt}
        />
        <img
          className="w-48 mx-4"
          src={data.image[1].src}
          alt={data.image[1].alt}
        />
      </div>
    </div>
  ))
}

const VenderCarousel = () => {
  const data = {
    spaces: [
      {
        image: [
          { src: "https://placehold.it/495x310", alt: "altText-1" },
          { src: "https://placehold.it/495x310", alt: "altText-2" },
        ],
        text:
          "Leybold offers a large range of refurbished Leybold products. Choose out of hundreds of items online.",
        button: [
          {
            text: "Further info",
            svg:
              "M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z",
          },
        ],
      },
    ],
  }

  const configuration = {
    className: "h-40",
  }

  // return (
  return <Carousel slides={renderSlides(data)} configuration={configuration} />
}

export default VenderCarousel
