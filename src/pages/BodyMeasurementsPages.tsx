import BodyMeasurementsForm from "../components/BodyMeasurementsForm";


const BodyMeasurementsPage = () =>{
    const handleSubmit = (measurements) => {

    };

return (
    <div>
        <h1>Enter your measurements - Keep Track of your progess</h1>
        <BodyMeasurementsForm onSubmit={handleSubmit}/>
    </div>
);
};

export default BodyMeasurementsPage;