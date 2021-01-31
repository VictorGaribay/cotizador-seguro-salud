import { useFormik } from 'formik'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import RegisterSchema from 'src/schemas/RegisterSchema'
import { dataSelect, titleRegister } from '../helpers/ContentHelper'
import Button from './base/Button'
import Input from './base/Input'

interface RegisterProps {}

interface MyFormValues {
  document: string
  name: string
  lastName: string
  firstName: string
  birthday: string
  person: string
  gander: string
}

const ContainerFormRegister: React.FC<RegisterProps> = ({}) => {
  const initialValues: MyFormValues = {
    document: '',
    name: '',
    lastName: '',
    firstName: '',
    birthday: '',
    person: '',
    gander: ''
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
      <div>
        <div className="container_lab">
          <label className="container__label"> {'Hola'} </label>
          <label className="container__label--1"> {'Pepito'} </label>
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
                <Button radio name="gander" label="Hombre" onClick={() => formik.setFieldValue('gander', 'hombre')} />
              </div>

              <div>
                <Button radio name="gander" label="Mujer" onClick={() => formik.setFieldValue('gander', 'mujer')} />
                <div className="container__error--1">
                  {formik.touched.gander && formik.errors.gander ? formik.errors.gander : null}
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
