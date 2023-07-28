import { User } from "../types"
/**
 * A reducer function for the 'User' object.
 * 
 * This is a simple function that alters the state depending on the given action.
 * 
 * You _always_ need to return the _new_ state: you can't just modify the _old_ state
 */
export function userReducer(state: User | null, action: any) {
    switch (action.type) {
        case 'login': {
            return action.user
        }
        case 'addMeasure': {
            if (!state) {
              return state;
            }
      
            const { date, measurements } = action;
      
            //TODO Got this from ChatGPT.....not too sure how it works. ASK DEV
            const updatedUser = {
              ...state,
              measurements: {
                ...state.measurements,
                [date]: measurements,
              },
            };
      
            return updatedUser;
          }
          default:
            return state;
        }
      }
    


const Homepage: React.FC = () => {
    const initialState: User | null = null; // Assuming your initial state for the user is null
  
    // Set up the userReducer and the user state using the useReducer hook
    const [user, dispatch] = useReducer(userReducer, initialState);
}