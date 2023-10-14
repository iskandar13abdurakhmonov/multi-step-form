import React, { forwardRef, useState } from 'react'
import style from './ChooseBox.module.css'

export const ChooseBox = forwardRef((props, ref) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div
            onClick={() => {
                setIsActive(!isActive)
            }}
            className={`${style.chooseBox} ${
                isActive ? style.chooseBoxActive : ''
            }`}
        >
            <div className={style.box}>
                <img
                    className={style.boxImage}
                    src={props.image}
                    alt={props.text}
                />
                <div className={style.textBox}>
                    <h2 className={style.boxTitle}>{props.text}</h2>
                    <span className={style.boxPlan}>{props.monthly}</span>
                </div>
            </div>
        </div>
    )
})
