import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import Button from './base/Button'
import Input from './base/Input'
interface ContainerFormProps {
  titleForm: { title: string; title1: string; title2: string }
  termForm: { term: string; term1: string }
  dataSelect: { value: string; text: string }[]
}

const ContainerForm: React.FC<ContainerFormProps> = ({ titleForm, termForm, dataSelect }) => {
  return (
    <div className="container__form">
      <div>
        <div className="container_lab">
          <label className="container__label"> {titleForm.title} </label>
          <label className="container__label--1"> {titleForm.title1} </label>
        </div>
        <div>
          <label className="container__label--2"> {titleForm.title2} </label>
        </div>
        <div className="container__form--input">
          <div>
            <Input name="document" label="Nro documento" type="number" dataSelect={dataSelect} />
            <Input
              name="birthday"
              label="Fecha de nacimiento"
              type="date"
              icon={<FaCalendarAlt className="container__icon" />}
            />
            <Input name="phone" label="Celular" type="number" />
          </div>
          <Input name="term" label="Acepto la" type="checkbox" termForm={termForm.term} />
          <Input name="term1" label="Acepto la" type="checkbox" termForm={termForm.term1} />
          <Button label="COMENCEMOS" onClick={() => alert('button')} />
        </div>
      </div>
    </div>
  )
}

export default ContainerForm
