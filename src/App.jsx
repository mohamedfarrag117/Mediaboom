import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Provider from "./contextApi/Provider";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

import { useContext } from "react";
import UserContext from "./contextApi/UserContext";
import Content from "./components/Content";

const App = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    if (!user) {
      navigate("/login");
      return null;
    }

    return children;
  };
  return (
    <Provider>
      <div className="app-wrapper min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/content" element={<Content />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
