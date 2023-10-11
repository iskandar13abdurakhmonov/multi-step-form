import { forwardRef } from 'react'
import style from './Input.module.css'

export const Input = forwardRef((props, ref, placeholder) => {
    return <input type="text" placeholder={placeholder} ref={ref} className={style.formInput} {...props} />
})
