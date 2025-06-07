import React from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './DatePicker.module.css'
import { ru } from 'date-fns/locale'

type DatePickerProps = {
  label: string
  value: Date | null
  onChange: (date: Date | null) => void
  id?: string
  disabled?: boolean
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  id,
  disabled = false,
}) => (
  <div className={styles.pickerWrapper}>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <ReactDatePicker
      id={id}
      selected={value}
      onChange={onChange}
      dateFormat="dd.MM.yyyy"
      locale={ru}
      className={styles.input}
      calendarClassName={styles.calendar}
      disabled={disabled}
      placeholderText="дд.мм.гггг"
      popperPlacement="bottom-start"
    />
  </div>
)
