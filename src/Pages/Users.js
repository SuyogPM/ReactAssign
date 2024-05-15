import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Users = ({ setUserId }) => {
    const [userData, setUserData] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => setUserData(data.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const handleClick = (user) => {
        setUserId(user);
        navigate("/UserInfo");
    };

    return (
        <div className="container mt-5">
            <center>
                <h1 className="mb-4">Registered Users!</h1>
            </center>
            <br />
            <center>
                <table className="table table-bordered" style={{ width: '80%' }}>
                    <thead className="thead-light">
                        <tr style={{ backgroundColor: "grey", textAlign: 'center' }}>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                          
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {userData.map((user, index) => (
                            <tr
                                key={user.id}
                                style={{
                                    borderBottom: '1px solid #ddd',
                                    cursor: 'pointer',
                                    backgroundColor: hoveredRow === index ? '#f5f5f5' : 'transparent'
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
                <div className="d-flex justify-content-end" style={{ marginRight: '100px' }}>
                    <Link to={'/Home'}>
                        <Button className='btn-secondary'>Back</Button>
                    </Link>
                </div>
            </center>
        </div>
    );
};

export default Users;
