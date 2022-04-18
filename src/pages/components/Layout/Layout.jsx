import React from 'react'
import Footer from '../Footer/Footer'
import HeaderVariant from '../Header-variant/HeaderVariant'
import Main from '../Main/Main'
import './Layout.scss'


export default function Layout({ children }) {
  return (
    <>
      <HeaderVariant />
      <Main />
      {children}
      <Footer />
    </>
  )
}
