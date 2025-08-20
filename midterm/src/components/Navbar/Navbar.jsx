import React from 'react'   
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='menu'>
      <div className='logo'>Anonime</div>
      <div className="home">Home</div>
      <div className="listAnime">List anime</div>
      <div className="search1"><input className='search' type="text" placeholder='Search anime or movie'/></div>
    </div>
  )
}

export default Navbar