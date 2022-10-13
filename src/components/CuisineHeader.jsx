import React,{useContext} from 'react'
import cuisinData from '../cuisin-data'
import CuisinCard from './CuisinCard'
import "../sass/Cuisine-header.scss"
import CuisinContext from '../CuisinContext'

const CuisineHeader = () => {

    const {cuisine} = useContext(CuisinContext)

  return (
    <div className='container'>
        <div className="cuisine-header">
        <h2>Papular <strong>{cuisine}</strong> recipes</h2>
            <div className="cuisine-header__container">
                {cuisinData.map(cuisine => {
                   return <CuisinCard key={cuisine.id}>
                    {cuisine.icon}
                    {cuisine.cuisin}
                </CuisinCard>
                })}
            </div>
            
        </div>
    </div>
  )
}

export default CuisineHeader