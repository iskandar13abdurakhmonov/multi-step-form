import { forwardRef } from 'react'
import style from './Button.module.css'

export const Button = forwardRef(
    (
        { children, handleBackClick, backgroundColor, variant = 'primary', ...props },
        ref
    ) => {
        return (
            <button
                onClick={handleBackClick}
                style={{ backgroundColor: `${backgroundColor}` }}
                className={`${style.btn} btn-${variant}`}
                {...props}
            >
                {children}
            </button>
        )
    }
)
