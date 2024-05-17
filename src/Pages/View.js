import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Redux/Action/userActions";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Custom_Components/Button";

const View = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersData = useSelector((state) => state.users.usersData);

  const handleEdit = (userId) => {
    navigate(`/register/${userId}`);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
    alert("Record Delete Successfully!");
  };

  if (!usersData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <center>
        <h1 className="mb-4">Registered Users!</h1>
      </center>
      <br />
      <center>
        <table className="table table-bordered" style={{ width: "80%" }}>
          <thead className="thead-light">
            <tr style={{ backgroundColor: "grey", textAlign: "center" }}>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Date of Birth</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {usersData.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ marginLeft: "10px" }}>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.dob}</td>
                <td>{user.subject}</td>
                <td>
                  <Button
                    className="btn-success"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="d-flex justify-content-end"
          style={{ marginRight: "100px" }}
        >
          <Link to="/home">
            {" "}
            <Button className="btn-secondary">Back</Button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default View;
