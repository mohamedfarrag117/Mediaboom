import { useContext } from "react";
import UserContext from "../contextApi/UserContext";

const UserProfile = () => {
  const {
    user,
    setUser,
    handleUserNameChange,
    handlePasswordChange,
    handleSubmit,
  } = useContext(UserContext);

  return (
    <form onSubmit={handleSubmit}>
      <p>Welcome, {user.name}</p>
      <input
        type="text"
        value={user.name}
        onChange={handleUserNameChange}
        placeholder="enter username"
      />
      <input
        type="password"
        value={user.password}
        onChange={handlePasswordChange}
        placeholder="enter password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default UserProfile;
