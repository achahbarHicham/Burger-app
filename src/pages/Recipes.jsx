import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Outlet,useParams,useMatch,useResolvedPath } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import "../sass/RecipePage.scss"

const Recipes = () => {

    window.scrollTo(0,0)

    const [recipes,setRecipes] = useState([])

    const mainPath = "/recipes"
    const pathName = window.location.pathname




    useEffect(() => {

        const getRandomRecipes = async () => {
            const data = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_WEATHER_API_KEY}&number=20`)

        setRecipes(data.data.recipes)

        }
            getRandomRecipes()

    },[])

    if(pathName !== mainPath){
        return(
            <div className="container">
                <Outlet />
            </div>
        )
    }else{
     return(
        <div className="container">
        <div className="recipe-container">
        {    recipes.map(recipe => <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} img={recipe.image} /> )}
            </div>
        </div>
     )
    }
}

export default Recipes