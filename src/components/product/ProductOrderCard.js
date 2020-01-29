import React from "react"
import BreadCrumb from "../Breadcrumb"
import Dropdown from "../Dropdown"
import Price from "../Price"
import QuantitySelector from "./QuantitySelector"
import ProductStatus from "./ProductStatus"
import LinkWithMedia from "../base/LinkWithMedia"
import Svg from "../base/Svg"

const ProductOrderCard = ({ product }) => {
  const breadcrumb = {
    crumbs: [
      {
        text: "home",
        url: "https://www.google.com", //Replace with Link Component
      },
      {
        text: "product-list",
        url: "https://www.google.com", //Replace with Link Component
      },
      {
        text: "product",
        url: "https://www.google.com", //Replace with Link Component
      },
    ],
  }

  const motorSpeed = [
    { value: "1", text: "Moter Type 1" },
    { value: "2", text: "Moter Type 2" },
    { value: "3", text: "Moter Type 3" },
  ]

  const pumpingSpeed = [
    { value: "1", text: "Pumping Speed 1" },
    { value: "2", text: "Pumping Speed 2" },
  ]

  return (
    <div className="w-full md:w-3/5 lg:w-2/5 p-6 shadow-md">
      <BreadCrumb
        data={breadcrumb}
        listClassName="text-xs mb-2 flex flex-row"
        itemClassName="flex m-0"
        seperator="/"
      />

      <h1 className="text-2xl font-medium mb-2 tracking-wide text-gray-900">
        {product.name}
      </h1>

      <div className="mb-8">
        <Dropdown
          id="currencySelector"
          name="currencySelector"
          selectClassName="w-full h-10 p-2 mt-4 rounded bg-white border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
          labelText="Choose Motor"
          labelClassName="mt-2 transition-linear transform-x-0 text-gray-900 text-xs absolute bg-white mx-2 my-6 pointer-events-none"
          options={motorSpeed}
        />
        <Dropdown
          id="currencySelector"
          name="currencySelector"
          selectClassName="w-full h-10 p-2 mt-4 rounded bg-white border border-gray-500 text-gray-700 focus:outline-none focus:border-java-500"
          labelText="Choose Pumping Speed"
          labelClassName="mt-2 transition-linear transform-x-0 text-gray-900 text-xs absolute bg-white mx-2 my-6 pointer-events-none"
          options={pumpingSpeed}
        />
      </div>

      <Price price={product.price}>
        <span className="text-sm">incl. VAT</span>
      </Price>

      <div className="flex w-full mb-2">
        <QuantitySelector />
        <button className="bg-java-500 w-2/3 h-12 ml-4 rounded-lg text-white font-bold">
          Add to shopping cart
        </button>
      </div>
      <ProductStatus showDeliveryOptions={true} />

      <div className="flex flex-row flex-wrap">
        <LinkWithMedia
          to="https://google.be" //Change to Link Component
          text="Store availability"
          className="flex flex-row w-full md:w-1/3 items-center justify-start md:justify-center p-2 text-sm"
          classText="font-bold"
          media={
            <Svg
              size={20}
              classes="text-gray-200 w-5 h-5"
              transform="scale(0.75, 0.75)"
              pathD="M11.174 16.826a15.053 15.053 0 0 1-8-8l2.12-2.12C5.686 6.314 6 5.556 6 5.009V.991A1 1 0 0 0 5 0H1.002A1 1 0 0 0 0 1.001V3c0 9.389 7.611 17 17 17h1.999A.998.998 0 0 0 20 18.998V15a1 1 0 0 0-.99-1h-4.02c-.546 0-1.304.314-1.696.706l-2.12 2.12z"
            />
          }
        />
        <LinkWithMedia
          to="https://google.be" //Change to Link Component
          text="Add to wishlist"
          className="flex flex-row w-full md:w-1/3 items-center justify-start md:justify-center p-2 text-sm"
          classText="font-bold"
          media={
            <Svg
              size={20}
              classes="text-gray-200 w-5 h-5"
              transform="scale(0.75, 0.75)"
              pathD="M11.174 16.826a15.053 15.053 0 0 1-8-8l2.12-2.12C5.686 6.314 6 5.556 6 5.009V.991A1 1 0 0 0 5 0H1.002A1 1 0 0 0 0 1.001V3c0 9.389 7.611 17 17 17h1.999A.998.998 0 0 0 20 18.998V15a1 1 0 0 0-.99-1h-4.02c-.546 0-1.304.314-1.696.706l-2.12 2.12z"
            />
          }
        />
        <LinkWithMedia
          to="https://google.be" //Change to Link Component
          text="Product Questions?"
          className="flex flex-row w-full md:w-1/3 items-center justify-start md:justify-center p-2 text-sm"
          classText="font-bold"
          media={
            <Svg
              size={20}
              classes="text-gray-200 w-5 h-5"
              transform="scale(0.75, 0.75)"
              pathD="M11.174 16.826a15.053 15.053 0 0 1-8-8l2.12-2.12C5.686 6.314 6 5.556 6 5.009V.991A1 1 0 0 0 5 0H1.002A1 1 0 0 0 0 1.001V3c0 9.389 7.611 17 17 17h1.999A.998.998 0 0 0 20 18.998V15a1 1 0 0 0-.99-1h-4.02c-.546 0-1.304.314-1.696.706l-2.12 2.12z"
            />
          }
        />
      </div>
    </div>
  )
}

export default ProductOrderCard
