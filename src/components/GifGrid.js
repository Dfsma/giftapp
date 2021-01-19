import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    


  
    const {data:imgs, loading} = useFetchGifs(category);

    
    

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>CARGANDO</p>}
           <div className='card-grid'>
                
                    {
                        imgs.map( img => (
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                                
                            />
                        ))
                    
                    }
                
            </div>

        </>
    )
}
