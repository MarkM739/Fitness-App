import { User } from "../types"

export function userReducer(state: User | null, action: any) {
    switch (action.type) {
        case 'login': {
            return action.user
        }
    }

}