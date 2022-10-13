import axios from "axios";
import { createContext,useEffect,useState } from "react";

const DietContext = createContext()

export const DietProvider = ({children}) => {
    const apiKey = "7c7f9c72e95a4120a028e5991bc005e3"

    const [diet,setDiet] = useState('')
    
    const [recipes,setRecipes] = useState([])
    
    useEffect(() => {

        const getDietRecipes = async () => {
            const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${diet}&number=15`)

            setRecipes(data.data.results)

        }

        getDietRecipes()

    },[diet])



    return(
        <DietContext.Provider value={{diet,setDiet,recipes}}>
          {children}
        </DietContext.Provider>
      )

}

export default DietContext