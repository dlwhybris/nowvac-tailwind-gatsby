import React from "react"

const TabListItem = props => {
  const { className, currentTabIndex, activeTabIndex } = props
  const selected = currentTabIndex === activeTabIndex
  const activeClass = selected ? props.activeClass : ""

  return (
    <li
      className={className + " " + activeClass}
      onClick={() => props.doTabSelect(currentTabIndex)}
      aria-selected={selected ? "true" : "false"}
    >
      {props.children}
    </li>
  )
}

export default TabListItem
