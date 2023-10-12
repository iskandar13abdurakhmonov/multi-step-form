import React, { useState } from 'react'
import style from './Contact.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../../contexts/state'
import Form from '../../UI/Form/Form'
import Field from '../../UI/Field/Field'
import { Input } from '../../UI/Input/Input'
import { Button } from '../../UI/Button/Button'

function Contact() {
    const [state, setState] = useAppState()
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm({ defaultValues: state, mode: 'onSubmit' })
    const watchPassword = watch('password')
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/select-plan')
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
                <div className={style.formMain}>
                    <Field
                        label="Name"
                        error={errors?.Name}
                    >
                        <Input
                            {...register('Name', {
                                required: 'Name is required',
                            })}
                            id="name"
                            placeholder={'e.g. Stephen King'}
                        />
                    </Field>
                    <Field
                        label="Email Address"
                        error={errors?.emailAddress}
                    >
                        <Input
                            {...register('emailAddress', {
                                required: 'Email Address is required',
                            })}
                            id="email-address"
                            placeholder={'e.g. stephenking@lorem.com'}
                        />
                    </Field>
                    <Field
                        label="Phone Number"
                        error={errors?.phoneNumber}
                    >
                        <Input
                            {...register('phoneNumber', {
                                required: 'Phone Number is required',
                            })}
                            id="phone-number"
                            placeholder={'e.g. +1 234 567 890'}
                        />
                    </Field>
                    <Button onHandleClick={handleClick}>Next Step</Button>
                </div>
                <div className={style.formBottom}></div>
            </fieldset>
        </Form>
    )
}

export default Contact
