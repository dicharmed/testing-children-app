import React from 'react'
import styles from './ProgressBar.module.css'

type ProgressBarProps = {
  step: number
  total: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ step, total }) => {
  const percent = React.useMemo(() => Math.max(0, Math.min(1, step / total)) * 100, [step, total])
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${percent}%` }} />
    </div>
  )
}
