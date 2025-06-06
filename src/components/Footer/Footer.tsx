import React from 'react'
import styles from './Footer.module.css'

type FooterProps = {
  text: string
  children: React.ReactNode
}
export const Footer: React.FC<FooterProps> = ({ text, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <span>{text}</span>
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  )
}
