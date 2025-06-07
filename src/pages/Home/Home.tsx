import { Button } from '../../components/Button'
import ArrowIcon from '../../assets/icons/Forward-right.svg?react'
import { RadioButton } from '../../components/RadioButton'
import { useState } from 'react'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { DatePicker } from '../../components/DatePicker'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Alert } from '../../components/Alert'
import { Banner } from '../../components/Banner/Banner'
import ThumsUpIcon from '../../assets/icons/thumbs-up.svg?react'
import FlagIcon from '../../assets/icons/flag.svg?react'

export const Home: React.FC = () => {
  const [value, setValue] = useState('rare')
  const [date, setDate] = useState<Date | null>(null)
  const data = [
    {
      icon: <ThumsUpIcon />,
      message:
        'Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа, отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель. Отвечайте максимально честно и искренне, так как от этого зависит точность оценки психоэмоционального развития Вашего ребенка.',
    },
    { icon: <FlagIcon />, message: 'Все вопросы обязательны к заполнению' },
  ]
  return (
    <Container title="Home page" step={2} total={3}>
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
      <form>
        <Input label="Имя ребенка" id="childName" placeholder=" " />
        <TextArea
          label="Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?"
          id="childFeatures"
          placeholder=" "
        />
      </form>
      <DatePicker label="Дата рождения ребенка" value={date} onChange={setDate} id="childBirth" />

      <Banner data={data} />
      <Footer text="Шаг 1/3">
        <Button>ok</Button>
        <Button>cncel</Button>
      </Footer>
    </Container>
  )
}
