import React, { useState, useContext, useEffect } from 'react'
import { DetailsContext } from '../../Context/ProviderDetail';
import { VideoContext } from '../../Context/ProviderVideo';
import DetailCard from '../../Component/DetailCard/DetailCard';
import SimilarMovie from '../../Component/SimilarMovie/SimilarMovie';
import { getMovieById } from '../../Global/API';
import Video from '../../Component/Video/Video';
import './ScreenMovieDetail.css'

const ScreenMovieDetail = (idmov) => {
    
    let id  = idmov.idmov;
    const {  setIdv } = useContext(VideoContext)
    const { setId, similar } = useContext(DetailsContext)
    const [ movie, setMovie ] = useState([])
    
    const { title, release_date, overview, vote_count, genres, poster_path } = movie;
    
    useEffect(() => {
        getMovieById(id).then((res) => {
            setMovie(res.data)
            setId(id)
            setIdv(id)
        });  
    }, [id])
    
    return (
        
        <div className = "containerPrincipal">
        <DetailCard
        title = {title}
        release_date = {release_date}
        overview = {overview} 
        vote_count = {vote_count}
        genres = {genres}
        poster_path = {poster_path}
        />
        <h4 className="titleBold">VISTA GENERAL</h4>
        <Video />
        { similar ? 
            <>
            <div className = "release">
            <h4 className="titleBold">SIMILARES</h4>
            </div>
            <div className="containerSimilar" >
            
            {   
                similar.slice(0, 3).map((item) => {
                    
                    const {id,title,poster_path, release_date} = item;
                    
                    return (
                        <span key={id} >
                        <SimilarMovie
                        idMovie={id} 
                        title={title} 
                        poster_path={poster_path}
                        release_date={release_date}
                        />
                        </span>
                        
                        )
                    })  
                } 
                </div> 
                </>  
                : null }
                
                </div>
                
                )
            }
            
            export default ScreenMovieDetail