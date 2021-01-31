import React, { useState } from 'react'
import ContainerContent from 'src/components/ContainerContent'
import ContainerForm from 'src/components/ContainerForm'
import ContainerFormRegister from 'src/components/ContainerFormRegister'
import illustration from '../assets/Illustration-1.png'
import { listItem, titleContent } from '../helpers/ContentHelper'

const Home: React.FC = () => {
  const [useData, setUseData] = useState('')
  return (
    <div className="container">
      <ContainerContent listItem={listItem} titleContent={titleContent} />
      <div className="container__illustration">
        <img src={illustration} alt="items" />
      </div>
      <ContainerForm />
      {useData && <ContainerFormRegister />}
    </div>
  )
}

export default Home
