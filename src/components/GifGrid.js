import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
  
  // const [images, setImages] = useState([])
  const { data:images, loading} = useFetchGifs(category);
 

  // useEffect(() => {
  //   getGif(category).then(setImages) // aqui automaticamente le carga el argmento desde la promesa que retorna getGifs
  // },[category] )  
  
  

 //console.log(`soy images ${typeof images}`)
 //console.log(`es aqui: ${images}`)


  return (
    <>
      <h3>{category}</h3>

      { loading && <p>Loading...</p> }
      
      <div className="card-grid">   
            
        {
          images.map( img => (
            <GifGridItem 
              key={img.id} 
              datos={img}  /> )) // se puede enviar de una vez desestruturado asi {...img}
        }
        
      </div>    
   </>
  )
}

