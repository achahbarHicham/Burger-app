import React from 'react'

import "../sass/SingleHero.scss"

const SingleHero = ({title,image}) => {
  return (
    <div className='single-hero'>
        <div className="single-hero__img">
            <img src={image} alt={title}  />
        </div>
        <div className="single-hero__content">
            <h1 className='title-single'>{title}</h1>       
        </div>
    </div>
  )
}

export default SingleHero