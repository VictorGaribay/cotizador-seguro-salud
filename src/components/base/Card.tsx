import checkImg from '.../../../public/gl_correct.png'
import React from 'react'

interface CardProps {
  title: string
  money: string
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ title, money, onClick }) => {
  return (
    <div>
      <label className="label">
        <input type="radio" name="plan" className="card-input-element" />
        <div className="card-input" onClick={onClick}>
          <img src={checkImg} alt="Avatar" className="card__img" />
          <div className="panel-body">
            <p className="card__title">{title}</p>
            <>
              <b className="card__title--1"> S/.</b>
              <b className="card__title--2">{money}</b>
            </>
            <p className="card__title--3">Mensual</p>
          </div>
        </div>
      </label>
    </div>
  )
}

export default Card
