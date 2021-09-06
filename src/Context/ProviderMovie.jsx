import React, { useEffect, useState, createContext } from 'react'
import { getMovies, getSearchMovie } from '../Global/API'

export const MovieContext = createContext()

const ProviderMovie = ( { children }) => {

    const [ movies, setMovies ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ search, setSearch ] = useState(null);
    
    useEffect(() => {
        getMovies(page).then((res) => {
            setMovies(res.data.results) 
        })
    },[page])

    useEffect(() => {
        if(search != null){
            getSearchMovie(search).then((res) => {
                if (res){
                    if(res.data.results){
                    setMovies(res.data.results);   
                }}
            });
        }   
    }, [search]);

    return (
        <MovieContext.Provider
            value = {{
                movies,
                setMovies,
                page,
                setPage,
                search, 
                setSearch
            }}
        >
            { children }
        </MovieContext.Provider>
    )
}

export default ProviderMovie