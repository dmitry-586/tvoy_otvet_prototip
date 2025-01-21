"use client";

import { createContext, useContext, useState } from "react";
import AuthPage from "./AuthPage";

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const togglePage = () => {
    setIsLoginPage((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {!isAuthenticated ? (
        <AuthPage
          onLogin={login}
          buttonText={isLoginPage ? "Войти" : "Зарегистрироваться"}
          switchText={
            isLoginPage ? "Зарегистрируйтесь" : "Войдите в учетную запись"
          }
          switchTitle={isLoginPage ? "Нет аккаунта?" : "Уже есть аккаунт?"}
          title={isLoginPage ? "Добро пожаловать!" : "Регистрация"}
          onToggle={togglePage}
          isLoginPage={isLoginPage}
        />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
