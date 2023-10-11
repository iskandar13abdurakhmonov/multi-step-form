import React from 'react'
import style from './Sidebar.module.css'

function Sidebar({ active, steps, activeForm, onNextClick, onPrevClick, onaHandleClick  }) {

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
                <button onClick={() => onaHandleClick()}>click</button>
                <button onClick={() => onPrevClick(1)}>Go Back</button>
                {activeForm}
                <button onClick={() => onNextClick()}>Next Step</button>
            </ul>
        </div>
    )
}

export default Sidebar
