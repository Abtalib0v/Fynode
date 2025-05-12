import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='rounded-t-[56px]'>
    <Header />
    <main>{children}</main>
    <Footer/>
    </div>
    
  )
}

export default Layout