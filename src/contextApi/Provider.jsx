import { useEffect, useState } from "react";
import UserContext from "./UserContext";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const storedUsers = localStorage.getItem("registered");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("registered", JSON.stringify(registeredUsers));
    console.log("hello new user");
  }, [registeredUsers]);

  const registerUser = (email, password) => {
    const alreadyRegistered = registeredUsers.some(
      (user) => user.email === email
    );
    if (alreadyRegistered) {
      alert("user already registered");
      return false;
    }
    setRegisteredUsers([...registeredUsers, { email, password }]);
    alert("user registered successfully!");
    return true;
  };

  const loginUser = (email, password) => {
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUser(user);
      alert("login successful!");
      return true;
    } else {
      alert("invalid email or password");
      return false;
    }
  };

  const logoutUser = () => {
    setUser(null);
    alert("Logged out successfully!");
  };

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
