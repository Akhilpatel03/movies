import React, { useState } from 'react'
import {Link, Route,Routes, useNavigate } from 'react-router-dom'
import Homepage from './Homepage'
import Topratedpage from './Topratedpage'
import Upcoming from './Upcoming'
import Singlemovie from './singlemovie'
import Searched from './Searched'



const Ui = () => {
  const[query,setQuery]=useState('')
  const navigate=useNavigate()

  const handlesearch=(e)=>{
    e.preventDefault()
    if(query){
      navigate(`/searched/${query}`)
    }
  }

  const handlechange=(e)=>{
    const inputvalue=e.target.value
    setQuery(inputvalue)
  }
  return (
    <div className='nav'>
        <nav className='nav-bar'>
          <h3>MovieDb</h3>
          <div className='nav-item'>
              <Link to='/' className='nav-list'>Popular</Link>
              <Link to='/Topratedpage' className='nav-list'>Top Rated</Link>
              <Link to='/Upcoming' className='nav-list'>Upcoming movie</Link>
              <form onSubmit={handlesearch}>
                  <input type='text'  placeholder='Movie name' value={query} onChange={handlechange}/>
                  <button type='submit'>Search</button>
              </form>
          </div>
              
        </nav>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/Topratedpage' element={<Topratedpage/>}></Route>
          <Route path='/Upcoming' element={<Upcoming/>}></Route>
          <Route path='/movie/:id' element={<Singlemovie/>}></Route>
          <Route path='/Searched/:query' element={<Searched/>}></Route>
        </Routes>
    </div>
  )
}

export default Ui
