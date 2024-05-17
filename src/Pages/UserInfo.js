import { Link, useNavigate ,useLocation} from "react-router-dom";
import Button from "../Custom_Components/Button";

const UserInfo = () => {
    const navigate = useNavigate();
    const {state} = useLocation();


    if (!state) {
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
                        <img src={state.avatar} alt="User Avatar" className="card-img" style={{ borderRadius: '10px 0 0 10px', objectFit: 'cover', height: '100%' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-3">
                            <h5 className="card-title">{state.first_name} {state.last_name}</h5>
                            <p className="card-text">ID: {state.id}</p>
                            <p className="card-text">Email: {state.email}</p>
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
