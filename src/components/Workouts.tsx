import React, { useState } from "react";

const exercises = [
    "Push-ups",
    "Sit-ups",
    "Squats",
    "Lunges",
    "Burpees",
    "Jumping jacks",
    "Plank",
    "Mountain climbers",
    "High knees",
    "Jump squats",
  ];

interface WorkoutsProps {
    exercise: string[];
    onSelect: (exercises)

}

export default Workouts;