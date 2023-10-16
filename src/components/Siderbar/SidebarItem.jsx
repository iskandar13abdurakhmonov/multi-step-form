import React, { useContext } from 'react'
import { GlobalContext } from '../../hooks/GlobalContext'
import style from './Sidebar.module.css'

const SidebarItem = ({ index, stepInfo }) => {
    const { step } = useContext(GlobalContext)

    function active(step, index) {
        if (step === index) return true
    }
    const isActive = active(step, index)

    return (
        <li className={style.stepItem}>
            <div className={`${style.stepId} ${isActive ? style.active : ''}`}>{index}</div>
            <div className={style.stepFlex}>
                <span className={style.stepNum}>STEP {index}</span>
                <p className={style.stepText}>{stepInfo}</p>
            </div>
        </li>
    )
}

export default SidebarItem


