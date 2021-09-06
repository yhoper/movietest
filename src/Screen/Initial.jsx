import React, { useState, useContext } from 'react'
import CardMovie from '../Component/CardMovie'
import MovieSearchButton from '../Component/MovieSearchButton/SearchButton'
import { MovieContext } from '../Context/ProviderMovie'
import ScreenMovieDetail from './MovieDetail/ScreenMovieDetail';

const Initial = (props) => {
    
    const { movies, setPage } = useContext(MovieContext)
    const [showHideDetail, setShowHideDetail]=useState("false")
    const [idMovieDetail, setidMovieDetail]=useState('')
    console.log(props)
    
    const showDetail=(e)=>{
        setShowHideDetail(e);
    }
    console.log(movies)
    return (
        <>
        <div className = {showHideDetail==="false"? "column border left_initial": "column border left"}>
        <MovieSearchButton/>
        <div className = "containerImage">
        <div>
        <div className="cards">
        {   movies.map((item) => {
            let { id,title,poster_path, release_date }= item;
            
            return (
                <span key={id}>
                <CardMovie 
                id={id}
                title={title} 
                poster_path={poster_path}
                release_date={release_date}
                detailStatus={e=>showDetail(e)}
                moveiId={e=>setidMovieDetail(e)}

                />
                </span>
                )
                
            })  
        }  
        </div>
        </div>
        
        </div>
        
        </div>
        <div>
        { showHideDetail === "false" ? "":<div className="column border right">
              <ScreenMovieDetail idmov={idMovieDetail}/>
            </div> }
        </div>
        </>
        )
        
    }
    
    export default Initial