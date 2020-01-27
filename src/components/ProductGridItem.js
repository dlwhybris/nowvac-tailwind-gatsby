import React from "react"
import ProductStatus from "./product/ProductStatus"
import { Link } from "gatsby"

const baseUrl =
  "https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com"

const ProductGridItem = ({ product }) => {
  const url = `${baseUrl}${product.images[0].url}`
  return (
    <div className="bg-white p-1 mr-8 rounded-sm">
      <div style={{ height: "10rem" }}>
        <img
          className="bg-cover w-full"
          style={{ maxHeight: "9rem" }}
          src={url}
          alt=""
        />
      </div>
      <section className="px-4 py-4">
        <p className="text-peach-500 uppercase tracking-wide text-xs font-normal">
          {product.code}
        </p>
        <h4 className="text-base font-normal tracking-wide">{product.name}</h4>
        <p className="text-gray-500 uppercase text-xs pt-4">
          €{product.price.value}
        </p>
        <Link
          to={`/products/${product.code}`}
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
