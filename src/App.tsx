import { useState } from "react";
import './App.css'
import Workouts from './components/Workouts'
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


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
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/workouts" component={Workouts} />
      <Route path="/profile" component={Profile} />
  </div>
</Router>
    <div>
      <Workouts exercises={exercises} onSelect={handleExerciseSelect} selectedExercise={selectedExercise} />
      <Profile></Profile>
      <Navbar></Navbar>
    </div>
    </div>
    
  );
    
   
  
}


export default App;
