import { Button } from '../../components/Button'
import ArrowIcon from '../../assets/icons/Forward-right.svg?react'
import { RadioButton } from '../../components/RadioButton'
import { useState } from 'react'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'

export const Home: React.FC = () => {
  const [value, setValue] = useState('rare')
  return (
    <div>
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
    </div>
  )
}
