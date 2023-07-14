import React, { useState } from "react";
import { useUser, useUserDispatch } from "../hooks/user";
import * as api from "../utils/api";

type User = {
  username: string;
  password: string;
};


const SignupLogin: React.FC = () => {
  const currentUser = useUser();
  const userDispatch = useUserDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const user = api.createUser(username, password)

    userDispatch({
      type: 'login',
      user: user
    })
  };


  const handleLogin = () => {
    const user = api.login(username, password)

    if (!user) {
      console.log('user doesnt exist')
      return
    }

    //userDispatch()
  }


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
