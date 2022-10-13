import React,{useContext} from 'react'
import {RiArrowDownSFill} from 'react-icons/ri'
import "../sass/Diets.scss"
import DietContext from '../DietContext'
import RecipeCard from '../components/RecipeCard'

const Diets = () => {

    window.scrollTo(0, 0)
    
    const {recipes,diet,setDiet} = useContext(DietContext)

    console.log(recipes)

    const changeDiet = (e) => {
        setDiet(e.target.value)
    }
    

  return (
    <div className='container'>
        <div className="diet-header">
            <label htmlFor="select-deit">Choose Your Diet</label>
            <div className="select-diet">
                <select className='diet-header--select' id="select-deit" onChange={(e) => changeDiet(e)}>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                    <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Pescetarian">Pescetarian</option>
                    <option value="Paleo">Paleo</option>
                    <option value="Primal">Primal</option>
                    <option value="Low FODMAP">Low FODMAP</option>
                    <option value="Whole30">Whole30</option>
                </select>
                <div className="select-icon"><RiArrowDownSFill /></div>
            </div>
        </div>

        <div className="recipe-diets">
        {
    recipes ? recipes.map(rec => <RecipeCard 
        href={`../recipes/${rec.id}`}
        key={rec.id}
        id={rec.id}
        title={rec.title}
        img={rec.image}
    /> ) : "LOADING"
}
        
        </div>

    </div>
  )
}

export default Diets