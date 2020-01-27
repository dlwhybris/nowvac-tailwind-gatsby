import React from "react"

const TabList = props => {
  const { className, children, activeTabIndex, doTabSelect } = props

  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      activeTabIndex: activeTabIndex,
      doTabSelect: doTabSelect,
      currentTabIndex: index,
    })
  )

  return <ul className={className}>{childrenWithProps}</ul>
}

export default TabList
