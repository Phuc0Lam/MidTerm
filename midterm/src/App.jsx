import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container'
function App() {
  const style1={ 
    backgroundImage: 'url(/public/image/img1.jpg)',
  }

  return (
    <>
      <Navbar />
      <Container style={style1} moviename={"lo"} />
    </>
  )
}

export default App
