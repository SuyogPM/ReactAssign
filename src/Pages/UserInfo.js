import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Custom_Components/Button";

const UserInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { user, pageId } = state;

  if (!state || !state.user) {
    alert("User Not Found!");
    navigate(`/Users?pageId=${pageId}`);
    return null;
  }

  

  const handleBack = () => {
    navigate(`/Users?pageId=${pageId}`);
  };

  return (
    <div className="container mt-5">
      <center>
        <h1 className="mb-4">User Information</h1>
      </center>
      <div
        className="card-horizontal mx-auto"
        style={{
          maxWidth: "600px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="card-img"
              style={{
                borderRadius: "10px 0 0 10px",
                objectFit: "cover",
                height: "100%",
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body p-3">
              <h5 className="card-title">
                {user.first_name} {user.last_name}
              </h5>
              <p className="card-text">ID: {user.id}</p>
              <p className="card-text">Email: {user.email}</p>
            </div>
            <div className="card-footer p-3 text-right">
              <Button className="btn-secondary" onClick={handleBack}>
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
