import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TopratedPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Error in fetching Toprated movies', error)
      }
    }

    fetchTop()
  }, [])

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className='cine'>
        {movies.map((movie) => (
          <div key={movie.id} className='clip'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopratedPage

