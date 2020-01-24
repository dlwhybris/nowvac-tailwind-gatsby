import React from "react"

const LinkWithMedia = ({ text, className, media }) => {
  return (
    <span className={className}>
      <span className="mr-3 align-middle">{media}</span>
      <a href="https://www.google.be" className="" title="text">
        {text}
      </a>
    </span>
  )
}

export default LinkWithMedia
