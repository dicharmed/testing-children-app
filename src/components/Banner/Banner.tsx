import React from 'react'
import styles from './Banner.module.css'
import { v4 as uuid } from 'uuid'

type DataType = {
  icon: React.ReactNode
  message: string
}
type BannerProps = {
  data: Array<DataType>
}
export const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.map(({ icon, message }) => (
        <div key={uuid()} className={styles.paragraph}>
          <div>{icon}</div>
          <div className={styles.message}>{message}</div>
        </div>
      ))}
    </div>
  )
}
