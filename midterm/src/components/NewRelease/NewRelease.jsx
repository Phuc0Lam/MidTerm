import React from 'react'
import './NewRelease.css'
const NewRelease = (props) => {
  return (
    <div>
        <div className="tittle">
            NewRelease
        </div>
        <div className="container-movie">
            {
                props.data.map((item) => {
                    return(
                        <div className='frame'>
                            
                            <img src={item.image} alt="" />
                            <div className="info">
                                <div>Episode: {item.episode}</div>
                                <div>{item.movieName}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NewRelease