import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContainerContent from 'src/components/ContainerContent'
import ContainerForm from 'src/components/ContainerForm'
import ContainerFormRegister from 'src/components/ContainerFormRegister'
import ContainerPlan from 'src/components/ContainerPlan'
import EndPage from 'src/components/EndPage'
import illustration from '../../public/Illustration-1.png'
import { listItem, titleContent } from '../helpers/ContentHelper'

const Home: React.FC = () => {
  const [signData, setSignData] = useState({ document: '', birthday: '', phone: '' })
  const [useData, setUseData] = useState({
    data: { name: { title: '', first: '', last: '' }, gender: '' },
    signData: signData
  })
  const [page, setPage] = useState<number>(0)
  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}`)
      const { results } = response.data
      setUseData({ ...useData, data: results[0], signData: signData })
      setPage(1)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    console.log(JSON.stringify(useData, null, 2))
  }, [useData, signData])

  return (
    <div className="container">
      <ContainerContent listItem={listItem} titleContent={titleContent} />
      <div className="container__illustration">
        <img src={illustration} alt="items" />
      </div>
      {page === 1 ? (
        <ContainerFormRegister page={page} setPage={setPage} signData={signData} useData={useData} />
      ) : page === 2 ? (
        <ContainerPlan page={page} setPage={setPage} />
      ) : page === 3 ? (
        <EndPage />
      ) : (
        <ContainerForm getUser={getUser} setData={setSignData} />
      )}
    </div>
  )
}

export default Home
