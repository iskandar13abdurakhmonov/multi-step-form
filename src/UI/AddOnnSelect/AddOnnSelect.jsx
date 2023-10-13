import React from 'react'
import style from './AddOnnSelect.module.css'

export default function AddOnnSelect({ selectTitle, selectDescr, monthly, yearly}) {
  return (
    <div className={style.select}>
        <input className={style.selectCheckbox} type="checkbox" />
        <div className={style.selectTextbox}>
            <h2 className={style.selectTitle}>
                {selectTitle}
            </h2>
            <p className={style.selectDescr}>
                {selectDescr}
            </p>
        </div>
        <span className={style.selectPlan}>{monthly}</span>
    </div>
  )
}