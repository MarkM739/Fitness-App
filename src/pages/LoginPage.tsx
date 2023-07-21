import React, { useState } from "react";
import { useUserDispatch } from "../hooks/user";
import * as api from "../utils/api";

const LoginPage: React.FC = () => {
  const userDispatch = useUserDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    const user = api.login(username, password);

    if (!user) {
      setLoginError(true);
      return;
    }

    userDispatch({
      type: "login",
      user: user,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      {loginError && <div>Invalid username or password</div>}
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;