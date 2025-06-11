import type React from 'react'
import styles from './Container.module.css'
import { ProgressBar } from '../ProgressBar'
import { Typography } from '../Typography'

type ContainerProps = {
  title: string
  step?: number
  total?: number
  children: React.ReactNode
  withoutProgressBar?: boolean
}

export const Container: React.FC<ContainerProps> = ({
  title,
  step,
  total,
  children,
  withoutProgressBar = false,
}) => {
  return (
    <div className={styles.wrapper}>
      {!withoutProgressBar && <ProgressBar step={step} total={total} />}

      <div className={styles.content}>
        <Typography variant="h1" title={title} className={styles.contentHeader} />
        <div className={styles.contentMain}>{children}</div>
      </div>
    </div>
  )
}
