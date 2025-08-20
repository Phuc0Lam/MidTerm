import React from 'react'
import './NewRelease.css'

const NewRelease = (props) => {
  return (
    <div>
      <div className="tittle">NewRelease</div>
      <div className="container-movie">
        {props.data.map((item) => (
          <div
            key={item.id}
            className="frame"
            onClick={() => props.onFrameClick(item.id)}
          >
            <img src={item.image} alt={item.movieName} />
            <div className="info">
              <div>Episode: {item.episode}</div>
              <div>{item.movieName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewRelease