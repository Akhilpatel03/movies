import { useState } from 'react'

import './App.css'
import Ui from './components/Ui'
import { BrowserRouter as Router} from 'react-router-dom'
function App() {
 

  return (
    <Router>
      <Ui/>
    </Router>
  )
}

export default App
