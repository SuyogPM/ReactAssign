import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Home = ({handleRegister}) => {
    const navRegister = () =>{
        handleRegister();
    }
 return(
    <div>
    <center>   
        <h1>
            Welcome!
        </h1>
       <Link to={"/register"}>
       <Button className='btn-success' onClick={navRegister}>
        Register
       </Button>
       </Link>
        <Link to={"/view"} style={{paddingLeft : "10px"}}>
         <Button className= 'btn-secondary'>View</Button>
       </Link>
       <Link to={"/Users"} style={{padding : "10px"}}>
         <Button className= 'btn-secondary'>Users</Button>
       </Link>
    </center>
        
    </div>
 )
}

export default Home;