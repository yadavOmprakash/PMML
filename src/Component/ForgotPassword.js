import React,{useRef} from 'react'
import "../App.css";
import { Link ,useNavigate} from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
    const usernameoremailref = useRef(null);

  const handleGetInputValue=()=>{
    alert(usernameoremailref.current.value);
  }
  const handleLoginClick=()=>{
    navigate("/login");
  }
  return (
    <div style={{ display: "flex" , height:"100vh"}}>
      <div style={{ width: "53%", height: "109.5vh" ,display:"flex", flexDirection:"column" ,justifyContent:"center" , alignItems:"center"}} className="background-image">
        <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "30px", padding:"20px" , width:"25vw" }} >
        <div style={{ color: "orange" , paddingBottom:"70px "}}>Sign In to Your Account</div>
        <div style={{width:"80%"}}>
        <label>Username or email address</label>
        <input  ref={usernameoremailref}  style={{padding:"10px", border:"none" , borderRadius:"5px"}}>
         </input>
        <div>Password reset instructions will be sent to your registered email address.</div>
      <button  onClick={handleGetInputValue}>Sumbit</button>
      </div>
        <div>
        <Link to="/forgotpassword" style={{ color: "white", textDecoration: "none" }}>
  Forgot your password?
</Link>
        </div>
      </div >
      </div>
      <div style={{ width: "47%", height: "100vh", backgroundColor: "black" ,color:"white" ,padding:"40px", display:"flex", flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
        <button  style={{border:"2px solid yellow", marginBottom:"50px"}}  onClick={handleLoginClick} >
          Login
        </button>
        <div>
          <img src="http://pms.nvli.in/pms/themes/contrib/estore/images/logo.png" alt="logo" />
        </div>
        <div style={{textAlign:"justify"}}>
          The Pradhanmantri Sangrahalaya is a tribute to every Prime Minister of India since Independence, and a narrative record of how each one has contributed to the development of our nation over the last 75 years. It is a history of collective effort, and powerful evidence of the creative success of India’s democracy. Our Prime Ministers came from every class and tier of society, for the gates of democracy were equally open to all. Each one left an important footprint on the journey of
          development, social harmony and economic empowerment that has enabled India to give true meaning to freedom. We inherited an impoverished land from the debris of British colonialism, and together gave it a new life, lifting our country from famished deprivation to food-surplus status, and creating infrastructure over barren territory for the benefit of the people.
        </div>
      </div>
    </div>
  );
        }
export default ForgotPassword



