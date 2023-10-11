import React from 'react'
import style from './Sidebar.module.css'

function Sidebar({ active, steps }) {

    return (
        <div className={style.sidebar}>
            <ul className={style.stepList}>
                {steps.map((step) => (
                    <li
                        className={style.stepItem}
                        key={step.stepId}
                    >
                        <div className={`${style.stepId} ${active ? style.active : ''}`}>{step.stepId}</div>
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
