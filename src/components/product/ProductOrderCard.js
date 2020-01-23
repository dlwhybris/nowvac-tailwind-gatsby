import React from "react"
import BreadCrumb from "../Breadcrumb"
import Dropdown from "../dropdown"
import Price from "../Price"
import QuantitySelector from "./QuantitySelector"
import ProductStatus from "./ProductStatus"
import LinkWithMedia from "../base/LinkWithMedia"
import Svg from "../base/Svg"

const ProductOrderCard = () => {
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
        text: "bla bla",
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
    <div className="w-2/5 p-6 shadow-md">
      <BreadCrumb
        data={breadcrumb}
        listClassName="text-xs mb-2 flex flex-row"
        itemClassName="flex m-0"
        seperator="/"
      />

      <h1 className="text-2xl font-medium mb-2 tracking-wide text-gray-400">
        Nowvac Online Shop
      </h1>

      <div className="mb-8">
        <Dropdown
          id="currencySelector"
          name="currencySelector"
          className="p-10 w-64"
          options={motorSpeed}
        />
        <Dropdown
          id="currencySelector"
          name="currencySelector"
          className="p-10 w-64"
          options={pumpingSpeed}
        />
      </div>

      <Price>
        <span className="text-sm">incl. VAT</span>
      </Price>

      <div className="mb-2">
        <QuantitySelector />
        <button className="bg-java-500 w-2/3 h-12 ml-4 rounded-lg text-white font-bold">
          Add to shopping cart
        </button>
      </div>
      <ProductStatus showDeliveryOptions={true} />

      <div className="flex flex-row">
        <LinkWithMedia
          to="https://google.be" //Change to Link Component
          text="Store availability"
          className="flex flex-row m-2 text-sm"
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
          text="Store availability"
          className="flex flex-row m-2 text-sm"
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
          text="Store availability"
          className="flex flex-row m-2 text-sm"
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
