import React,{ useState, useEffect, createContext } from 'react'
import { getSimilarMovies } from '../Global/API';

export const DetailsContext = createContext();

const ProviderDetail = ({children}) => {

    const [similar, setSimilar] = useState([])
    const [id, setId] = useState(null)

    useEffect(() => {
        if(id !== null){
            getSimilarMovies(id).then((res) => {
                setSimilar(res.data.results);
            });
        }
    }, [id])
  
    return (
        <DetailsContext.Provider
            value={{
                id,
                setId,
                similar,
                setSimilar
            }}
        >
            {children}
        </DetailsContext.Provider>
    )
}

export default ProviderDetail