import React from 'react'
import style from './FormContainer.module.css'

function FormContainer({ children }) {
  return (
    <div className={style.formContainer}>{children}</div>
  )
}

export default FormContainer