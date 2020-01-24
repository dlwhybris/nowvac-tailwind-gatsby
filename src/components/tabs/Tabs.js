import React, { useState, useEffect } from "react"

const Tabs = ({ children, className }) => {
  const [activeTabIndex, setActiveTab] = useState(0)

  function handleTabSelect(selectedTabIndex) {
    activeTabIndex !== selectedTabIndex && setActiveTab(selectedTabIndex)
  }

  useEffect(() => {
    // setActiveTab(1)
  })

  // Clone props children and add handleTabSelect
  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      activeTabIndex: activeTabIndex,
      currentTabIndex: index - 1, // -1 for the TabList component
      doTabSelect: handleTabSelect,
    })
  )

  return <div className={className}>{childrenWithProps}</div>
}

export default Tabs
