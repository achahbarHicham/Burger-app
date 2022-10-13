import React from 'react'
import CuisinCard from './CuisinCard'
import cuisinData from '../cuisin-data'
import "../sass/CuisinSection.scss"

const CuisinsPage = () => {

  return (
    <div className='cuisin-section container'>
        <h2>Popular Cuisins</h2>
        <div className='cuisin-section__cards'>
        {
            cuisinData.map(cuisin => {
                return <CuisinCard key={cuisin.id}>
                    {cuisin.icon}
                    {cuisin.cuisin}
                </CuisinCard>
            })
        }
        </div>
    </div>
  )
}

export default CuisinsPage