import { useFormik } from 'formik'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import RegisterSchema from 'src/schemas/RegisterSchema'
import { btnBack, containerBack } from 'src/styles/styles'
import { dataSelect, titleRegister } from '../helpers/ContentHelper'
import Button from './base/Button'
import Input from './base/Input'

interface RegisterProps {
  page: number
  setPage: (num: number) => void
  signData: { document: string; birthday: string; phone: string }
  useData: {
    data: { name: { title: string; first: string; last: string }; gender: string }
  }
}

interface MyFormValues {
  document: string
  name: string
  lastName: string
  firstName: string
  birthday: string
  person: string
  gender: string
}

const ContainerFormRegister: React.FC<RegisterProps> = ({ useData, signData, setPage, page }) => {
  const initialValues: MyFormValues = {
    document: signData.document,
    name: useData.data.name.title,
    lastName: useData.data.name.last,
    firstName: useData.data.name.first,
    birthday: signData.birthday,
    person: '',
    gender: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <div className="container__form">
      <div style={containerBack}>
        <button onClick={() => setPage(page + 1)} style={btnBack}>
          {'<'}
        </button>
        <label className="container__label--4"> PASO {page} </label> <label className="container__label--5">DE 7</label>
      </div>

      <div>
        <div className="container_lab">
          <label className="container__label"> {'Hola'} </label>
          <label className="container__label--1"> {initialValues.name} </label>
        </div>
        <div>
          <label className="container__label--2"> {titleRegister.title} </label>
        </div>
        <div className="container__form--input">
          <div>
            <label className="container__label--3">Datos personales del titular</label>
          </div>

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
                value={formik.values.name}
                name="name"
                label="Nombres"
                type="text"
              />
              <div className="container__error">
                {formik.touched.name && formik.errors.name ? formik.errors.name : null}
              </div>
              <Input
                onChange={formik.handleChange}
                value={formik.values.firstName}
                name="firstName"
                label="Apellido Paterno"
                type="text"
              />
              <div className="container__error">
                {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
              </div>
              <Input
                onChange={formik.handleChange}
                value={formik.values.lastName}
                name="lastName"
                label="Apellido Materno"
                type="text"
              />
              <div className="container__error">
                {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
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
              <label className="container__label--3">Genero</label>
              <div>
                <Button radio name="gender" label="Hombre" onClick={() => formik.setFieldValue('gender', 'hombre')} />
              </div>

              <div>
                <Button radio name="gender" label="Mujer" onClick={() => formik.setFieldValue('gender', 'mujer')} />
                <div className="container__error--1">
                  {formik.touched.gender && formik.errors.gender ? formik.errors.gender : null}
                </div>
              </div>

              <div>
                <label className="container__label--3">¿A quien vamos a asegurar?</label>
              </div>
              <div>
                <Button
                  radio
                  name="person"
                  label="Solo a mi"
                  onClick={() => formik.setFieldValue('person', 'solo a mi')}
                />
              </div>
              <div>
                <Button
                  radio
                  name="person"
                  label="A mi y a mi familia"
                  onClick={() => formik.setFieldValue('person', 'a mi y a mi familia')}
                />
                <div className="container__error--1">
                  {formik.touched.person && formik.errors.person ? formik.errors.person : null}
                </div>
              </div>
            </div>
            <Button move label="CONTINUAR >" onClick={() => formik.handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContainerFormRegister
