import React from "react"
import PropTypes from "prop-types"

const Dropdown = ({
  name,
  id,
  selectClassName,
  options,
  labelText,
  labelClassName,
}) => {
  return (
    <div className="relative">
      {(labelText || labelClassName) && (
        <label htmlFor="email" className={labelClassName}>
          {labelText}
        </label>
      )}

      <select name={name} id={id} className={selectClassName}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
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
