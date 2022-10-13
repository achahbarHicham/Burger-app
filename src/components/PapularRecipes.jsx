import axios from 'axios'
import React,{useEffect,useState} from 'react'
import '@splidejs/react-splide/css';
import { Splide,SplideTrack, SplideSlide } from '@splidejs/react-splide';
import "../sass/PapularRecipes.scss"
import RecipeCard from './RecipeCard';

const PapularRecipes = () => {

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY

  const [recipes,setRecipes] = useState([])

    useEffect(() => {
        const mainData = {
            number:10
        }
        const fetchData = async () => {
            const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)

            setRecipes(res.data.recipes)

        }

        fetchData();
    },[])



  return (
    <div className='popular-section container'>
        <h2>Papular Recipes</h2>
      <Splide tag='section' className='my-carusel'
      hasTrack={false}
      
      options={ {
        type:"loop",
        // autoplay: true,
        breakpoints:true,
        rewind: true,
        perPage:3,
        width: "100%",
        easing:"cubic-bezier(0.25, 1, 0.5, 1)",
        gap:"1rem",
        arrows:false,
        drag:true,
        pagination:true,
        updateOnMove : true,
        breakpoints: {
          1024: {
            perPage: 2,
           
          },
          640: {
            perPage: 1,
      
          }
        }
      } }
      >
        <SplideTrack>
          {recipes ? recipes.map(rec => <SplideSlide key={rec.id}>
              <RecipeCard id={rec.id} key={rec.id} title={rec.title} img={rec.image} />
          </SplideSlide>) : "LOADING"}
        </SplideTrack>

        
        <div className="splide__progress">
              <div className="splide__progress__bar" />
        </div>
      </Splide>
    </div>
  )
}

export default PapularRecipes