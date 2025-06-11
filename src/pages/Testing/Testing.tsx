import React from 'react'
import { Container } from '../../components/Container'
import { TextArea } from '../../components/TextArea'
import { GeneralInfo } from '../../features/GeneralInfo'

export const Testing: React.FC = () => {
  return (
    <Container title="Общая информация о ребенке" step={2} total={3}>
      <GeneralInfo />
      <TextArea
        label="Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?"
        id="childFeatures"
        placeholder=" "
      />
    </Container>
  )
}
