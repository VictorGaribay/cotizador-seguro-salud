import React from 'react'

interface EndPageProps {}

const EndPage: React.FC<EndPageProps> = ({}) => {
  return (
    <div className="container__form--1">
      <div style={{ position: 'absolute', left: '-62px' }}>
        <div className="container_lab">
          <label className="container__label"> GRACIAS POR </label>
          <label className="container__label--1"> CONFIAR EN NOSOSTROS! </label>
        </div>
        <div>
          <label className="container__label--2">
            Queremos conocerte mejor la salud de los asegurados. <br /> Un asesor se pondrá en contacto contigo en las
            siguientes 48 horas.
          </label>
        </div>
        <div className="container__form--input">
          <button className={'container__button--4'} onClick={() => alert('Ir a salud')}>
            IR A SALUD
          </button>
        </div>
      </div>
    </div>
  )
}

export default EndPage
