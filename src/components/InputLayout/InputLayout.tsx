import React from 'react'
import styles from './InputLayout.module.css'

type InputLayoutProps = {
  id?: string
  label: string
  children: React.ReactNode
}

export const InputLayout: React.FC<InputLayoutProps> = ({ label, id, children }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  )
}
