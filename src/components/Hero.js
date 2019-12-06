import React, { Component } from "react"

export default class extends Component {
  render() {
    return (
      <div className="flex">
        <div className="">
          <img
            src="https://nowvac.ljft.de/assets/img/teaser/A-1200x605.jpg"
            alt=""
            className="opacity-75"
          />
        </div>
        <div className="">
          <div className="border-white border-l-4">
            <img
              src="https://nowvac.ljft.de/assets/img/teaser/B-1200x300.jpg"
              alt=""
              className="opacity-75"
            />
          </div>
          <div className="border-white border-t-4 border-l-4">
            <img
              src="https://nowvac.ljft.de/assets/img/teaser/C-1200x300.jpg"
              alt=""
              className="opacity-75"
            />
          </div>
        </div>
      </div>
    )
  }
}
