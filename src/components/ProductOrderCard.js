import React from "react"
import BreadCrumb from "./Breadcrumb"
import Dropdown from "./dropdown"
import Price from "./Price"
import QuantitySelector from "./QuantitySelector"

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

      <h1 className="text-2xl font-medium text-gray-600 mb-2 tracking-wide text-gray-400">
        Nowvac Online Shop
      </h1>

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

      <Price>
        <p class="text -gray">incl. VAT</p>
      </Price>

      <QuantitySelector />
      <button className="bg-java-500 w-2/3 h-12 ml-4 rounded-lg text-white font-bold">
        Add to shopping cart
      </button>
    </div>
  )
}

export default ProductOrderCard
