import axios from 'axios'
import React from 'react'
import { useState,useEffect,useRef } from 'react'
import {useParams} from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import "../sass/Search.scss"

const Search = () => {

    const inputValueRef = useRef()

    const {term} = useParams()

    const [query,SetQuery] = useState(term)

    const findRecipe = (e) => {
        e.preventDefault()

        if(inputValueRef.current.value){
            SetQuery(inputValueRef.current.value)

            inputValueRef.current.value = ''
        }

    }

    const [recipes,setRecipes] = useState([])

    useEffect(() => {


        window.scrollTo(0,0)

        const getSearchRecipe = async () => {
            try{
                const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_WEATHER_API_KEY}&query=${query}`)
                setRecipes(data.data.results)

            }catch(e){
                console.log(e)
            }

        
        }

        getSearchRecipe()



    },[query])

  return (
    <div className='container search-page'>
        <form onSubmit={e => findRecipe(e)}>
        <label htmlFor="search-recipe">Find Your Recipe</label>
            <div>
                <input type="text" className='search-reciep' ref={inputValueRef} />
                <button type="submit" className='btn search-recipe-btn'>Search</button>
            </div>
        </form>
        <div className="search-container">
        {recipes ? recipes.map(recipe => <RecipeCard key={recipe.id} href={`../recipes/${recipe.id}`} title={recipe.title} img={recipe.image} id={recipe.id} />) : `We don't have recipe called ${query}`}
        </div>
    </div>
  )
}

export default Search