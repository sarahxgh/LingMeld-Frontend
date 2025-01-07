import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(''); 
  const [image , setImage] = useState('');

  // Function to set the email
  const setUserEmail = (email) => {
    setEmail(email); // Set the email state
  };

  const setUserImage = (url) => {
    setImage(url); // Set the email state
  };

  return (
    <AuthContext.Provider value={{ email, setUserEmail, image, setUserImage }}>
      {children}
    </AuthContext.Provider>
  );
};
