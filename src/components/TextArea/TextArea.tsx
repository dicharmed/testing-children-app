import React from 'react'
import styles from '../Input/Input.module.css'
import { InputLayout } from '../InputLayout'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
}

export const TextArea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  return (
    <InputLayout id={id} label={label}>
      <textarea className={styles.textarea} id={id} {...props} />
    </InputLayout>
  )
}
