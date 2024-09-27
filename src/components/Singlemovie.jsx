import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Singlemovie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        const result = await response.json()
        setMovie(result)

        const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        const castResult = await castResponse.json()
        setCast(castResult.cast)
      } catch (error) {
        console.error('Error fetching singlemovie', error)
      }
    }

    fetchSingle()
  }, [id])

  if (!movie) return <p>wait for a moment</p>

  return (
    <div className='movieworld'>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
      <p>{movie.overview}</p>
      <h2>Cast</h2>
      
      <div className='cine'>
        {cast.map((act) => (
          <div key={act.cast_id} className='clip'>
            {act.profile_path ? (<img src={`https://image.tmdb.org/t/p/w200${act.profile_path}`} alt={act.name}/>)
            : 
            (<img src="https://via.placeholder.com/200x300?text=No+Image" alt={act.name}/>)
            }
            <h3>{act.name}</h3> 
            <p>as {act.character}</p>
          </div>
        ))}
      </div>
     
    </div>
  )
}

export default Singlemovie 

