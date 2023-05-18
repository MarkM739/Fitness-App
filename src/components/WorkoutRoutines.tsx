import React, { useState } from 'react';

interface WorkoutRoutinesProps {


}

const WorkoutRoutines: React.FC<WorkoutRoutinesProps> = () => {   
    const workoutRoutines = [
        {
            id: 1,
            name: 'Chest Routine 1',
            exercises: ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes'],
        }
    ]
    return (
        <div></div>
    )
}

export default WorkoutRoutines;