import BodyMeasurementsForm from "../components/BodyMeasurementsForm";


const BodyMeasurementsPage = () =>{
    //@ts-ignore
    const handleMeasurementsSubmit = (measurements: BodyMeasurements) => {
        
    };

return (
    <div>
        <h1>Enter your measurements - Keep Track of your progess</h1>
        <BodyMeasurementsForm onSubmit={handleMeasurementsSubmit}/>
    </div>
);
};

export default BodyMeasurementsPage;