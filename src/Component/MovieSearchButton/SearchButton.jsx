import React, { useContext } from 'react'
import { MovieContext } from '../../Context/ProviderMovie'
import './SearchButton.css'


const MovieSearchButton = () => {
    
    const { setSearch } = useContext(MovieContext)
    
    const handleInputOnchange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    
    return ( 
        <input 
        className="inputSearch border"
        placeholder = "Buscar película" 
        onChange = { handleInputOnchange } 
        />
        )
    }
    
    export default MovieSearchButton