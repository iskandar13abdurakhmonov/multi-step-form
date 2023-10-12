import React, { useState } from 'react'
import style from './Plan.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../../contexts/state'
import { Button } from '../../UI/Button/Button'
import { Field } from '../../UI/Field/Field'
import Form from '../../UI/Form/Form'
import { Input } from '../../UI/Input/Input'

export default function Plan() {
    const [state, setState] = useState()
    const { handleSumbit, register } = useForm({ defaultValues: state })
    const navigate = useNavigate()

    const saveData = (data) => {
        setState({ ...state, ...data })
        navigate('/add-ons')
    }

    return (
        <Form>
            <fieldset className={style.fieldset}>
                <div className={style.formTop}>
                    <h1 className={style.formTitle}>Personal info</h1>
                    <p className={style.formTopDescr}>
                        Please provide your name, email address, and phone
                        number.
                    </p>
                </div>
            </fieldset>
        </Form>
    )
}
