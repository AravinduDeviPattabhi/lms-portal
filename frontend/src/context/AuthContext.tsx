import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { User } from "../features/auth/types/auth";
import { getProfile } from "../features/auth/api/authApi";


interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
  const loadUser = async () => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) return;

    setToken(storedToken);

    try {
      const data = await getProfile();
      setUser(data.user);
    } catch (error) {
      console.error(error);

      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
    }
  };

  loadUser();
}, []);

  const login = (token: string, user: User) => {
  localStorage.setItem("token", token);

  setToken(token);
  setUser(user);
};

  const logout = () => {
  localStorage.removeItem("token");

  setToken(null);
  setUser(null);
};

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}