import { User } from "../types";

export function createUser(username: string, password: string): User {
    const newUser = { username, password };
    const users = JSON.parse(localStorage.getItem('Users') || '[]');
    users.push(newUser);
    localStorage.setItem('Users', JSON.stringify(users));

    return newUser as User
}

export function login(username: string, password: string): User | undefined {
    const users: User[] = JSON.parse(localStorage.getItem('Users') || '[]')

    const user = users.find(user => user.username === username && user.password === password)
    
    return user
}

export function logout(username: string) {
    //TODO implement this
}

