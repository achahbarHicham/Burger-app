import React from 'react'

import "../sass/Hero.scss"
import Burger from '../images/burger-img.png'
import Plate from '../images/plate-hero.png'
import Pizza from '../images/pizza.png'
import SaladFruits from '../images/salad-fruits.png'
import {FaPizzaSlice,FaHamburger} from "react-icons/fa"

const Hero = () => {
  // const searchClass =  useMatch("search/:term") ? "hide" : "show"

  return (
    <main className='hero container'>
        <div className="hero__img">
            <div className="hero__img--img">
                <div className='burger-img'><img src={Burger} alt="Burger" /></div>
                <div className='plate-img'><img  src={Plate} alt="Plate" /></div>
                <div className='pizza-img'><img src={Pizza} alt="Pizza" /></div>
                <div className='salad-img'><img src={SaladFruits} alt="Fruits Salad" /></div>
            </div>
        </div>
        <div className="hero__content">
            <h1>discover all recipes in the world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            <button className='btn btn-hero'>Recipes</button>
        </div>
    </main>
  )
}

export default Hero