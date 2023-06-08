import Workouts from "./components/Workouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routines from "./components/WorkoutRoutines";
import IndexPage from "./pages/index";
import { workoutLoader } from "./loaders/workoutLoader";
import BodyMeasurementsPage from "./pages/BodyMeasurementsPages";
import ProfilePage from "./pages/ProfilePage";
import Homepage from "./pages/Homepage";

function App() {
  //TODO Add typing
  //@ts-ignore
  const handleMeasurementsSubmit = (measurements: BodyMeasurements) => {
    // Handle the submitted measurements, e.g., send them to an API or update the app's state.
    console.log(measurements);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
      errorElement: <div></div>,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/profile/", element: <ProfilePage /> },
        { path: "/workouts", element: <Workouts />, loader: workoutLoader },
        { path: "/measurements", element: <BodyMeasurementsPage /> },
        { path: "/routines", element: <Routines /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
