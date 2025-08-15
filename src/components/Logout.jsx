import { useContext } from "react";
import UserContext from "../contextApi/UserContext";

const Logout = () => {
  const { logoutUser, user } = useContext(UserContext);
  if (!user) {
    return <p>No user is logged in</p>;
  }
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Logout;
