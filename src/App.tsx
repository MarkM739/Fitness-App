import { useState } from "react";
import "./App.css";
import Workouts from "./components/Workouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routines from "./components/WorkoutRoutines";
import IndexPage from "./pages/index";
import { workoutLoader } from "./loaders/workoutLoader";
import BodyMeasurementsPage from "./pages/BodyMeasurementsPages";
import ProfilePage from "./pages/ProfilePage";
import Swap from "./components/Swap";



function App() {
//TODO Add typing
  //@ts-ignore
  const handleMeasurementsSubmit = (measurements: BodyMeasurements) => {
    // Handle the submitted measurements, e.g., send them to an API or update the app's state.
    console.log(measurements);
  };

  const [darkMode, setDarkMode] = useState(true)
  
  function toggleDarkMode () {
    setDarkMode(prevDarkMode => !prevDarkMode)
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
      errorElement: <div>This page doesn't exist</div>,
      children: [
        { path: "/profile/:userId", element: <ProfilePage /> },
        { path: "/workouts", element: <Workouts />, loader: workoutLoader },
        { path: "/measurements", element: <BodyMeasurementsPage /> },
        { path: "/routines", element: <Routines /> },
      ],
    },
  ]);


  return (
    <>
<RouterProvider router={router} />
<div className="flex justify-end">
 <Swap darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
 </div>
    </>
  );
}

export default App;
