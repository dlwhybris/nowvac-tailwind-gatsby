import React from "react"
import ProductStatus from "./product/ProductStatus"
import { Link } from "gatsby"
import Svg from "./base/Svg"

// test

const baseUrl =
  "https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com"

const ProductGridItem = ({ product }) => {
  const url = `${baseUrl}${product.images[1].url}`
  return (
    <div className="bg-white p-1 md:mx-2 lg:mr-8 lg:ml-0 rounded-sm">
      <div className="h-40 flex justify-center">
        <img
          className="bg-cover"
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
          className="text-white mt-12 mb-2 group"
        >
          <div className="flex flex-grow my-2">
            <span className="bg-blue-400 group-hover:bg-peach-400 text-center font-medium py-3 px-2 rounded-l uppercase text-xs">
              More information
            </span>
            <span className="flex items-center bg-blue-500 group-hover:bg-peach-500 py-3 px-3 rounded-r text-xs">
              <Svg
                size={18}
                classes="fill-current"
                pathD="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
              />
            </span>
          </div>
        </Link>
        <ProductStatus />
      </section>
    </div>
  )
}

export default ProductGridItem
