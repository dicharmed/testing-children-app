import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { DatePicker } from '../../components/DatePicker'

export const GeneralInfo: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null)
  return (
    <form>
      <Input label="Имя ребенка" id="childName" placeholder=" " />
      <DatePicker label="Дата рождения ребенка" value={date} onChange={setDate} id="childBirth" />
      <div>Radio group</div>
      <Input label="Имя родителя, заполняющего анкету" id="parentName" placeholder=" " />
    </form>
  )
}
