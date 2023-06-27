import { useContext, useEffect } from "react";
import BodyMeasurementsForm from "../components/BodyMeasurementsForm";
import { UserContext } from "../contexts/UserContext";


const BodyMeasurementsPage = () =>{

    const [currentUser, setCurrentUser] = useContext(UserContext)
   //@ts-ignore
    const handleMeasurementsSubmit = (date: Date, measurements: BodyMeasurements) => {
        if (!currentUser) {
            return
        }
        
        // Update the current user's measurements for the given date
        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` //TODO: Documentation Javascript Dates.
        console.log(`Body measurement date: ${key}`)

        setCurrentUser({
            ...currentUser,
            measurements: {
                ...currentUser.measurements,
                [key]: measurements
            }
        })
     };

     useEffect(() => {
        if (currentUser) {
          localStorage.setItem("user", JSON.stringify(currentUser));
        }
      }, [currentUser]);

    console.log(`userContext: ${JSON.stringify(currentUser)}`);


return (
    <div>
        <h1>Enter your measurements - Keep Track of your progess</h1>
        <BodyMeasurementsForm onSubmit={handleMeasurementsSubmit}/>
    </div>
);
};

export default BodyMeasurementsPage;

