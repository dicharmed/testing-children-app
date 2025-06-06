import React from 'react'
import styles from './Input.module.css'
import { InputLayout } from '../InputLayout'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <InputLayout id={id} label={label}>
      <input className={styles.input} id={id} {...props} />
    </InputLayout>
  )
}
