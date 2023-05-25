import { useState } from "react";
import { useParams } from "react-router-dom";


interface UserData {
    age: number;
    height: number;
    weight: number;
  }


const Profile: React.FC = () => {
    const { userId } = useParams();

    console.log(userId)

    const [age, setAge] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [userData, setUserData] = useState<UserData[]>([]);
  
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(event.target.value));
      };
    
        const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseInt(event.target.value));
      };
    
      const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(parseInt(event.target.value));
      };

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUserData: UserData = {
          age,
          height,
          weight,
        };
        setUserData([...userData, newUserData]);
        setAge(0);
        setHeight(0);
        setWeight(0);
      };

      

      
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Age:
              <input type="number" value={age} onChange={handleAgeChange} />
            </label>
            <label>
              Height:
              <input type="number" value={height} onChange={handleHeightChange} />
            </label>
            <label>
              Weight:
              <input type="number" value={weight} onChange={handleWeightChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
          <div>
            {userData.map((data, index) => (
              <p key={index}>
                User {index + 1}: Age {data.age}, Height {data.height} cm, Weight {data.weight} kg.
              </p>
            ))}
          </div>
        </div>
      );
    }
export default Profile;