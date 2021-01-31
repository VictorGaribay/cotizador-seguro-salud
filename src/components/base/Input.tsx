import React from 'react'
interface InputProps {
  label: string
  name: string
  type: string
  icon?: React.ReactNode
  dataSelect?: { value: string; text: string }[]
  termForm?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const Input: React.FC<InputProps> = ({ name, type, label, icon, dataSelect, termForm, ...props }) => {
  const selectTag = (
    <select className="container__select" id="document" name="document">
      <optgroup>
        {dataSelect &&
          dataSelect.map((data, index) => (
            <option key={index} value={data.value}>
              {data.text}
            </option>
          ))}
      </optgroup>
    </select>
  )
  const checkBox = (
    <label className={name === 'term1' ? 'container__checkbox' : 'container__checkbox--2'}>
      <input type="checkbox" />
      <i>
        {label}
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          {termForm && termForm}
        </a>
      </i>
    </label>
  )

  const radioButton = (
    <div>
      <label>
        <input type="radio" id={name} name={name} />
        <i className="container__radio">{label}</i>
      </label>
    </div>
  )

  const input = (
    <>
      <input
        className={dataSelect && 'container__input--2'}
        name={name}
        type={type}
        autoComplete="off"
        required
        {...props}
      />
      <label className={dataSelect ? 'container__floating--label1' : 'container__floating--label'}>{label}</label>
    </>
  )
  return (
    <>
      <div className={type === 'checkbox' ? '' : type === 'radio' ? '' : 'container__floating'}>
        {dataSelect && selectTag}
        {icon || null}
        {type === 'checkbox' ? checkBox : type === 'radio' ? radioButton : input}
      </div>
    </>
  )
}

export default Input
