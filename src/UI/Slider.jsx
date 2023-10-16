import React from "react";
import style from './Slider.module.css'

const Slider = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label className={style.switch} htmlFor="toggle-button" key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
            id="toggle-button"
            name="toggle-button"
          />
          <span className={style.slider}></span>
        </label>
      ))}
    </>
  );
};
export default Slider;
