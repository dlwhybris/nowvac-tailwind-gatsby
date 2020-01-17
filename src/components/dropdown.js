import React from "react"
import PropTypes from "prop-types"

const Dropdown = ({ name, id, options }) => {
  return (
    <select name={name} id={id}>
      {options.map(option => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  )
}

export default Dropdown

Dropdown.defaultProps = {
  options: [{ value: "test", text: "test" }],
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
