import React from "react"

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="">
        <img
          src="https://nowvac.ljft.de/assets/img/teaser/A-1200x605.jpg"
          alt=""
          className="opacity-75"
        />
      </div>
      <div className="">
        <div className="my-1 xl:my-0 xl:border-white xl:border-l-4">
          <img
            src="https://nowvac.ljft.de/assets/img/teaser/B-1200x300.jpg"
            alt=""
            className="opacity-75"
          />
        </div>
        <div className="xl:border-white xl:border-t-4 xl:border-l-4">
          <img
            src="https://nowvac.ljft.de/assets/img/teaser/C-1200x300.jpg"
            alt=""
            className="opacity-75"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
