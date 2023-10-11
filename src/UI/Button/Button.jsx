import { forwardRef } from 'react'
import style from './Button.module.css'

export const Button = forwardRef(
  ({ children, variant = 'primary', ...props }, ref) => {
    return (
      <button className={`${style.btn} btn-${variant}`} {...props}>{children}</button>
    )
  }
)