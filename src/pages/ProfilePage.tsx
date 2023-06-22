import { useState } from "react";
import { useParams } from "react-router-dom";


interface UserData {
  id?: string;    // TODO: Make this required
  name?: string;  // TODO: Same here
  age: number;
  height: number;
  weight: number;
}


const testUsers = [
  {
    id: 'mark',
    name: 'Mark'
  },
  {
    id: 'devin',
    name: 'Devin'
  }
];

/**
 * 1. User navigates to /profile/:userId (example -> /profile/mark)
 * 2. Need to determine what the :userId actually is (useParams() here)
 * 3. Use the userId to lookup the corresponding user data in testUsers
 * 
 * Try looking at all the loader hooks that react-router provides
 */

const Profile: React.FC = () => {
  const { userId } = useParams();

  console.log(userId);

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
        <label className="text-xl">
          Age:
          <input
            type="number"
            className="input input-bordered input-primary w-full max-w-xs"
            value={age}
            onChange={handleAgeChange}
          />
        </label>
        <label className="text-xl">
          Height:
          <input
            type="number"
            className="input input-bordered input-primary w-full max-w-xs"
            value={height}
            onChange={handleHeightChange}
          />
        </label>
        <label className="text-xl">
          Weight:
          <input
            type="number"
            className="input input-bordered input-primary w-full max-w-xs"
            value={weight}
            onChange={handleWeightChange}
          />
        </label>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
      <div>
        {userData.map((data, index) => (
          <p key={index}>
            User {index + 1}: Age {data.age}, Height {data.height} cm, Weight{" "}
            {data.weight} kg.
          </p>
        ))}
      </div>
    </div>
  );
};
export default Profile;


