import React, { useState } from 'react'
import style from './Plan.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../../contexts/state'
import { Button } from '../../UI/Button/Button'
import Field from '../../UI/Field/Field'
import Form from '../../UI/Form/Form'
import { Input } from '../../UI/Input/Input'
import { ChooseBox } from '../../UI/ChooseBox/ChooseBox'
import Switch from 'react-switch'

const plans = [
    {
        image: '/images/icon-arcade.svg',
        text: 'Arcade',
        monthly: '$9/mo',
        yearly: '$90/yr'
    },
    {
        image: '/images/icon-advanced.svg',
        text: 'Advanced',
        monthly: '$12/mo',
        yearly: '$120/yr'
    },
    {
        image: '/images/icon-pro.svg',
        text: 'Pro',
        monthly: '$15/mo',
        yearly: '$150/yr'
    }
]

export default function Plan() {
    const [state, setState] = useState()
    const [isSwitchOn, setIsSwitchOn] = useState(true)

    const switchChangeHandler = () => {
        setIsSwitchOn(!isSwitchOn)
    }

    const { handleSumbit, register } = useForm({ defaultValues: state })
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/')
    }

    const handleForwardClick = () => {
        navigate('/add-ons')
    }

    const saveData = (data) => {
        setState({ ...state, ...data })
        navigate('/add-ons')
    }

    return (
        <Form>
            <fieldset className={style.fieldset}>
                <div className={style.formTop}>
                    <h1 className={style.formTitle}>Select your plan</h1>
                    <p className={style.formTopDescr}>
                        You have the option of monthly or yearly billing
                    </p>
                </div>
                <div className={style.formMain}>
                    {plans.map((plan, idx) => <ChooseBox
                            key={idx}
                            plan={plan}
                            image={plan.image}
                            text={plan.text}
                            monthly={plan.monthly}
                            yearly={plan.yearly}
                        />)}
                </div>
                <div className={style.switch}>
                    <label className={style.switchLabel}>Monthly</label>
                    <Switch
                        className={style.switchIcon}
                        checked={isSwitchOn}
                        offColor='#02295C'
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor='#02295C'
                        activeBoxShadow='0 0 0 0'
                        width={38}
                        height={20}
                        handleDiameter={12}
                        value={isSwitchOn}
                        onChange={switchChangeHandler}
                    />
                    <label className={style.switchLabel}>Yearly</label>
                </div>
                <div className={style.formBottom}>
                    {/* <button onClick={() => handleBackClick()}>Go Back</button> */}
                    {/* <Button backgroundColor={'#022959'} handleBackClick={handleBackClick}>Go Back</Button> */}
                    <button onClick={() => handleBackClick()}>Go Back</button>
                    {/* <Button backgroundColor={'#022959'} handleForwardClick={handleForwardClick}>
                        Next Step
                    </Button> */}
                    <button onClick={() => handleForwardClick()}>Next Step</button>
                </div>
            </fieldset>
        </Form>
    )
}
