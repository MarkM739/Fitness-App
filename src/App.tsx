import { useState } from "react";
import './App.css'
import Workouts from './components/Workouts'
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";


const exercises = [
  "Push-ups",
  "Sit-ups",
  "Squats",
  "Lunges",
  "Burpees",
];


function App() {
  const [selectedExercise, setSelectedExercise] = useState("");

  const handleExerciseSelect = (exercise: string) => {
    setSelectedExercise(exercise);
  };
  

  return (
    <div>
      <Workouts exercises={exercises} onSelect={handleExerciseSelect} selectedExercise={selectedExercise} />
      <Profile></Profile>
      <Navbar></Navbar>
    </div>
  )
    
   
  
}


export default App;
