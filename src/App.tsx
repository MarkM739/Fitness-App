import { useState } from "react";
import "./App.css";
import Workouts from "./components/Workouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routines from "./components/WorkoutRoutines";
import IndexPage from "./pages/index";
import { workoutLoader } from "./loaders/workoutLoader";
import BodyMeasurementsPage from "./pages/BodyMeasurementsPages";
import ProfilePage from "./pages/ProfilePage"



function App() {
  const [selectedExercise, setSelectedExercise] = useState("");

  const handleExerciseSelect = (exercise: string) => {
    setSelectedExercise(exercise);
  };

  //TODO Add typing
  //@ts-ignore
  const handleMeasurementsSubmit = (measurements: BodyMeasurements) => {
    // Handle the submitted measurements, e.g., send them to an API or update the app's state.
    console.log(measurements);
  };

  const router = createBrowserRouter([
    
        {path: "/",
        element: <IndexPage />,
        errorElement: <div>This page doesn't exist</div>,
        children: [
        
        {path: "/profile/:userId",
          element: <ProfilePage />,
        },
        
         {path: "/workouts",
          element: <Workouts/>,
          loader: workoutLoader
        },
          {path: "/measurements", 
        element: <BodyMeasurementsPage/> },

          {path: "/routines",
         element: <Routines /> },
      ],
    },
  ]);

  // /profile/:profileId => /profile/mark, /profile/bob

  return (
    <>
      <RouterProvider router={router} />
      {/* <div>
      <Workouts exercises={exercises} onSelect={handleExerciseSelect} selectedExercise={selectedExercise} />
      <Profile></Profile>
      <Navbar></Navbar>
      <BodyMeasurementsForm onSubmit={handleMeasurementsSubmit} />
      <Routines></Routines>
    </div> */}
    </>
  );
}



export default App;
