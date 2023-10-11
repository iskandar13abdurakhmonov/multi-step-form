import React from 'react'
import style from './Field.module.css'

export default function Field({ children, label, error }) {

    const id = getChildId(children)

  return (
    <div className={style.field}>
        <label className={style.formLabel} htmlFor={id}>
            {label}
        </label>
        {children}
        {error && <small>{error.message}</small>}
    </div>
  )
}

export const getChildId = (children) => {
    const child = React.Children.only(children)

    if('id' in child?.props) {
        return child.props.id
    }
}
