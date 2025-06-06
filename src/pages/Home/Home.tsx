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

export const Home: React.FC = () => {
  const [value, setValue] = useState('rare')
  const [date, setDate] = useState<Date | null>(null)
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
      <Footer text="Шаг 1/3">
        <Button>ok</Button>
        <Button>cncel</Button>
      </Footer>
    </Container>
  )
}
