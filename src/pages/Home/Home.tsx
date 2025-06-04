import { Button } from '../../components/Button'
import ArrowIcon from '../../assets/icons/Forward-right.svg?react'
import { RadioButton } from '../../components/Radiobutton'
import { useState } from 'react'

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
    </div>
  )
}
