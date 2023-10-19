import React from 'react'
import Header from './Header'
import Footer from './Footer'

function UserHomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <div style={{ flex: 1, height:"100vh" }}>
          hi
         

        </div>
        <Footer/>
    </div>
  )
}

export default UserHomePage