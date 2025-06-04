import React from 'react'
import styles from './RadioButton.module.css'

type RadioButtonProps = {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  name: string
  disabled?: boolean
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  label,
  name,
  disabled = false,
}) => (
  <label className={styles.radioLabel}>
    <input
      type="radio"
      className={styles.input}
      checked={checked}
      onChange={onChange}
      name={name}
      disabled={disabled}
    />
    <span className={styles.customRadio}></span>
    <span className={styles.labelText}>{label}</span>
  </label>
)
