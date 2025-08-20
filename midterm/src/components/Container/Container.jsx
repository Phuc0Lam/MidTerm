
import React from 'react'
import './container.css'
const Container = (props) => {
  return (
    <div className='container' >
        <div className='tittle'>Explore</div>
        <div>What are you gonna watch today ?</div>
        <div>{props.moviename}</div>
        {/* <img src="public/image/img1.jpg" alt="" /> */}
        <div className="content" style={props.style} >
          
        </div>
    </div>
  )
}

export default Container