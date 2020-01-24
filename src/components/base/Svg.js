import React from "react"

const Svg = ({ startX, startY, size, classes, pathD, fillRule, transform }) => {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={startX + " " + startY + " " + size + " " + size}
      widht={size}
      height={size}
      transform={transform}
    >
      <path d={pathD} fillRule={fillRule} />
    </svg>
  )
}

export default Svg

Svg.defaultProps = {
  startX: 0,
  startY: 0,
  size: 24,
  classes: "text-gray-200 w-5 h-5",
  fillRule: "evenodd",
  pathD:
    "M11.174 16.826a15.053 15.053 0 0 1-8-8l2.12-2.12C5.686 6.314 6 5.556 6 5.009V.991A1 1 0 0 0 5 0H1.002A1 1 0 0 0 0 1.001V3c0 9.389 7.611 17 17 17h1.999A.998.998 0 0 0 20 18.998V15a1 1 0 0 0-.99-1h-4.02c-.546 0-1.304.314-1.696.706l-2.12 2.12z",
}
