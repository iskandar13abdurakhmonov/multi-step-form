import React from 'react'
import style from './Form.module.css'

export default function Form({ children, ...props }) {
    return (
        <form
            className={style.form}
            noValidate
            {...props}
        >
            {children}
        </form>
    )
}
