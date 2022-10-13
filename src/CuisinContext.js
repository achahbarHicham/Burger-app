import axios from "axios";
import { createContext,useState,useEffect } from "react";


const CuisinContext = createContext();

export function CuisinProvider({children}) {

    // const apiKey = process.env.REACT_APP_API_KEY
    const apiKey = "7c7f9c72e95a4120a028e5991bc005e3"

    const [cuisine,setCuisine] = useState('italian')
    const [recipes,setRecipes] = useState([])

    useEffect(() => {
        const getCuisineRecipes = async () => {
            const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisine}&number=20`)

            setRecipes(data.data.results)

        }
        getCuisineRecipes()

    },[cuisine])


    return(
      <CuisinContext.Provider value={{cuisine,setCuisine,recipes}}>
        {children}
      </CuisinContext.Provider>
    )

}


export default CuisinContext