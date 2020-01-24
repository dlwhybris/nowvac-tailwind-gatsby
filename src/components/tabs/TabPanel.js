import React from "react"

const TabPanel = props => {
  const { currentTabIndex, activeTabIndex } = props
  const selected = currentTabIndex === activeTabIndex
  const activeClass = selected ? props.activeClass : ""

  return (
    selected === true && (
      <div className={props.className + " " + activeClass} role="tabpanel">
        {props.children}
      </div>
    )
  )
}

export default TabPanel
