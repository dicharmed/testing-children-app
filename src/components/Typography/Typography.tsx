import React from 'react'
import styles from './Typography.module.css'

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'default'
  title: string
  className?: string
}
export const Typography: React.FC<TypographyProps> = ({
  variant = 'default',
  title,
  className = '',
}) => {
  return (
    <div
      className={[
        styles.typography,
        variant === 'h1'
          ? styles.h1
          : variant === 'h2'
            ? styles.h2
            : variant === 'h3'
              ? styles.h3
              : '',
        className,
      ].join(' ')}
    >
      {title}
    </div>
  )
}
