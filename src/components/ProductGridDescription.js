import React from "react"

export default function ProductGridDescription({ className }) {
  return (
    <div className={className}>
      <h3 className="uppercase text-gray-600 font-semibold text-sm tracking-wider">
        Products / Vacuum pumps
      </h3>
      <h1 className="text-3xl">nXDS Scroll Pumps</h1>
      <p className="text-gray-700 tracking-wider text-sm pt-4 pb-8">
        nXDS improves on legacy XDS pumps by offering increased pumping speeds,
        combined with lower ultimate pressures, lower power consumption and
        lower noise. Gas ballast allows for pumping of condensable vapours
        including, water, solvents, dilute acids and bases.
      </p>
    </div>
  )
}
