import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const UserInfo = ({ userId }) => {
    const [userData, setUserData] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setUserData(userId)
    }, [userId]);

    if (!userId) {
        alert("User Not Found!")
        navigate("/User")
    }

    return (
        <div className="container mt-5">
            <center>
                <h1 className="mb-4">User Information</h1>
            </center>
            <div className="card-horizontal mx-auto" style={{ maxWidth: '600px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={userData.avatar} alt="User Avatar" className="card-img" style={{ borderRadius: '10px 0 0 10px', objectFit: 'cover', height: '100%' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-3">
                            <h5 className="card-title">{userData.first_name} {userData.last_name}</h5>
                            <p className="card-text">ID: {userData.id}</p>
                            <p className="card-text">Email: {userData.email}</p>
                        </div>
                        <div className="card-footer p-3 text-right">
                            <Link to="/Users">
                                <Button className="btn-secondary">Back</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
