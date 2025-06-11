import { Alert } from '../../components/Alert'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import ArrowRightIcon from '../../assets/icons/long-arrow-forward.svg?react'
import { PictureUploadBox } from '../../features/PictureUploadBox'

import { ROUTES } from '../../constants/routes'
import { NavLink } from '../../components/NavLink'

export const PicturesUpload: React.FC = () => {
  return (
    <Container title="Загрузите фотографии рисунков" step={1} total={3}>
      <Alert
        variant="error"
        message="Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб"
      />
      <PictureUploadBox />
      <Footer text="Шаг 1/3">
        <NavLink path={ROUTES.TESTING} title="Далее" rightIcon={<ArrowRightIcon />} />
      </Footer>
    </Container>
  )
}
