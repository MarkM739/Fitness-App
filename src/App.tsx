import Workouts from "./components/Workouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routines from "./components/WorkoutRoutines";
import UserProvider from './components/providers/UserProvider';
import IndexPage from "./pages/index";
import { workoutLoader } from "./loaders/workoutLoader";
import BodyMeasurementsPage from "./pages/BodyMeasurementsPages";
import ProfilePage from "./pages/ProfilePage";
import Homepage from "./pages/Homepage";
import SignupLogin from "./pages/SignupLogin";


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
        { path: "/profile", element: <ProfilePage /> },
        { path: "/workouts", element: <Workouts />, loader: workoutLoader },
        { path: "/measurements", element: <BodyMeasurementsPage /> },
        { path: "/routines", element: <Routines /> },
        { path: "/login", element: <SignupLogin />},
      ],
    },
  ]);

  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;


//TODO Load in workouts in all workout pages - Just add arrays.

//TODO Style and flexbox each page with tailwind/DaisyUI

//TODO Fix measurements page too add correctly 

//TODO Get a circular graph to track measurements (not sure what would work best yet)

//TODO Timer to start and end workout sessions

//TODO get the user to xfer data per component -- local storage setCurrentUser, updateUser

//TODO Split sign-in and log-in components and make seperate pages.

//TODO Finish API login

//TODO Update all the pages/components by exporting them to index

//Bonus: integrate fitbit API to app...Mostly showing for reactnative in examples??
