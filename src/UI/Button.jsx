import React from 'react'
import style from './Button.module.css'

const Button = ({ buttonInfo, id, ...props }) => {
    return (
        <button
            id={id}
            className={style.button}
            {...props}
        >
            {buttonInfo}
        </button>
    )
}

export default Button
