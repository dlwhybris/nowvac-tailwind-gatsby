import React from "react"

const TabListItem = props => {
  const { className, currentTabIndex, activeTabIndex } = props
  const selected = currentTabIndex === activeTabIndex
  const activeClass = selected ? props.activeClass : ""

  return (
    <li
      className={className + " " + activeClass}
      onClick={() => props.doTabSelect(currentTabIndex)}
      onKeyDown={() => props.doTabSelect(currentTabIndex)}
      role="presentation"
    >
      {props.children}
    </li>
  )
}

export default TabListItem
