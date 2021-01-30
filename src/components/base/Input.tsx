import React from 'react'
interface InputProps {
  label: string
  name: string
  type: string
  icon?: React.ReactNode
  dataSelect?: { value: string; text: string }[]
  termForm?: string
  onChange?: () => void
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
    <label className="container__checkbox">
      <input type="checkbox" />
      <i>
        {label}
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          {termForm && termForm}
        </a>
      </i>
    </label>
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
      <div className={type === 'checkbox' ? 'container__terms' : 'container__floating'}>
        {dataSelect && selectTag}
        {icon || null}
        {type === 'checkbox' ? checkBox : input}
      </div>
    </>
  )
}

export default Input
