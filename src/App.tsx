import { useState } from "react";
import './App.css'
import Workouts from './components/Workouts'
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BodyMeasurementsForm from "./components/BodyMeasurementsForm";


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

  const handleMeasurementsSubmit = (measurements: BodyMeasurements) => {
    // Handle the submitted measurements, e.g., send them to an API or update the app's state.
    console.log(measurements);
  };

  

  return (

    <div>
      <Workouts exercises={exercises} onSelect={handleExerciseSelect} selectedExercise={selectedExercise} />
      <Profile></Profile>
      <Navbar></Navbar>
      <BodyMeasurementsForm onSubmit={handleMeasurementsSubmit} />
    
    </div>
    
    
  );
    
   
  
}


export default App;
