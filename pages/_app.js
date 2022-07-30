import '../styles/globals.css'
import Menu from '../components/Menu'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
  <div>
  <Menu/>
  <Component {...pageProps} />
  </div>)
}

export default MyApp
