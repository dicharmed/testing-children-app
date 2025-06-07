import React from 'react'
import styles from './Footer.module.css'
import { Typography } from '../Typography'

type FooterProps = {
  text: string
  children: React.ReactNode
}
export const Footer: React.FC<FooterProps> = ({ text, children }) => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h3" title={text} className={styles.left} />

      <div className={styles.right}>{children}</div>
    </div>
  )
}
