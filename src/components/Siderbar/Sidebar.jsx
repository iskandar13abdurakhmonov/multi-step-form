import React from 'react'
import style from './Sidebar.module.css'

const steps = [
    {
        stepId: 1,
        stepNum: 'STEP 1',
        stepText: 'YOUR INFO',
    },
    {
        stepId: 2,
        stepNum: 'STEP 2',
        stepText: 'SELECT PLAN',
    },
    {
        stepId: 3,
        stepNum: 'STEP 3',
        stepText: 'ADD-ONS',
    },
    {
        stepId: 4,
        stepNum: 'STEP 4',
        stepText: 'SUMMARY',
    },
]

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <ul className={style.stepList}>
                {steps.map((step) => (
                    <li
                        className={style.stepItem}
                        key={step.id}
                    >
                        <div className={style.stepId}>{step.stepId}</div>
                        <div className={style.stepFlex}>
                            <span className={style.stepNum}>
                                {step.stepNum}
                            </span>
                            <p className={style.stepText}>{step.stepText}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
