import { Button } from '../../components/Button'
import ArrowIcon from '../../assets/icons/Forward-right.svg?react'
import { RadioButton } from '../../components/RadioButton'
import { useState } from 'react'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Alert } from '../../components/Alert'
import { Banner } from '../../components/Banner/Banner'
import ThumsUpIcon from '../../assets/icons/thumbs-up.svg?react'
import FlagIcon from '../../assets/icons/flag.svg?react'
import { ImageUpload } from '../../components/ImageUpload'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { Typography } from '../../components/Typography'

export const Home: React.FC = () => {
  const [value, setValue] = useState('rare')

  const [file, setFile] = useState<File | null>(null)
  const data = [
    {
      icon: <ThumsUpIcon />,
      message:
        'Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа, отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель. Отвечайте максимально честно и искренне, так как от этого зависит точность оценки психоэмоционального развития Вашего ребенка.',
    },
    { icon: <FlagIcon />, message: 'Все вопросы обязательны к заполнению' },
  ]
  return (
    <Container title="ИИ-психодиагностика детей" withoutProgressBar>
      <Link to={ROUTES.UPLOAD}>Начать тест</Link>
      <Alert
        variant="error"
        message="Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб"
      />
      <RadioButton
        checked={value === 'rare'}
        onChange={() => setValue('rare')}
        label="Очень редко"
        name="frequency"
      />
      <Button rightIcon={<ArrowIcon />}>Узнать результаты</Button>

      <Banner data={data} />
      <ImageUpload label="Дом, дерево, человек" value={file} onChange={setFile} maxSizeMB={5} />
      <Footer text="Шаг 1/3">
        <Button>ok</Button>
        <Button>cncel</Button>
      </Footer>
    </Container>
  )
}
