import React from 'react'
import style from './Form.module.css'
import Button from '../../UI/Button/Button'

function Form({ handleClick }) {
    return (
        <form
            id={1}
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className={style.form}
        >
            <div className={style.formTop}>
                <h1 className={style.formTitle}>Personal info</h1>
                <p className={style.formTopDescr}>
                    Please provide your name, email address, and phone number.
                </p>
            </div>
            <div className={style.formMain}>
                <label
                    className={style.formLabel}
                    htmlFor=""
                >
                    Name
                </label>
                <input
                    className={style.formInput}
                    type="text"
                    placeholder="e.g. Stephen King"
                    onChange={(e) => e.target.value}
                />
                <label
                    className={style.formLabel}
                    htmlFor=""
                >
                    Email Address
                </label>
                <input
                    className={style.formInput}
                    type="text"
                    placeholder="e.g. stephenking@lorem.com"
                    onChange={(e) => e.target.value}
                />
                <label
                    className={style.formLabel}
                    htmlFor=""
                >
                    Phone Number
                </label>
                <input
                    className={style.formInput}
                    type="text"
                    placeholder="e.g. +1 234 567 890"
                    onChange={(e) => e.target.value}
                />
            </div>
            <div className={style.formBottom}>
                
            </div>
        </form>
    )
}

export default Form
