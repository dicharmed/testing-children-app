import React from 'react'
import styles from './Banner.module.css'
import { v4 as uuid } from 'uuid'
import { Typography } from '../Typography'

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
          <Typography variant="h3" title={message} className={styles.message} />
        </div>
      ))}
    </div>
  )
}
