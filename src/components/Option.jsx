import React, { useState, useCallback } from "react";

const Option = ({
  onChange,
  type = "radio",
  isActive = false,
  inputField = false,
  text = "Option text",
  value = "option-value",
}) => {
  const [inputValue, setInputValue] = useState(isActive ? value : "");

  const handleButtonClick = useCallback(() => {

    if (onChange) {
      onChange(inputField ? inputValue : value);
    }
    if (isActive && type === "checkbox" && inputField) {
      onChange(""); setInputValue("");
    }
  }, [onChange, inputField, inputValue, value]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`custom-option ${isActive ? "active" : ""}`}
    >
      {
        type === "radio" ? (
          <span className="virtual-radio" />
        ) : (
          <span className="virtual-checkbox" >
            <svg className="checkbox-checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 14L9 17L18 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        )
      }

      {inputField ? (
        <input
          type="text"
          maxLength={80}
          placeholder={text}
          value={inputValue}
          onChange={handleInputChange}
        />
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default Option;
