import React,{useContext} from 'react'
import "../sass/CuisinHero.scss"
import CuisinContext from '../CuisinContext'
import RecipeCard from './RecipeCard'


const CuisinHero = () => {

    const {cuisine,recipes} = useContext(CuisinContext)

  return (
    <div className='container'>
        <div className="cuisine-container">
            {
                recipes ? recipes.map(rec => <RecipeCard 
                    key={rec.id} 
                    id={rec.id}
                    title={rec.title} 
                    img={rec.image}
                    className="cuisine-text-card"
                     />) : "LOADING"
            }
        </div>
    </div>
  )
}

export default CuisinHero