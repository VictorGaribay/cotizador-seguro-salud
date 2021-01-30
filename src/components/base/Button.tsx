import React from 'react'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  label: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, ...props }) => {
  return (
    <div>
      <button onClick={onClick} {...props}>
        <label htmlFor={label}>{label}</label>
      </button>
    </div>
  )
}

export default Button
