import { createContext } from "react";


const SingleReipe = createContext()

export const SingleRecipeProvider = ({children}) => {
    const apiKey = process.env.REACT_APP_API_KEY

    return(
        <SingleReipe.Provider>
            {children}
        </SingleReipe.Provider>
    )

}