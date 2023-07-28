import { useContext, useEffect } from "react";
import BodyMeasurementsForm from "../components/BodyMeasurementsForm";
import { useUser, useUserDispatch } from '../hooks/user';


const BodyMeasurementsPage = () =>{
    const currentUser = useUser();
    const userDispatch = useUserDispatch()

   //@ts-ignore
    const handleMeasurementsSubmit = (date: Date, measurements: BodyMeasurements) => {
        if (!currentUser) {
            return
        }
        
        // Update the current user's measurements for the given date
        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` //TODO: Documentation Javascript Dates.
        console.log(`Body measurement date: ${key}`)
        console.log('Measurements submitted:', measurements);

        

        userDispatch({
            type: 'addMeasure',
            date: key,
            measurements: measurements,
          });

        // TODO Trigger a 'addMeasurement' action here, pass along the measurements

        
        // setCurrentUser({
        //     ...currentUser,
        //     measurements: {
        //         ...currentUser.measurements,
        //         [key]: measurements
        //     }
        // })
     };

    //  useEffect(() => {
    //     if (currentUser) {
    //       localStorage.setItem("user", JSON.stringify(currentUser));
    //     }
    //   }, [currentUser]);

    // console.log(`userContext: ${JSON.stringify(currentUser)}`);


return (
    <div>
        <h1>Enter your measurements - Keep Track of your progess</h1>
        <BodyMeasurementsForm onSubmit={handleMeasurementsSubmit}/>
    </div>
);
};

export default BodyMeasurementsPage;



