// import { createContext } from 'react';
// import { User } from '../types'

// export const UserContext = createContext<[User | undefined, any]>([undefined, undefined]);

import { createContext, Dispatch } from 'react'
import { User } from '../types';

export const UserContext = createContext<User | null>(null);
export const UserDispatchContext = createContext<Dispatch<any>>(() => {});