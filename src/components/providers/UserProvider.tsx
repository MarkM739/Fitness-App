import { useReducer } from "react";
import { UserContext, UserDispatchContext } from "../../contexts/UserContext";
import { userReducer } from "../../reducers/userReducer";

const UserProvider: React.FC<any> = (props) => {
  const [currentUser, dispatch] = useReducer(userReducer, null);

  return (
    <UserContext.Provider value={currentUser}>
      <UserDispatchContext.Provider value={dispatch}>
        {props.children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export default UserProvider