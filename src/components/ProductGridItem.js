import React from "react"

const ProductGridItem = ({ product }) => {
  return (
    <div className="bg-white p-1 mr-8 rounded-sm">
      <img className="bg-cover" src="https://placehold.it/495x310" alt="" />
      <section className="px-4 py-4">
        <p className="text-peach-500 uppercase tracking-wide text-xs font-normal">
          {product.code}
        </p>
        <h4 className="text-base font-normal tracking-wide">{product.name}</h4>
        <p className="text-gray-500 uppercase text-xs pt-4">
          €{product.price.value}
        </p>
        <button className="flex items-center text-white mt-12 mb-2 group">
          <div className="bg-blue-400 group-hover:bg-peach-400 text-center font-medium py-4 px-2 rounded-l-sm">
            More information
          </div>
          <div className="bg-blue-500 group-hover:bg-peach-500 py-4 px-2 rounded-r-sm">
            >
          </div>
        </button>
      </section>
    </div>
  )
}

export default ProductGridItem
