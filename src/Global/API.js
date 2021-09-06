import  {API_HOST, API_KEY } from './key'
import axios from 'axios';

export const getMovies = async(page=1) => {
  const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&page=${page}&language=es-ES`;
  try {
    const data = await axios.get(url);
    console.log(data)
       return data
    } catch (error) {
      console.log(error)
  }
}
  
export const getMovieById = async(id) => {
  const url = `${API_HOST}/movie/${id}?api_key=${API_KEY}&language=es-ES`;
  try {
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.log(error)
  }
}
  
export const getVideoById = async(idmovie) => {
  const url = `${API_HOST}/movie/${idmovie}/videos?api_key=${API_KEY}`;
  try {
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.log(error)
  }
}
  
export const searchMovie = async(search) => {
  const url = `${API_HOST}/search/movie?api_key=${API_KEY}&query=${search}&language=es-ES`
  try {
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.log(error)
  }
}
  
export const  getSimilarMovies = async(idMovie) => {
  const url = `${API_HOST}/movie/${idMovie}/similar?api_key=${API_KEY}&language=es-EN`;
  try {
    const data = await axios.get(url);
    return data
  } catch (error) {
    console.log(error)
  }
}
  