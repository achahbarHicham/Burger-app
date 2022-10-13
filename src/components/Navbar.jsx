import React from 'react'
import { NavLink,useNavigate,useMatch,Link } from "react-router-dom";
import '../sass/Navbar.scss'
import { useRef,useState } from 'react'
import Logo from '../images/logo-black.png'
import {BsFilterRight,BsSearch} from "react-icons/bs"

const  Navbar = () => {


   const searchClass =  useMatch("search/:term") ? "hide" : "show"

    const navigate = useNavigate()

    const [showNav,setShowNav] = useState(false)

    const searchInputRef = useRef()


    const searchRecipe = (e) => {
        e.preventDefault()
        

        if(searchInputRef.current.value){
            setShowNav(false)


            const term = searchInputRef.current.value

            navigate(`search/${term}`, { replace: true })
    
            searchInputRef.current.value = ''

        }


    }

    const showMenuNav = () => {
        if(showNav){
            setShowNav(false)
        }else{
            setShowNav(true);
        }
   }

  return (
    <header className='header container'>
        <div className='header__logo'>
            <Link to='/'>
            <img src={Logo} alt="" />
            </Link>
        </div>
        <nav className={`header__nav nav ${showNav ? "show" : "hide"}`}>
            <ul className={`nav__list ${searchClass ? 'flex-end' : 'flex-start'}`}>
                <li className='nav__item'>
                    <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                    }
                        onClick={() => setShowNav ? setShowNav(false) : null}>
                        home
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                    to="/cuisins"
                    className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                    }
                    onClick={() => setShowNav ? setShowNav(false) : null}
                        >
                        Cuisins
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                    to="/recipes"
                    className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                    }
                    onClick={() => setShowNav ? setShowNav(false) : null}
                        >
                        Recipes
                    </NavLink>
                </li>
                <li className='nav__item'>
                <NavLink
                    to="/diets"
                    className={({ isActive }) =>
                    isActive ? "nav__link active" : "nav__link"
                    }
                    onClick={() => setShowNav ? setShowNav(false) : null}
                        >
                        Diet
                    </NavLink>
                </li>
            </ul>
            <form className={`header-form ${searchClass}`} onSubmit={(e) => searchRecipe(e)} >
                    <input type="text" placeholder='Pasta...' ref={searchInputRef} />
                    <button type='submit'><BsSearch /></button>
            </form>
        </nav>
        <div className="menu-icon" onClick={showMenuNav}>
            <BsFilterRight className={showNav ? "color-white" : "color-black"} />
        </div>
    </header>
  )
}

export default Navbar