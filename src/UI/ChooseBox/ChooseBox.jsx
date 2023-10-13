import React from 'react'
import style from './ChooseBox.module.css'

export default function ChooseBox({ image, text, monthly, yearly }) {
    return (
        <button className={style.chooseBox}>
            <div className={style.box}>
                <img
                    className={style.boxImage}
                    src={image}
                    alt=""
                />
                <div className={style.textBox}>
                    <h2 className={style.boxTitle}>{text}</h2>
                    <span className={style.boxPlan}>{monthly}</span>
                </div>
            </div>
        </button>
    )
}
