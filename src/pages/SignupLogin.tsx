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

  // const [currentUser, setCurrentUser] = useState<User | null>(null);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSignup = () => {
  //   const newUser: User = { username, password };
  //   const users: User[] = JSON.parse(localStorage.getItem('Users') || '[]');
  //   users.push(newUser);
  //   localStorage.setItem('Users', JSON.stringify(users));
  //   setCurrentUser(newUser);
  // };

  // const handleLogin = () => {
  //   const users: User[] = JSON.parse(localStorage.getItem('Users') || '[]');
  //   const loggedInUser = users.find((user) => user.username === username && user.password === password);
  //   if (loggedInUser) {
  //     setCurrentUser(loggedInUser);
  //   }
  // };

  // return (
  //   <div>
  //     {currentUser ? (
  //       <div>
  //         <h2>Welcome, {currentUser.username}!</h2>
  //       </div>
  //     ) : (
  //       <div>
  //         <h2>Signup</h2>
  //         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
  //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  //         <button onClick={handleSignup}>Signup</button>

  //         <h2>Login</h2>
  //         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
  //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  //         <button onClick={handleLogin}>Login</button>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default SignupLogin;
