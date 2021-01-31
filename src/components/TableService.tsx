import React from 'react'
import { iconBlue, iconBlueB, textDecoration } from 'src/styles/styles'
import imgTop from '../../public/Illustration.png'
interface TableServiceProps {
  services: { status: boolean; icon: string; title: string }[]
}

const TableService: React.FC<TableServiceProps> = ({ services }) => {
  return (
    <div>
      <table className="tg">
        <colgroup>
          <col style={{ width: '240px' }} />
          <col style={{ width: '193px' }} />
        </colgroup>
        <thead>
          <tr>
            <th className="tg-4avg" colSpan={2}>
              Cuentas con estos beneficios
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0pky" rowSpan={3}>
              <p className="card__title">COBERTURA MÁXIMA</p>
              <>
                <b className="card__title--2">S/. 1MM</b>
              </>
              <p className="card__title--3">PLAN BÁSICO</p>
            </td>
            <td rowSpan={3}>
              <img src={imgTop} className="tg__img" />
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td className="tg-0pky" colSpan={2}>
              {services.map((service, index) => (
                <React.Fragment key={index}>
                  <p>
                    <b style={service.status ? iconBlue : iconBlueB}>{service.icon}</b>
                    <b style={service.status ? null : textDecoration}>{service.title}</b>
                  </p>
                </React.Fragment>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableService
