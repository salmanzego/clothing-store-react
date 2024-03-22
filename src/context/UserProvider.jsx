import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    
    const userData = localStorage.getItem('userId') ? {
        _id: localStorage.getItem('userId'),
        email: localStorage.getItem('userEmail'),
        userName: localStorage.getItem('userName')
    } : false


    const [user, setUser] = useState(userData || false);

    console.log(user);
    useEffect(() => {
        setUser(userData);
    }, [userData]);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}