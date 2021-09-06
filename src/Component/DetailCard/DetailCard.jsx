import React from 'react'
import { PATH_IMAGEN } from '../../Global/KEY'
import './DetailCard.css'

const DetailCard = ({title, release_date, overview, vote_count, genres, poster_path}) => {

    let image ="";
    if ( poster_path ){
        image =`${PATH_IMAGEN}/w400${poster_path}`
    }

    return (
        <>
        <div className="row-detail">
        
            <div className="column-detail left-detail">
            <img src = {image} alt=""/>
              </div>

              <div className="column-detail right-detail">
              <h3 className="titleMgBotton">{title}</h3>
              <div className="release">{release_date}</div>
              <div className="release">Votos: {vote_count}</div>
              
              <div>

              <div className="release">
              <h4 className="titleBold genero">GÉNERO</h4>
                      {genres && genres.map((item) => {
                        return(
                            <span className="generoColor" key={item.id} >{item.name} / </span>
                        )
                      })} 
                </div>
              </div>
              <div className="release">
                  <h4 className="titleBold">VISTA GENERAL</h4>
                  {overview}
                  </div>
              <span>

              </span>
              </div>

        </div>
        </>
    )
}

export default DetailCard