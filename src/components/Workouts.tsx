import { useState } from "react";
import { useLoaderData } from "react-router-dom";

interface WorkoutsProps {
  exercises?: string[];
  onSelect?: (exercise: string) => void; 
}

const Workouts = ({ exercises, onSelect }: WorkoutsProps) => {
  const exercises1 = useLoaderData() as string[];

  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
  const [showWorkoutList, setShowWorkoutList] = useState(false);

  const handleAddExercise = () => {
      //@ts-ignore
    if (selectedExercises.includes(onSelect)) { 
      //@ts-ignore
      setSelectedExercises([...selectedExercises, onSelect]); 
    }
  };
  const [selectedExercise, setSelectedExercise] = useState("");

  const handleExerciseSelect = (exercise: string) => {
    setSelectedExercise(exercise);
  
  };
  const handleShowWorkoutList = () => {
    setShowWorkoutList(!showWorkoutList);
  };

  return (
    <div>
      <label htmlFor="exercise-select">Select an Exercise</label>
      <select
        id="exercise-select"
        value={"" || selectedExercises}
        onChange={(e) => onSelect?.(e.target.value)}
      >
        {exercises1.map((exercise) => (
          <option key={exercise} value={exercise}>
            {exercise}
          </option>
        ))}
      </select>
      <button onClick={handleAddExercise}>Add Exercise</button>
      <button onClick={handleShowWorkoutList}>Show Workout List</button>
      {showWorkoutList && (
        <div>
          <h2>Todays Workout</h2>
          <ul>
            {selectedExercises.map((exercise) => (
              <li key={exercise}>{exercise}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

return (
  <div className="dropdown">
    <button className="dropdown-button">Open Dropdown</button>
    <div className="dropdown-menu">
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  </div>
);
};

export default DropdownMenu;


export default Workouts;



