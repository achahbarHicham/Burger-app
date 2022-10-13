import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import "../sass/DietCard.scss"
import DietContext from '../DietContext';

const DietCard = ({img,title,text,btnText}) => {

  const {setDiet} = useContext(DietContext)

  const navigate = useNavigate()

  const recipeDiets = () => {

    setDiet(title)
    navigate("/diets",{ replace: true })

  }


  return (
    <div className='diet-card'>
        <div className="diet-card__img">
          <img src={img} alt={title} />
        </div>
        <div className="diet-card__content">
          <h3>{title}</h3>
          <p>{text}</p>
          <button className='btn btn-card' onClick={recipeDiets}>{btnText}</button>
        </div>
    </div>
  )
}

export default DietCard