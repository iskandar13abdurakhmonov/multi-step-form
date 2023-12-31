import React from 'react'
import FormHeader from './FormHeader'
import styles from './PlanSelection.module.css'
import { ReactComponent as Arcade } from '../../assets/icon-arcade.svg'
import { ReactComponent as Advanced } from '../../assets/icon-advanced.svg'
import { ReactComponent as Pro } from '../../assets/icon-pro.svg'
import { GlobalContext } from '../../hooks/GlobalContext'
import Slider from '../../UI/Slider'
import Button from '../../UI/Button'

export const planOptions = [
    {
        Arcade: {
            monthPrice: 9,
            yearPrice: 90,
        },
    },
    {
        Advanced: {
            monthPrice: 12,
            yearPrice: 120,
        },
    },
    {
        Pro: {
            monthPrice: 15,
            yearPrice: 150,
        },
    },
]

const PlanSelection = () => {
    const { duration, setDuration, plan, setPlan, setStep, step } =
        React.useContext(GlobalContext)
    const isMonthly = duration[0] ? false : true

    const svgMapping = {
        Arcade,
        Advanced,
        Pro,
    }

    function handleClick({ currentTarget }) {
        setPlan(currentTarget.id)
    }

    return (
        <>
            <FormHeader
                title="Select your plan"
                info="You have the option of monthly or yearly billing."
            />
            <div className={styles.planWrapper}>
                {planOptions.map((item) => {
                    const SvgComponent = svgMapping[Object.keys(item)]
                    const isPlanSelected = plan.includes(Object.keys(item))
                    return (
                        <div
                            className={
                                isPlanSelected
                                    ? `${styles.planItem} ${styles.active} `
                                    : `${styles.planItem} `
                            }
                            onClick={handleClick}
                            id={Object.keys(item)}
                            key={Object.keys(item)}
                        >
                            <SvgComponent />
                            <div className={styles.left}>
                                <h2>{Object.keys(item)}</h2>
                                {isMonthly ? (
                                    <p>
                                        ${item[Object.keys(item)].monthPrice}/mo
                                    </p>
                                ) : (
                                    <>
                                        <p>
                                            ${item[Object.keys(item)].yearPrice}
                                            /yr
                                        </p>
                                        <span>2 months free</span>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.durationWrapper}>
                <span className={isMonthly ? styles.active : ''}>Monthly</span>
                <Slider
                    options={['Yearly']}
                    value={duration}
                    setValue={setDuration}
                />
                <span className={isMonthly ? '' : styles.active}>Yearly</span>
            </div>
            <div className={styles.flexParent}>
                <div className={styles.buttonWrapper}>
                    <Button
                        onClick={() => setStep(step - 1)}
                        id="back"
                        buttonInfo="Go Back"
                    />
                    <Button
                        onClick={() => {
                            if (plan) setStep(step + 1)
                        }}
                        id="next"
                        buttonInfo="Next Step"
                    />
                </div>
            </div>
        </>
    )
}

export default PlanSelection
