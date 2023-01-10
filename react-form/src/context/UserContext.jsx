import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    birthday: "",
    country: "",
    terms_and_conditions: false,
  });

  return (
    <UserContext.Provider value={{ form, setForm }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
