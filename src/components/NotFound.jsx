import React from 'react'
import {RiEmotionSadLine} from 'react-icons/ri'
import "../sass/NotFound.scss"

const NotFound = () => {
  return (
    <div className='container'>
      <div className="not-found">
        <div className="not-found__card">
          <div className="not-found__card--icon">
            <RiEmotionSadLine />
          </div>
          <h1 className='not-found__card--text'>404</h1>
        </div>
      </div>
    </div>
  )
}

export default NotFound