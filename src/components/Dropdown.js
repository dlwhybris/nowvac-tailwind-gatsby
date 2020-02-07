import React from "react"
import PropTypes from "prop-types"

const Dropdown = ({
  name,
  id,
  selectClassName,
  options,
  selectedOption,
  labelText,
  labelClassName,
  onChange,
}) => {
  return (
    <div className="relative">
      {(labelText || labelClassName) && (
        <label htmlFor="email" className={labelClassName}>
          {labelText}
        </label>
      )}

      <select
        name={name}
        id={id}
        className={selectClassName}
        onChange={onChange}
      >
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            selected={
              selectedOption &&
              option.value.toLowerCase() === selectedOption.toLowerCase()
            }
          >
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
