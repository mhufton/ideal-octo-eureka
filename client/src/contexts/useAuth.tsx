import React, { FC, createContext, useState, useContext, useEffect } from 'react';
import { IUserDto } from '../dtos/IUserDto';

interface AuthContextType {
  /** the current user object */
  currentUser: IUserDto | null,
  /** signs the user in */
  signIn: () => Promise<void>,
  /** signs the user out */
  signOut: () => Promise<void>
  /** gets the username and pw to login */
  setLoginCreds: React.Dispatch<React.SetStateAction<ILoginUser | null>>
  errors: string[];
  getCurrentUser: any
}

export interface ILoginUser {
  username: string,
  password: string
}

interface IProps {
  children: JSX.Element
}

const AuthContext = React.createContext<AuthContextType | null>(null);

/** 
 * the gate keeper - this context checks if the user it logged in or not. 
 * Also makes the current user Data available to the rest of the app
 */
export const AuthProvider: FC<IProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IUserDto | null>(null);
  const [loginCreds, setLoginCreds] = useState<ILoginUser | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

 async function getCurrentUser(login: ILoginUser) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login)
    };

    try {
      await fetch("http://localhost:3000/login", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.statusCode === 401) {
            setErrors([ ...errors, data.message ])
          } else {
            setErrors([])
            setCurrentUser(data)
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }

  console.log(errors, currentUser)
  
  const signIn = async () => {
    // Sign in user logic here and set the user state accordingly
  };
  
  const signOut = async () => {
    // Sign out user logic here and set the user state to null
  };
  
  const value: AuthContextType = {
    currentUser,
    signIn,
    signOut,
    setLoginCreds,
    errors,
    getCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);