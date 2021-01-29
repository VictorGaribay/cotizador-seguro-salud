import { AppProps } from 'next/app'
import React from 'react'
import '../styles/scss/style.scss'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
