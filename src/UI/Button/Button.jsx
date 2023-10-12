import { forwardRef } from 'react'
import style from './Button.module.css'

export const Button = forwardRef(
  ({ children, onHandleClick, variant = 'primary', ...props}, ref) => {
    return (
      <button onClick={() => onHandleClick()} className={`${style.btn} btn-${variant}`} {...props}>{children}</button>
    )
  }
)