import  {HOST, KEY } from './KEY'
import axios from 'axios';

export const getMovies = async(page=1) => {
  const url = `${HOST}/movie/popular?api_key=${KEY}&page=${page}&language=es-ES`;
  try {
    const data = await axios.get(url);
    console.log(data)
       return data
    } catch (error) {
      console.log(error)
  }
}
  
export const getMovieById = async(id) => {
  const url = `${HOST}/movie/${id}?api_key=${KEY}&language=es-ES`;
  try {
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.log(error)
  }
}
  
export const getVideoById = async(idmovie) => {
  const url = `${HOST}/movie/${idmovie}/videos?api_key=${KEY}`;
  try {
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.log(error)
  }
}
  
export const getSearchMovie = async(search) => {
  const url = `${HOST}/search/movie?api_key=${KEY}&query=${search}&language=es-ES`
  try {
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.log(error)
  }
}
  
export const  getSimilarMovies = async(idMovie) => {
  const url = `${HOST}/movie/${idMovie}/similar?api_key=${KEY}&language=es-EN`;
  try {
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.log(error)
  }
}
  