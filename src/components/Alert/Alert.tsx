import React from 'react'
import ErrorIcon from '../../assets/icons/error-icon.svg?react'
import styles from './Alert.module.css'

type AlertProps = {
  variant: 'error' | 'succes' | 'info' | 'warning'
  message: string
}
export const Alert: React.FC<AlertProps> = ({ variant, message }) => {
  return (
    <div className={[styles.wrapper, variant === 'error' ? styles.errorWrapper : ''].join(' ')}>
      {variant === 'error' && <ErrorIcon />}
      <span className={[styles.message, variant === 'error' ? styles.errorMessage : ''].join(' ')}>
        {message}
      </span>
    </div>
  )
}
