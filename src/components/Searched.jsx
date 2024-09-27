import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Searched = () => {
  const { query } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`)
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Error in fetching searched', error)
      }
    }

    fetchSearch()
  }, [query])

  return (
    <div>
      <h1>Search Results for {query}</h1>
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
export default Searched
