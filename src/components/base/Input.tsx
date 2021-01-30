import React from 'react'
interface InputProps {
  label: string
  name: string
  type: string
  icon?: React.ReactNode
  dataSelect?: { value: string; text: string }[]
  seePassword?: boolean
}

const Input: React.FC<InputProps> = ({ name, type, label, icon, dataSelect, ...props }) => {
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
  return (
    <>
      <div className="container__floating">
        {dataSelect && selectTag}
        {icon || null}
        <input
          className={dataSelect && 'container__input--2'}
          name={name}
          type={type}
          autoComplete="off"
          required
          {...props}
        />
        <label className={dataSelect ? 'container__floating--label1' : 'container__floating--label'}>{label}</label>
      </div>
    </>
  )
}

export default Input
