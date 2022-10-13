import React from 'react'
import "../sass/DietSection.scss"
import dietData from '../diet-data'
import DietCard from './DietCard'

const DietSection = () => {
  return (
    <div className='diet-section'>
        <div className="container">
            <h2>Diet Recipes</h2>
            <div className="diet-section__cards">
            {
                dietData.map((diet => <DietCard key={diet.id} {...diet} />))
            }
            </div>
        </div>
    </div>
  )
}

export default DietSection