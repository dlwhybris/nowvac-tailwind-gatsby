import React from "react"
import Svg from "../base/Svg"
import Carousel from "./Carousel"

function renderSlides(data) {
  return data.spaces.map(data => (
    <div key={data.title} className="h-120 w-screen">
      <img
        className="h-full w-full bg-cover"
        src={data.image[0].src}
        alt={data.image[0].alt}
      />

      <section className="-mt-80 px-16 text-white text-center w-full mx-auto flex-col">
        <div className="xl:w-10/12 mx-2 xl:mx-auto flex flex-col items-center">
          <h3 className="text-xs uppercase font-bold tracking-wider">
            {data.title}
          </h3>
          <h4 className="text-4xl font-semibold tracking-wider">
            {data.subTitle}
          </h4>
          <p className="text-center font-medium">{data.text}</p>
          <button className="mt-8 uppercase flex rounded-lg  px-5 py-3 items-center text-sm tracking-wide font-semibold border-2 hover:text-peach-400 hover:border-peach-400 hover:font-bold">
            <p>{data.button.text}</p>
            <Svg size={20} classes="fill-current" pathD={data.button.svg} />
          </button>
        </div>
      </section>
    </div>
  ))
}

const StoryCarousel = () => {
  // TODO: Data from GraphQl
  const data = {
    spaces: [
      {
        image: [{ src: "https://placehold.it/1200x605", alt: "test" }],
        title: "Maecenas tempus",
        subTitle: "Donec pede justo, fringilla vel, aliquet nec",
        text: "Lorem ipsum dolor sit a ",
        button: [
          {
            text: "test",
            svg:
              "M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z",
          },
        ],
      },
      {
        image: [{ src: "https://placehold.it/1200x605", alt: "test" }],
        title: "Maecenas tempus",
        subTitle: "Donec pede justo, fringilla vel, aliquet nec",
        text: "Lorem ipsum dolor sit a ",
        button: [
          {
            text: "test",
            svg:
              "M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z",
          },
        ],
      },
    ],
  }

  //Static
  const configuration = {
    name: "storyCarousel",
    className: "h-120",
    buttons: true,
    buttonContentLeft: <div>left123</div>,
    buttonContentRight: <div>right123</div>,
    customContent: <div>customContent123</div>,
  }

  return <Carousel slides={renderSlides(data)} configuration={configuration} />
}

export default StoryCarousel
