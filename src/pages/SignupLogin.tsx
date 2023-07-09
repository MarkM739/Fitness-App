import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import * as api from "../utils/api";

type User = {
  username: string;
  password: string;
};


const SignupLogin: React.FC = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const user = api.createUser(username, password)

    setCurrentUser(user);
  };

  console.log(`userContext: ${JSON.stringify(currentUser)}`);

  return (
    <div>
      {currentUser ? (
        <div>{JSON.stringify(currentUser)}</div>
      ) : (
        <div>
          {" "}
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Signup</button>
        </div>
      )}
    </div>
  );

 
};

export default SignupLogin;
