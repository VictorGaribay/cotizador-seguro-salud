import { useFormik } from 'formik'
import React, { useState } from 'react'
import { btnBack, containerBack } from 'src/styles/styles'
import { dataServices, exclusionSelect, plans, serviceSelect } from '../helpers/ContentHelper'
import Button from './base/Button'
import Card from './base/Card'
import Select from './base/Select'
import TableService from './TableService'

interface ContainerPlanProps {
  page: number
  setPage: (num: number) => void
}

interface MyFormValues {
  plan: string
  services: string
  exclusions: string
}

const ContainerPlan: React.FC<ContainerPlanProps> = ({ page, setPage }) => {
  const initialValues: MyFormValues = {
    plan: '',
    services: '',
    exclusions: ''
  }
  const [services, setServices] = useState(dataServices)

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      setPage(page + 1)
    }
  })

  return (
    <div className="container__form">
      <div style={containerBack}>
        <button onClick={() => setPage(page - 1)} style={btnBack}>
          {'<'}
        </button>
        <label className="container__label--4"> PASO {page} </label> <label className="container__label--5">DE 7</label>
      </div>
      <div>
        <div className="container_lab">
          <label className="container__label"> {'Elige'} </label>
          <label className="container__label--1"> tu protección </label>
        </div>
        <div>
          <label className="container__label--2"> selecciona tu plan de salud ideal </label>
        </div>
        <div className="container__form--input">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  title={plan.title}
                  money={plan.money}
                  onClick={() => {
                    formik.setFieldValue('plan', plan.title)
                    setServices(
                      services.map(service => {
                        if (service.id <= index) {
                          return { ...service, status: true }
                        } else {
                          return { ...service, status: false }
                        }
                      })
                    )
                  }}
                />
              ))}
            </div>
            <TableService services={services} />
            <div className="container_lab">
              <label className="container__label"> Revisa nuestros </label>
              <br />
              <label className="container__label--1"> servicios exclusivos </label>
            </div>
            <Select formik={formik} name="services" data={serviceSelect} />
            <Select formik={formik} name="exclusions" data={exclusionSelect} />
            <Button move label="CONTINUAR >" onClick={() => formik.handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContainerPlan
