import React from 'react'
import ContainerContent from 'src/components/ContainerContent'
import ContainerForm from 'src/components/ContainerForm'
import illustration from '../assets/Illustration-1.png'
import { dataSelect, listItem, termForm, titleContent, titleForm } from '../helpers/ContentHelper'

const Home: React.FC = () => {
  return (
    <div className="container">
      <ContainerContent listItem={listItem} titleContent={titleContent} />
      <div className="container__illustration">
        <img src={illustration} alt="items" />
      </div>
      <ContainerForm titleForm={titleForm} termForm={termForm} dataSelect={dataSelect} />
    </div>
  )
}

export default Home
