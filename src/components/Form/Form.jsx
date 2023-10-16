import style from './Form.module.css'
import React from 'react'
import { GlobalContext } from '../../hooks/GlobalContext'
import PersonalInfo from '../Steps/PersonalInfo'
import PlanSelection from '../Steps/PlanSelection'
import AddOns from '../Steps/AddOns'
import Summary from '../Steps/Summary'
import ThankYouPage from '../Steps/ThankYouPage'

const Form = () => {
    const { step } = React.useContext(GlobalContext)

    switch (step) {
        case 1:
            return (
                <section className={style.formWrapper}>
                    <PersonalInfo />
                </section>
            )

        case 2:
            return (
                <section className={style.formWrapper}>
                    <PlanSelection />
                </section>
            )

        case 3:
            return (
                <section className={style.formWrapper}>
                    <AddOns />
                </section>
            )

        case 4:
            return (
                <section className={style.formWrapper}>
                    <Summary />
                </section>
            )

        case 5:
            return (
                <section className={style.formWrapper}>
                    <ThankYouPage />
                </section>
            )

        default:
            break
    }
}

export default Form
