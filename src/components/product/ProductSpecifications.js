import React from "react"

const ProductSpecifications = () => {
  return (
    <div className="w-2/5 px-2 pt-20">
      <h3 className="mb-4 text-lg font-medium">General Specifications</h3>
      <ul className="flex flex-wrap w-full mb-8">
        <li className="w-1/2 my-1">
          <p className="pb-1 text-xl font-medium tracking-wider">
            DN 16 ISO-KF
          </p>
          <p className="mb-4 uppercase text-xs text-gray-600">
            Inlet connection
          </p>
        </li>
        <li className="w-1/2 my-1">
          <p className="pb-1 text-xl font-medium tracking-wider">6 mm hose</p>
          <p className="mb-4 uppercase text-xs text-gray-600">
            outlet connection
          </p>
        </li>
        <li className="w-1/2 my-1">
          <p className="pb-1 text-xl font-medium tracking-wider">1.2 cfm</p>
          <p className="mb-4 uppercase text-xs text-gray-600">
            Pumping speed at 60Hz
          </p>
        </li>
        <li className="w-1/2 my-1">
          <p className="pb-1 text-xl font-medium tracking-wider">19 g/h</p>
          <p className="mb-4 uppercase text-xs text-gray-600">
            Water vapor capacity at 60 Hz
          </p>
        </li>
        <li className="w-1/2 my-1">
          <p className="pb-1 text-xl font-medium tracking-wider">
            230 V, 50/60 Hz
          </p>
          <p className="mb-4 uppercase text-xs text-gray-600">
            Mains connection
          </p>
        </li>
        <li className="w-1/2 my-1">
          <p className="pb-1 text-xl font-medium tracking-wider">80 W</p>
          <p className="mb-4 uppercase text-xs text-gray-600">Motor rating</p>
        </li>
        <li className="w-1/2 my-1">
          <p className="pb-1 text-xl font-medium tracking-wider">10.0 kg</p>
          <p className="mb-4 uppercase text-xs text-gray-600">weight</p>
        </li>
        <li className="w-1/2 my-1">
          <p className="pb-1 text-xl font-medium tracking-wider">1.800 rpm</p>
          <p className="mb-4 uppercase text-xs text-gray-600">
            Rotation speed at 60 Hz
          </p>
        </li>
      </ul>

      <div className="toggle-container">
        <h3 className="mb-4 text-lg font-medium">Mains and manual</h3>
        <ul className="flex flex-wrap w-full mb-8">
          <li className="w-1/2 my-1">
            <p className="pb-1 text-xl font-bold tracking-wider">123456789</p>
            <p className="mb-4 uppercase text-xs text-gray-600">
              Manual product no (PN)
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductSpecifications
