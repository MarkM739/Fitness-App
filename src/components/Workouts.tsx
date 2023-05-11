import { useState } from "react";

interface WorkoutsProps {
  exercises: string[];
  onSelect: (exercise: string) => void;
}

const Workouts = ({ exercises, onSelect }: WorkoutsProps) => {
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
  const [showWorkoutList, setShowWorkoutList] = useState(false);

  const handleAddExercise = () => {
    if (!selectedExercises.includes(onSelect)) {
      setSelectedExercises([...selectedExercises, onSelect]);
    }
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
        onChange={(e) => onSelect(e.target.value)}
      >
        {exercises.map((exercise) => (
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

export default Workouts;

