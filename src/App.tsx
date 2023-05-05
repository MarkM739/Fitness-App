import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Workouts from './components/Workouts'
import Profile from './components/Profile'

function App() {
  const [selectedExercise, setSelectedExercise] = useState("");
  

  return (
    <div>
      <Workouts>exercises={exercises} onSelect={handleExerciseSelect}</Workouts>
      <Profile></Profile>
    </div>
  )
    
   
  
}


export default App
