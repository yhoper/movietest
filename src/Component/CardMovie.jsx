import React from 'react'
import { PATH_IMAGEN } from '../Global/KEY'

const CardMovie = ({id, poster_path, detailStatus, moveiId}) => {

    const image =`${PATH_IMAGEN}/w400${poster_path}`
    const showDetail = (id) => {
        console.log(id);
        detailStatus("true")
        moveiId(id)
      };

    return (
       <>
        <img src = { image } alt={`Img_${id}`} onClick={(e)=>showDetail(id)}/>
            </>
    )
}

export default CardMovie