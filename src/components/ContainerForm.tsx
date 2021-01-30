import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
interface ContainerFormProps {
  titleForm: { title: string; title1: string; title2: string }
  termForm: { term: string; term1: string }
}

const ContainerForm: React.FC<ContainerFormProps> = ({ titleForm, termForm }) => {
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
            <div>
              <div className="container__floating">
                <select className="container__select" id="document" name="document">
                  <optgroup>
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                  </optgroup>
                </select>
                <input
                  type="number"
                  name="username"
                  className="container__input--2"
                  autoComplete="off"
                  autoFocus
                  required
                />
                <label className="container__floating--label1">Nro documento</label>
              </div>
            </div>
            <div className="container__floating">
              <FaCalendarAlt className="container__icon" />
              <input type="date" id="username" autoComplete="off" autoFocus required />
              <label className="container__floating--label">Fecha de nacimiento</label>
            </div>
            <div className="container__floating">
              <input type="number" id="password" className="form-control" autoComplete="off" required />
              <label className="container__floating--label">Celular</label>
            </div>
          </div>
          <div className="container__terms">
            <label>
              <input type="checkbox" className="container__checkbox" />
              <i>
                Acepto la
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  {termForm.term}
                </a>
              </i>
            </label>
            <label>
              <input type="checkbox" className="container__checkbox" />
              <i>
                Acepto la
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  {termForm.term1}
                </a>
              </i>
            </label>
          </div>
          <div>
            <button>
              <label htmlFor="comencemos">COMENCEMOS</label>{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerForm
