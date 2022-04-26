import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

/**useEffect te permite ejecutar codigo de manera condicional */

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category );


  // useEffect( () => {
  //   getGifs( category )
  //     .then( imgs => setImages( imgs ) )
  //     /* .then( setImages ) Esta es la misma forma del primer .then pero mas abreviada, ya que en este caso la misma variable que se esta recibiendo es la misma que se esta pasando, entonces acortas solo llamando la funcion y el valor que esa funcion necesita se pasa por default.*/
  // }, [ category ])

  return (
    <>
      <h3 className='animate__animated animate__fadeInDown' > {category} </h3>

      {loading && <p className=' animate__animated animate__flash'>Loading</p>}


      <div className='card-grid'>
            {
              images.map( img => ( 
                <GifGridItem 
                  key={img.id}
                  {...img}
                />
              ))
            }
      </div>
    </>
  )
}

export default GifGrid