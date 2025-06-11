import React, { useState } from 'react'
import { ImageUpload } from '../../components/ImageUpload'
import styles from './PictureUploadBox.module.css'

export const PictureUploadBox: React.FC = () => {
  const [picture1, setPicture1] = useState<File | null>(null)
  const [picture2, setPicture2] = useState<File | null>(null)
  const [picture3, setPicture3] = useState<File | null>(null)
  return (
    <div className={styles.wrapper}>
      <ImageUpload
        label="Дом, дерево, человек"
        value={picture1}
        onChange={setPicture1}
        maxSizeMB={5}
      />
      <ImageUpload
        label="Несуществующее животное"
        value={picture2}
        onChange={setPicture2}
        maxSizeMB={5}
      />
      <ImageUpload label="Автопортрет" value={picture3} onChange={setPicture3} maxSizeMB={5} />
    </div>
  )
}
