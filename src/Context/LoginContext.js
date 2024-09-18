import { createContext } from "react";

export const LoginContext = createContext({
  username: "",
  setUsername: () => {},
  showLoginForm: false,
  setShowLoginForm: () => {},
});

export const LoginProvider = LoginContext.Provider;
