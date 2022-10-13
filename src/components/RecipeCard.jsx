import React from 'react'
import { useNavigate,useHref,Link } from "react-router-dom";
import "../sass/RecipeCard.scss"

const RecipeCard = ({id,title,img,className,href,setId}) => {

  const textClass = className ? className : null



  let singleRecipeLink = ''


  if(window.location.pathname.includes('recipes')){
    singleRecipeLink = `${id}`
  }else if(window.location.pathname.includes('cuisins')){
    singleRecipeLink = `../recipes/${id}/`;

  }else{
    singleRecipeLink = `recipes/${id}`
  }





  return (
    
    <Link to={href ? href : singleRecipeLink} onClick={() => setId ? setId(id) : null}>
      <div className='recipe-card' 
      style={{
          backgroundImage:`url(${img})`
          }}
          >
          <h3 className={textClass}>{title}</h3>
      </div>
    </Link>
  )
}

export default RecipeCard