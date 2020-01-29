import React from "react"

const ProductCard = () => {
  return (
    <div className="bg-white p-1 md:mr-8 rounded-lg">
      <img className="bg-cover" src="https://placehold.it/495x310" alt="" />
      <section className="px-4 py-4">
        <p className="text-peach-500 uppercase tracking-wide text-xs font-normal">
          Leybold
        </p>
        <h4 className="text-base font-normal tracking-wide">
          Small Compact Vacuum Pump S 1.5
        </h4>
        <p className="text-gray-500 uppercase text-xs pt-4">SKU: 10101</p>
      </section>
    </div>
  )
}

export default ProductCard
