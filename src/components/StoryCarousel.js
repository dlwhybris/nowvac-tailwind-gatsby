import React from "react"
import Svg from "./Svg"

const StoryCarousel = () => {
  return (
    <div className="h-88 w-full">
      <img
        className="h-full w-full bg-cover"
        src="https://placehold.it/1200x605"
        alt=""
      />
      <section className="-mt-64 px-4 text-white w-full mx-auto flex-col">
        <div className="xl:w-10/12 mx-2 xl:mx-auto flex flex-col items-center">
          <h3 className="text-xs uppercase font-bold tracking-wider">
            Maecenas tempus
          </h3>
          <h4 className="text-4xl font-semibold tracking-wider">
            Donec pede justo, fringilla vel, aliquet nec
          </h4>
          <p className="text-center font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <button className="mt-8 uppercase flex rounded-lg  px-5 py-3 items-center text-sm tracking-wide font-semibold border-2 hover:text-peach-400 hover:border-peach-400 hover:font-bold">
            <p>Discover more</p>

            <Svg
              size={20}
              classes="fill-current"
              pathD="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </button>
        </div>
        <div className="w-full flex mx-auto justify-center py-4">
          <div className="w-10 h-2 border-b-2 border-black mx-2 cursor-pointer"></div>
          <div className="w-10 h-2 border-b-2 border-gray-500 mx-2 cursor-pointer"></div>
          <div className="w-10 h-2 border-b-2 border-gray-500 mx-2 cursor-pointer"></div>
        </div>
      </section>
    </div>
  )
}

export default StoryCarousel
