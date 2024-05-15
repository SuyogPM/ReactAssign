
// import { getUsers , deleteUser} from "../UserData/userData";
import {  Link, useNavigate } from "react-router-dom";
import Button from "../Custom_Components/Button";

const View = ({users,deleteUser}) => {
  const navigate = useNavigate();
 const handleEdit = (uuid) => {
  // setId(uuid);
  navigate(`/register/${uuid}`);
 }
  
  console.log(users);
  const handleDelete = (userId) =>{
  deleteUser(userId);
  alert("Record Delete Sucessfully!");
}
  return (
  <div className="container mt-5">
    <center>
      <h1 className="mb-4">Registerd Users!</h1>
      
    </center>
    <br/>
    <center>
    <table className="table table-bordered" style={{width:'80%'}}>
      <thead  className="thead-light">
        <tr style={{backgroundColor : "grey" , textAlign: 'center'}}>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Date of Birth</th>
          <th>Subject</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody style={{textAlign : 'center'}}>
      {users.map((user, index)=>(
        <tr  key={index} style={{borderBottom:'1px solid #ddd'}}>
          <td style={{marginLeft: "10px"}}>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.dob}</td>
          <td>{user.subject}</td>
          <td>
            <Button className='btn-success' onClick={()=> handleEdit(user.id)}>Edit</Button>
            <Button className='btn-danger' style={{marginLeft : '10px'}} onClick={()=> handleDelete(user.id)}>Delete</Button>
          </td>
        </tr>
      ))}

      </tbody>
      </table>
      <div className="d-flex justify-content-end" style={{marginRight : '100px'}}><Link to={'/Home'}> <Button className='btn-secondary'>Back</Button></Link></div>
    
    </center>
    
  </div>
  );
};

export default View;
