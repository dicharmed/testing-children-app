import { useState } from 'react'
import { Alert } from '../../components/Alert'
import { Container } from '../../components/Container'
import { ImageUpload } from '../../components/ImageUpload'
import styles from './PicturesUpload.module.css'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import ArrowRightIcon from '../../assets/icons/long-arrow-forward.svg?react'

export const PicturesUpload: React.FC = () => {
  const [picture1, setPicture1] = useState<File | null>(null)
  const [picture2, setPicture2] = useState<File | null>(null)
  const [picture3, setPicture3] = useState<File | null>(null)
  return (
    <Container title="Загрузите фотографии рисунков" step={1} total={3}>
      <Alert
        variant="error"
        message="Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб"
      />
      <div className={styles.imagesUploadWrapper}>
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
      <Footer text="Шаг 1/3">
        <Button rightIcon={<ArrowRightIcon />}>Далее</Button>
      </Footer>
    </Container>
  )
}
