import React from "react"
import ProductStatus from "./product/ProductStatus"
import { Link } from "gatsby"

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
        <Link
          to={`products/${product.code}`}
          title={product.name}
          className="flex items-center flex-grow text-white mt-12 mb-2 group"
        >
          <span className="bg-blue-400 group-hover:bg-peach-400 text-center font-medium py-4 px-2 rounded-l-sm">
            More information
          </span>
          <span className="bg-blue-500 group-hover:bg-peach-500 py-4 px-2 rounded-r-sm">
            >
          </span>
        </Link>
        <ProductStatus />
      </section>
    </div>
  )
}

export default ProductGridItem
