import React,{useContext} from 'react'
import CuisinContext from '../CuisinContext'
import "../sass/CuisineCard.scss"

const CuisinCard = ({children}) => {

  const cuisin = children[1]

  const {cuisine,setCuisine} = useContext(CuisinContext)

  const activeCuisine = cuisine.toLowerCase() === children[1].toLowerCase() ? "active": '';

  const changeCuisine = () => {
    setCuisine(cuisin)
    }


  return (
    <div className={`card ${activeCuisine}`} onClick={changeCuisine}>
        <div className="card__img">
            {children[0]}
        </div>
        <div className="card__text">
            <h4>{children[1]}</h4>
        </div>
    </div>
  )
}

export default CuisinCard