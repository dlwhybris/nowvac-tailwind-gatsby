import React from "react"
import Dropdown from "./Dropdown"
import { injectIntl, changeLocale } from "gatsby-plugin-intl"

const LanguageSelector = ({ intl }) => {
  const options = [
    { value: "EN", text: "EN" },
    { value: "NL", text: "NL" },
  ]

  function handleChange(event) {
    changeLocale(event.target.value.toLowerCase())
  }

  return (
    // <Link to="/404">EN</Link>
    <div className="px-4 text-xs">
      <Dropdown
        id="languageSelector"
        name="languageSelector"
        selectClassName="bg-white"
        options={options}
        selectedOption={intl.locale}
        onChange={handleChange}
      />
    </div>
  )
}

export default injectIntl(LanguageSelector)
