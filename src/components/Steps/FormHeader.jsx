import React from 'react'
import style from './FormHeader.module.css'

const FormHeader = ({ title, info }) => {
    return (
        <div>
            <h1 className={style.title}>{title}</h1>
            <p className={style.info}>{info}</p>
        </div>
    )
}

export default FormHeader
