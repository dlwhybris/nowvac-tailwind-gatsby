import React from "react"

const LinkWithMedia = ({ text, className, classText, media }) => {
  return (
    <span className={className}>
      <span className="mr-3">{media}</span>
      <a href="https://www.google.be" className={classText} title="text">
        {text}
      </a>
    </span>
  )
}

export default LinkWithMedia
