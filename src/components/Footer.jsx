import React,{useState,useRef} from 'react'
import WhiteLogo from '../images/logo-white.png'
import { Link,useNavigate,useMatch } from 'react-router-dom'
import "../sass/Footer.scss"

const Footer = () => {

    const inputTextRef = useRef()


    const searchClass =  useMatch("search/:term") ? "hide" : "show"

    const navigate = useNavigate()

    const searchRecipe = (e) => {
        e.preventDefault()

        if(inputTextRef.current.value){

        const query = inputTextRef.current.value

        navigate(`search/${query}`, { replace: true })

        inputTextRef.current.value = ''

        }

    }

  return (
    <div className='footer'>
        <div className="container footer-container">
            <div className='footer-logo'>
                <img src={WhiteLogo} alt="React Recipe" />
            </div>
            <div className="footer-pages">
                <h4>Pages</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cuisins">Cuisins</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/diets">Diets</Link></li>
                </ul>
            </div>
            <form className={`footer-search ${searchClass}`} onSubmit={(e) => searchRecipe(e)}>
                <label htmlFor="footer-search">Search</label>
                    <div>
                        <input type="text" placeholder='pasta...' className='footer-search' id='footer-search' ref={inputTextRef} />
                        <button type='submit' className='footer-search--btn'>Find Recipe</button>
                    </div>
            </form>
            <div className="footer-copyright">
                <h4>CopyRight</h4>
                <p>Created by <strong>Achahbar hicham</strong></p>
            </div>
        </div>
    </div>
  )
}

export default Footer