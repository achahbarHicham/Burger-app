import React from 'react'
import { useNavigate } from "react-router-dom";
import '../sass/CalCard.scss'

const CalCard = ({id,img,title,calories}) => {

  const navigate = useNavigate()

  const toSingleRcipe = () => {
    navigate(`recipes/${id}`, { replace: true });
  }

  return (
    <div className='cal-card'>
        <div className="cal-card__img" style={{backgroundImage:`url(${img})`}}></div>
        <div className="cal-card__content">
            <h4 onClick={toSingleRcipe}>{title}</h4>
            <p><strong>Calories: </strong>{calories}</p>
        </div>
    </div>
  )
}

export default CalCard