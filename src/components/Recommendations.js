import React from "react"
import ProductCard from "./ProductCard"
import FullCoverCard from "./FullCoverCard"
import Svg from "./Svg"

const Recommendations = () => {
  return (
    <section className="bg-gray-200 py-4">
      <div className="xl:w-10/12 mx-2 xl:mx-auto">
        <h2 className="text-sm font-medium uppercase text-gray-600 pt-8 tracking-wide text-gray-400">
          Nowvac Online Shop
        </h2>
        <h3 className="text-4xl font-normal pb-8 leading-none">
          Recommandations for you
        </h3>
        <div className="flex py-4">
          <ProductCard />
          <ProductCard />
          <FullCoverCard />
        </div>

        <button className="my-12 mx-auto uppercase flex rounded-lg bg-gray-400 px-5 py-3 items-center text-sm tracking-wide font-medium text-black hover:bg-gray-900 hover:text-white">
          <p>All Products</p>

          <Svg
            size={20}
            classes="fill-current"
            pathD="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
          />
        </button>
      </div>
    </section>
  )
}

export default Recommendations
