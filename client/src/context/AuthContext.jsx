import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


export const useAuth = () => {
    useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        JSON.parse(localStorage.getItem('user'))
    })
    const [token, setToken] = useState(() => {
        localStorage.getItem('token')
    })

    const login = ({ token, user }) => {
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
        setToken(token)

    }
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}