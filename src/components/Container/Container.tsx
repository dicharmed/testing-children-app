import type React from 'react'
import styles from './Container.module.css'

type ContainerProps = {
  title: string
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topLine} />

      <div className={styles.content}>
        <div className={styles.contentHeader}>{title}</div>
        <div className={styles.contentMain}>{children}</div>
      </div>
    </div>
  )
}
