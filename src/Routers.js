import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import View from "./Pages/View";
import Users from "./Pages/Users";
import UserInfo from "./Pages/UserInfo";
import { BrowserRouter as Router } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register/:id" element={<Register />} />
          <Route path="/view" element={<View />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/UserInfo" element={<UserInfo />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
