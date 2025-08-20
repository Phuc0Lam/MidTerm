
import React from 'react'
import './container.css'
const Container = (props) => {
  return (
    <div className='container' >
        <div className='tittle'>Explore</div>
        <div>What are you gonna watch today ?</div>
        
        
        <div className="content" >
          <img className='img-1' src={props.img} alt="" />
          
        </div>
        <div className='movie-name'>
          {props.moviename}
          <div className="description">{props.description}</div>
          </div>
          
    </div>
  )
}

export default Container