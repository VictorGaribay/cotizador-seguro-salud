import React from 'react'
interface SelectProps {
  formik: any
  name: string
  data: { value: string; text: string }[]
}

const Select: React.FC<SelectProps> = ({ formik, data, name }) => {
  return (
    <div>
      <select className="container__select--2" name={name} onChange={formik.handleChange}>
        <optgroup>
          {data &&
            data.map((data, index) => (
              <option key={index} value={data.value}>
                {data.text}
              </option>
            ))}
        </optgroup>
      </select>
    </div>
  )
}

export default Select
