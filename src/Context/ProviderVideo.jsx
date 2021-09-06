import React,{ useState, createContext, useEffect } from 'react'
import { getVideoById } from '../Global/API';

export const VideoContext = createContext();

const ProviderVideo = ({ children }) => {
    
    const [video, setVideo] = useState([])
    const [idv, setIdv] = useState(null)
    
    useEffect(() => {
        if(idv !== null){
            getVideoById(idv).then((res)=>{
                console.log(res.data)
                let idv=null;
                if(res.data.results){
                    res.data.results.map((video)=>{
                        
                        if(video.site==='YouTube' && !idv){
                            idv = video.key;
                        }
                        setVideo(idv)
                    })
                }
            })
        }
    }, [idv])
 
    return (
        <VideoContext.Provider
            value={{
                video,
                setVideo,
                idv,
                setIdv,
            }}
        >
            { children }
        </VideoContext.Provider>
    )
}
export default ProviderVideo