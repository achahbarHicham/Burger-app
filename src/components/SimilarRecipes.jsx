import {useEffect,useState} from 'react'
import '@splidejs/react-splide/css';
import { Splide,SplideTrack, SplideSlide } from '@splidejs/react-splide';
import RecipeCard from './RecipeCard';
import axios from 'axios';

const SimilarRecipes = ({id,setId}) => {
    const [recipes,setRecipes] = useState([])
    useEffect(() => {

        const getSimilarRecipes = async () => {
            const data = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_WEATHER_API_KEY}&number=20`)

            setRecipes(data.data.recipes)

        }

        getSimilarRecipes()
    },[])


  return (
    <div>
        
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
              <RecipeCard id={rec.id} key={rec.id} title={rec.title} img={rec.image} href={`../recipes/${id}`} setId={setId} />
          </SplideSlide>) : "LOADING"}
        </SplideTrack>

        
        <div className="splide__progress">
              <div className="splide__progress__bar" />
        </div>
      </Splide>
    </div>
  )
}

export default SimilarRecipes