import React from "react"

const BreadCrumb = ({ data, listClassName, itemClassName, seperator }) => {
  return (
    <ul className={listClassName}>
      {data.crumbs.map((crumb, i, arr) => (
        <li key={i} className={itemClassName}>
          <a className="link -gray" href={crumb.url} title="Products">
            {crumb.text}
          </a>

          <span className="mx-4">{arr.length - 1 === i ? "" : seperator}</span>
        </li>
      ))}
    </ul>
  )
}

export default BreadCrumb
