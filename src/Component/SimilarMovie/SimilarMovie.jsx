import React from 'react'
import { PATH_IMAGEN } from '../../Global/KEY'
import './SimilarMovie.css'
const SimilarMovie = ({ idMovie, poster_path }) => {
   
    const imageUrl =`${PATH_IMAGEN}/w400${poster_path ? poster_path : null}`
    
    return (
            <>
                <img src= {imageUrl} className="imgSimilar" alt=""/>
            </>
    )
}
export default SimilarMovie