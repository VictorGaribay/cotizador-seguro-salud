import React from 'react'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  label: string
  radio?: boolean
  name?: string
  move?: boolean
}

const Button: React.FC<ButtonProps> = ({ radio, move, name, label, onClick, ...props }) => {
  return (
    <>
      {radio ? (
        <button className="container__button--2" type="button" value="Click me" onClick={onClick}>
          <label>
            <input className="container__input--3" type="radio" name={name} />
            <i className="container__i">{label}</i>
          </label>
        </button>
      ) : (
        <div>
          <button className={move ? 'container__button--3' : 'container__button'} onClick={onClick} {...props}>
            {label}
          </button>
        </div>
      )}
    </>
  )
}

export default Button
