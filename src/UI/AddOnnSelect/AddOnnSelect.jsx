import React, { useState } from 'react'
import style from './AddOnnSelect.module.css'

export default function AddOnnSelect({ addOn }) {
    const [checked, setChecked] = useState(addOn.isChecked)

    const handleCheckClick = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <div className={`${style.select} ${checked ? style.selectActive : ''}`}>
            <input
                onChange={handleCheckClick}
                className={style.selectCheckbox}
                type="checkbox"
                value={addOn.isChecked}
            />
            <div className={style.selectTextbox}>
                <h2 className={style.selectTitle}>{addOn.title}</h2>
                <p className={style.selectDescr}>{addOn.description}</p>
            </div>
            <span className={style.selectPlan}>{addOn.monthly}</span>
        </div>
    )
}
