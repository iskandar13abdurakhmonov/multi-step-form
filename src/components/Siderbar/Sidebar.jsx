import React from 'react'
import style from './Sidebar.module.css'
import { useLocation } from 'react-router-dom'

function Sidebar() {

    const location = useLocation()

    const getLinkClass = (path) => {
        return (
            'stepId ' + (path === location.pathname ? `${style.active}` : undefined)
        )
    }

    return (
        <div className={style.sidebar}>
            <ul className={style.stepList}>
                <li className={style.stepItem}>
                    <div className={`${style.stepId} ${getLinkClass('/')}`}>1</div>
                    <div className={style.stepFlex}>
                        <span className={style.stepNum}>STEP 1</span>
                        <p className={style.stepText}>YOUR INFO</p>
                    </div>
                </li>
                <li className={style.stepItem}>
                    <div className={`${style.stepId} ${getLinkClass('/select-plan')}`}>2</div>
                    <div className={style.stepFlex}>
                        <span className={style.stepNum}>STEP 2</span>
                        <p className={style.stepText}>SELECT PLAN</p>
                    </div>
                </li>
                <li className={style.stepItem}>
                    <div className={`${style.stepId} ${getLinkClass('/add-ons')}`}>3</div>
                    <div className={style.stepFlex}>
                        <span className={style.stepNum}>STEP 3</span>
                        <p className={style.stepText}>ADD-ONS</p>
                    </div>
                </li>
                <li className={style.stepItem}>
                    <div className={`${style.stepId} ${getLinkClass('/summary')}`}>4</div>
                    <div className={style.stepFlex}>
                        <span className={style.stepNum}>STEP 4</span>
                        <p className={style.stepText}>SUMMARY</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
