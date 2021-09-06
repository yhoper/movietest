import React, { useContext } from 'react'
import { VideoContext } from '../../Context/ProviderVideo'

const Video = () => {
    const { video } = useContext(VideoContext)
    const url = `https://www.youtube.com/embed/${video}`
    return (
        <iframe
            src= { url}
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; 
            autoplay; clipboard-write;
            encrypted-media; gyroscope; 
            picture-in-picture" 
            allowFullScreen> 
        </iframe>
    )
}

export default Video