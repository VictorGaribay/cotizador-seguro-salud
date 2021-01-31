import { useFormik } from 'formik'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import SignInSchema from 'src/schemas/SignInSchema'
import { dataSelect, termForm, titleForm } from '../helpers/ContentHelper'
import Button from './base/Button'
import Input from './base/Input'

interface MyFormValues {
  document: string
  birthday: string
  phone: string
}

interface ContainerFormProps {
  getUser: () => void
  setData: (p: MyFormValues) => void
}

const ContainerForm: React.FC<ContainerFormProps> = ({ getUser, setData }) => {
  const initialValues: MyFormValues = {
    document: '',
    birthday: '',
    phone: ''
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignInSchema,
    onSubmit: values => {
      setData(values)
      getUser()
    }
  })
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
          <form onSubmit={formik.handleSubmit}>
            <div>
              <Input
                onChange={formik.handleChange}
                value={formik.values.document}
                name="document"
                label="Nro documento"
                type="number"
                dataSelect={dataSelect}
              />
              <div className="container__error">
                {formik.touched.document && formik.errors.document ? formik.errors.document : null}
              </div>
              <Input
                onChange={formik.handleChange}
                value={formik.values.birthday}
                name="birthday"
                label="Fecha de nacimiento"
                type="date"
                icon={<FaCalendarAlt className="container__icon" />}
              />
              <div className="container__error">
                {formik.touched.birthday && formik.errors.birthday ? formik.errors.birthday : null}
              </div>
              <Input
                onChange={formik.handleChange}
                value={formik.values.phone}
                name="phone"
                label="Celular"
                type="number"
              />
              <div className="container__error">
                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
              </div>
              <div className="container__checkbox--3">
                <Input name="term" label="Acepto la" type="checkbox" termForm={termForm.term} />
                <Input name="term1" label="Acepto la" type="checkbox" termForm={termForm.term1} />
              </div>
            </div>
            <Button label="COMENCEMOS" onClick={() => formik.handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContainerForm
