import React from "react"
import Svg from "./Svg"

const VenderCarousel = () => {
  return (
    <div className="xl:w-10/12 mx-2 xl:mx-auto flex items-center h-full flex-wrap text-sm">
      <div className="w-8/12 flex items-center">
        <a className="-ml-8 pr-8" href="/">
          <svg
            className="fill-current"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.464 9.293L11 5.757l1.414 1.415L9.586 10l2.828 2.828L11 14.243 6.757 10l.707-.707zM10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm8-10a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"
              fill="#000"
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <div>
          <p>
            Leybold offers a large range of refurbished Leybold products. Choose
            out of hundreds of items online.
          </p>

          <div className="uppercase font-bold flex hover:text-peach-500">
            <a href="/">Further info</a>

            <Svg
              size={20}
              classes="fill-current"
              pathD="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </div>
        </div>
      </div>
      <div className="w-4/12 flex justify-around items-center">
        <img className="w-48 py-4" src="https://placehold.it/495x310" alt="" />
        <img className="w-48 py-4" src="https://placehold.it/495x310" alt="" />

        <a className="-mr-8" href="/">
          <Svg
            size={20}
            classes="fill-current"
            pathD="M12.536 10.707L9 14.243l-1.414-1.415L10.414 10 7.586 7.172 9 5.757 13.243 10l-.707.707zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0z"
          />
        </a>
      </div>

      <div className="w-full flex mx-auto justify-center py-4">
        <div className="w-10 h-2 border-b-2 border-black mx-2 cursor-pointer"></div>
        <div className="w-10 h-2 border-b-2 border-gray-500 mx-2 cursor-pointer"></div>
        <div className="w-10 h-2 border-b-2 border-gray-500 mx-2 cursor-pointer"></div>
      </div>
    </div>
  )
}

export default VenderCarousel
