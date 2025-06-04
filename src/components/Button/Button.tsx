import React from 'react'
import styles from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
  width?: number
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  leftIcon,
  rightIcon,
  children,
  width,
  className = '',
  ...props
}) => {
  return (
    <button
      style={width ? { width: width } : { width: 'fit-content' }}
      className={[
        styles.button,
        variant === 'secondary' ? styles.secondary : '',
        leftIcon || rightIcon ? styles.icon : '',
        className,
      ].join(' ')}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  )
}
