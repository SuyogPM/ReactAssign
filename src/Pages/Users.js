import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Redux/Action/fetchUserAction";
import Button from "../Custom_Components/Button";

const Users = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.fetchData);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialPageId = parseInt(queryParams.get("pageId")) || 1;
  const [pageId, setPageId] = useState(initialPageId);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${pageId}`)
      .then((response) => response.json())
      .then((data) => dispatch(addData(data.data)))
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch, pageId]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleClick = (user) => {
    navigate("/UserInfo", { state: { user, pageId } });
  };

  const handleNext = () => {
    if (pageId < 2) {
      setPageId((prevPageId) => prevPageId + 1);
    } else {
      alert('No More Pages!');
    }
  };

  const handlePrevious = () => {
    setPageId((prevPageId) => (prevPageId > 1 ? prevPageId - 1 : 1));
  };

  useEffect(() => {
    navigate(`?pageId=${pageId}`);
  }, [pageId, navigate]);

  return (
    <div className="container mt-5">
      <center>
        <h1 className="mb-4">Fetched Users!</h1>
      </center>
      <br />
      <center>
        <table className="table table-bordered" style={{ width: "80%" }}>
          <thead className="thead-light">
            <tr style={{ backgroundColor: "grey", textAlign: "center" }}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {user.map((user, index) => (
              <tr
                key={user.id}
                style={{
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer",
                  backgroundColor:
                    hoveredRow === index ? "#f5f5f5" : "transparent",
                }}
                onClick={() => handleClick(user)}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                className="table-hover-row"
              >
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-between" style={{ marginRight: "100px", marginLeft: "100px" }}>
          <Button className="btn-secondary" onClick={handlePrevious}>Previous</Button>
          <Button className="btn-secondary" onClick={handleNext}>Next</Button>
        </div>
        <div className="d-flex justify-content-end" style={{ marginRight: "100px", marginTop: "20px" }}>
          <Link to={"/Home"}>
            <Button className="btn-secondary">Back</Button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default Users;
