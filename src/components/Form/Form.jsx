import React from 'react'
import style from './Form.module.css'
import Button from '../../UI/Button/Button'

function Form() {
  return (
    <form action="" className="form">
        <div className={style.formTop}>
            <h1 className={style.formTitle}>
                Personal info
            </h1>
            <p className={style.formTopDescr}>Please provide your name, email address, and phone number.</p>
            <div className={style.formMain}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='e.g. Stephen King' />
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder='e.g. stephenking@lorem.com' />
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder='e.g. +1 234 567 890' />
            </div>
            <div className={style.formBototm}>
                <Button>Next Step</Button>
            </div>
        </div>
    </form>
  )
}

export default Form