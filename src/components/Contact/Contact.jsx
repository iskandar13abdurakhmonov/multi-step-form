import React, { useState } from 'react'
import style from './Contact.module.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../UI/Button/Button'

function Contact() {
  

    return (
            <fieldset className={style.fieldset}>
                <div className={style.formTop}>
                    <h1 className={style.formTitle}>Personal info</h1>
                    <p className={style.formTopDescr}>
                        Please provide your name, email address, and phone
                        number.
                    </p>
                </div>
                <div className={style.formMain}>
                    
                </div>
                <div className={style.formBottom}>
                    <button>Next Step</button>
                </div>
            </fieldset>
    )
}

export default Contact
