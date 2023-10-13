import React, { useState } from 'react'
import style from './AddOns.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Form from '../../UI/Form/Form'
import Field from '../../UI/Field/Field'
import AddOnnSelect from '../../UI/AddOnnSelect/AddOnnSelect'

export default function AddOns() {
    const [state, setState] = useState()

    const { handleSubmit, register } = useForm({ defaultValues: state })
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/select-plan')
    }

    const handleForwardClick = () => {
        navigate('/confirmation')
    }

    const saveData = (data) => {
        setState({ ...state, ...data })
        navigate('/confirmation')
    }

    return (
        <Form>
            <fieldset>
                <div className={style.formTop}>
                    <h1 className={style.formTitle}>Pick add-ons</h1>
                    <p className={style.formTopDescr}>
                        Add-ons helps you enhance your gaming experience
                    </p>
                </div>
                <div className={style.formMain}>
                    <Field label=''>
                        <AddOnnSelect
                            selectTitle={'Online Service'}
                            selectDescr={'Access to multiple games'}
                            monthly={'+$1/mo'}
                        />
                    </Field>
                    <Field label=''>
                        <AddOnnSelect
                            selectTitle={'Larger Storage'}
                            selectDescr={'Extra 1TB of cloud save'}
                            monthly={'+$2/mo'}
                        />
                    </Field>
                    <Field label=''>
                        <AddOnnSelect
                            selectTitle={'Customizable profile'}
                            selectDescr={'Custom theme on your profile'}
                            monthly={'+$2/mo'}
                        />
                    </Field>
                </div>
                <div className={style.formBottom}>
                    {/* <button onClick={() => handleBackClick()}>Go Back</button> */}
                    {/* <Button backgroundColor={'#022959'} handleBackClick={handleBackClick}>Go Back</Button> */}
                    <button onClick={() => handleBackClick()}>Go Back</button>
                    {/* <Button backgroundColor={'#022959'} handleForwardClick={handleForwardClick}>
                        Next Step
                    </Button> */}
                    <button onClick={() => handleForwardClick()}>
                        Next Step
                    </button>
                </div>
            </fieldset>
        </Form>
    )
}
