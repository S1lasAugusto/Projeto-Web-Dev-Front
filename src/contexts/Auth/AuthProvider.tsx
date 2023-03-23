/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../Types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = JSON.parse(localStorage.getItem("authToken")??"{}");
      if (storageData) {
        setUser(storageData.user);
      }
    };
    validateToken();
  }, []);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      console.log(data.user);
      setAuthDataOnLocalStorage(data);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
    setAuthDataOnLocalStorage({});
  };

  const setAuthDataOnLocalStorage = (data: object) => {
    if(data){
      localStorage.setItem("authData", JSON.stringify(data));
    }
    else
    {
      localStorage.removeItem("authData")
    }
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
