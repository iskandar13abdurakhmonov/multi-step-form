import { forwardRef } from 'react'
import style from './Button.module.css'

export const Button = forwardRef(
    (
        { children, backgroundColor, variant = 'primary', ...props },
        ref
    ) => {
        return (
            <button
                style={{ backgroundColor: `${backgroundColor}` }}
                className={`${style.btn} btn-${variant}`}
                {...props}
            >
                {children}
            </button>
        )
    }
)
