/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useContext, useMemo } from 'react';

interface AuthContextData {
  userGroup: string;
  isLoggedIn: boolean;
  login: (userGroup: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({
  userGroup: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
}as AuthContextData);

export function useAuth() {
  return useContext(AuthContext);
}




export const AuthProvider= ({ children }: {
    children: React.ReactNode;
  }) => {
  const [userGroup, setUserGroup] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (selectedGroup: string) => {
    setUserGroup(selectedGroup);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserGroup('');
    setIsLoggedIn(false);
  };

  const ctx: AuthContextData = useMemo(() => ({
    userGroup, isLoggedIn, login, logout
  }), [userGroup, isLoggedIn, login, logout]);

  return ( <AuthContext.Provider value={ctx}>
      {children}
    </AuthContext.Provider>
  );
};
