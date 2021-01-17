import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    //const [images, setImages] = useState([]);

    //useEffect( () => {
    //    getGifs( category )
    //        .then( setImages );
    //}, [ category ])

    const { data, loading} = useFetchGifs();

    console.log(data);
    console.log(loading);
    

    return (
        <>
            <h3>{ category }</h3>
            {/*<div className='card-grid'>
                
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                                
                            />
                        ))
                    
                    }
                
            </div>
            */}
        </>
    )
}
