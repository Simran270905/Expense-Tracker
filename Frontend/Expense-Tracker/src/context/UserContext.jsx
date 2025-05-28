import React, { createContext, useState } from "react";

/**
 * Context to manage authenticated user state across the app
 */
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /**
   * Updates the user data (e.g., after login)
   * @param {Object} userData
   */
  const updateUser = (userData) => {
    setUser(userData);
  };

  /**
   * Clears the user data (e.g., on logout)
   */
  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
