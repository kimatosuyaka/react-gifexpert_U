import React from 'react'

export const GifGridItem = ({datos}) => {
  const {title, url} = datos;
  
  //console.log(datos)
  
  return (
    <>
      <div className="card animate__animated animate__bounce animate__delay-2s"> 
          <img src={url} alt= {title}/>
          <p>{title}</p>
      </div>
      
    </>
  )
}
