import { createContext, useState, ReactNode, useContext } from "react";

type User = {
    name: string,
    email: string,
};

type UserAuth = {
    isLoggedIn: boolean,
    user: User | null,
    login: (email: string, password: string) => Promise<void>,
    signup: (name: string, email: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
}

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume user is not logged in initially

    // Implement login logic here
    const login = async (email: string, password: string): Promise<void> => {
        // TODO: Implement login logic
    };

    // Implement signup logic here
    const signup = async (name: string, email: string, password: string): Promise<void> => {
        // TODO: Implement signup logic
    };

    // Implement logout logic here
    const logout = async (): Promise<void> => {
        // TODO: Implement logout logic
    };

    const value = {
        user,
        isLoggedIn,
        login,
        signup,
        logout,
    };

    // Set the context value
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
