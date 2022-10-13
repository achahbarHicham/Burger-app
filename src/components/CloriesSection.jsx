import axios from 'axios'
import React,{useEffect,useState} from 'react'
import '@splidejs/react-splide/css';
import { Splide,SplideTrack, SplideSlide } from '@splidejs/react-splide';
import CalCard from './CalCard'
import "../sass/CalSection.scss"


const CloriesSection = () => {

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipeCalories()
    },[])

    const getRecipeCalories = async () => {
        const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&sort=calories&number=20`)
        
        setRecipes(data.data.results)
    }


  return (
    <div className='calories-section'>
        <div className="container">
        <h2>Recipe sort by calories</h2>
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
              <CalCard key={rec.id} 
              id={rec.id}
              title={rec.title} 
              img={rec.image} 
              calories={rec.nutrition.nutrients[0].amount} 
              />
          </SplideSlide>) : "LOADING"}
        </SplideTrack>

        
        <div className="splide__progress">
              <div className="splide__progress__bar" />
        </div>
      </Splide>
      </div>
    </div>
  )
}




export default CloriesSection