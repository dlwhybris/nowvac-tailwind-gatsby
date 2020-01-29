import React from "react"

const FullCoverCard = () => {
  return (
    <div className="bg-white p-1 h-112 md:h-120 md:mr-8 rounded-lg">
      <img
        className="h-full bg-cover"
        src="https://placehold.it/990x620"
        alt=""
      />
      <section className="-mt-20 px-4">
        <h3 className="text-white text-xs uppercase font-normal tracking-wide">
          Newest addition
        </h3>
        <h4 className="text-white text-2xl  tracking-wider">
          Find your spare parts
        </h4>
      </section>
    </div>
  )
}

export default FullCoverCard
