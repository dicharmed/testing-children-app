import React, { useRef, useState, useEffect } from 'react'
import styles from './ImageUpload.module.css'
import UploadIcon from '../../assets/icons/upload-icon.svg?react'
import { Typography } from '../Typography'

type ImageUploadProps = {
  label: string
  value?: File | null
  onChange: (file: File | null) => void
  accept?: string
  maxSizeMB?: number
  className?: string
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  label,
  value,
  onChange,
  accept = '.jpg,.jpeg,.png,.pdf',
  maxSizeMB = 5,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value)
      setPreview(url)
      return () => URL.revokeObjectURL(url)
    } else {
      setPreview(null)
    }
  }, [value])

  const handleFile = (file: File | null) => {
    if (!file) return
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Размер не более ${maxSizeMB} МБ`)
      return
    }
    if (
      !accept
        .split(',')
        .some((ext) => file.name.toLowerCase().endsWith(ext.trim().replace('.', '')))
    ) {
      setError('Недопустимый формат файла')
      return
    }
    setError(null)
    onChange(file)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    handleFile(file)
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0] || null
    handleFile(file)
  }

  return (
    <div className={[styles.wrapper, className].join(' ')}>
      <div
        className={`${styles.uploadBox} ${dragActive ? styles.dragActive : ''}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDragActive(true)
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={onDrop}
        tabIndex={0}
      >
        {preview ? (
          <>
            <img src={preview} alt="preview" className={styles.preview} />
            <button
              className={styles.removeBtn}
              onClick={(e) => {
                e.stopPropagation()
                onChange(null)
              }}
              type="button"
              aria-label="Удалить"
            >
              ×
            </button>
          </>
        ) : (
          <UploadIcon className={styles.icon} />
        )}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          style={{ display: 'none' }}
          onChange={onInputChange}
          tabIndex={-1}
        />
      </div>
      <Typography variant="h2" title={label} className={styles.label} />
      {error && <div style={{ color: 'var(--red-110)', marginTop: 8 }}>{error}</div>}
    </div>
  )
}
