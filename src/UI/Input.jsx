import React from "react";
import style from './Input.module.css'

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label className={style.label} htmlFor={id}>
        {label} {error && <span>{error}</span>}
      </label>
      <input
        className={`${error && "error"} ${style.input}`}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
