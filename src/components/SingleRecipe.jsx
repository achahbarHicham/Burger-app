import axios from 'axios'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleHero from './SingleHero'
import "../sass/SingleRecipe.scss"
import SimilarRecipes from './SimilarRecipes'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const SingleRecipe = () => {

    const mainWindow = window

    const [recipe,setRecipe] = useState({})

    const recipeId = useParams().id

    const [id,setId] = useState(recipeId)


    useEffect(() => {

        mainWindow.scrollTo(0, 0)

      const getSinleRecipe = async () => {
        const data = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_WEATHER_API_KEY}`)

        setRecipe(data.data)

      }

      getSinleRecipe()

    },[id])



  return (
    <div className='container'>
        <SingleHero 
        title={recipe.title} 
        image={recipe.image}
        />
        <h3 className='single-title-text'>instructions</h3>
        <div className='instruction-text' dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
        <h3 className='single-title-text'>summary</h3>
        <p className='summary-text' dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
        <div className="btn-container">
         <a target="_blank" className='btn-single' href={recipe.sourceUrl}>Read More {<HiOutlineArrowNarrowRight />}</a>
        </div>
        
        <div className='similar-recipe'>
        <h3 className='single-title-text'>Other Recipes</h3>
            <SimilarRecipes id={id} setId={setId} />
        </div>
    </div>
  )
}

export default SingleRecipe