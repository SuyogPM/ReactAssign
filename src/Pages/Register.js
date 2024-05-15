import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Register = ({ addUser, users, updateUser, uuid }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        dob: '',
        subject: '',
    });

    useEffect(() => {
        if (uuid !== null) {
            const user = users.find((user) => user.id === parseInt(uuid));
            if (user) {
                setFormData(user);
            }
        }
    }, [uuid, users]);

    const handleCancel = () => {
        formData.id ? navigate('/view') : navigate('/Home');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.age && formData.dob && formData.subject) {
            if (formData.id) {
                updateUser(formData.id, formData);
                alert('User updated successfully!');
            } else {
                addUser(formData);
                alert('User registered successfully!');
            }
            setFormData({ name: '', age: '', dob: '', subject: '' });
            navigate('/view');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h3 className="card-title text-center">
                                {formData.id ? 'Edit User' : 'Register Page'}
                            </h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age:</label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dob">Date of Birth:</label>
                                    <Input
                                        type="date"
                                        className="form-control"
                                        id="dob"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject:</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <Button type="submit" className="btn btn-primary">
                                        {formData.id ? 'Update' : 'Register'}
                                    </Button>
                                    <Button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
