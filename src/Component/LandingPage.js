import React, { useRef } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();
  const usernameref = useRef(null);
  const passwordref = useRef(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    const data = {
      username: usernameref.current.value,
      password: passwordref.current.value,
    };

    try {
      const response = await fetch("http://pms.nvli.in/pms/entity/user?_format=json", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
       
        console.log("Data posted successfully");
        navigate("/homepage");
        usernameref.current.value = "";
        passwordref.current.value = "";
      } else {
        
        console.error("Error posting data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

  
  };
 const handleRegisterClick=()=>{
    navigate("/register"); 
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "53%", height: "109.5vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} className="background-image">
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "30px", padding: "20px 50px" }}>
          <div style={{ color: "orange", paddingBottom: "70px " }}>Sign In to Your Account</div>
          <form onSubmit={handleSubmit}>
            <label>Username</label>

            <div>
           
              <input type="text" placeholder="Username" required ref={usernameref} style={{ width: "20vw", borderRadius: "5px", border: "none",
            padding:"10px" }} />
            </div>
            <label>Password</label>

            <div>
              
              <input type="password" placeholder="Password" required ref={passwordref} style={{ width: "20vw", borderRadius: "5px", border: "none", padding:"10px" }} />
            </div>
            <button style={{ backgroundColor: "orange"  , border:"none", padding:"5px 15px" , marginTop:"20px", borderRadius:"5px"}} type="submit">
              Login
            </button>
          </form>
          <div>
          <Link to="/forgotpassword" style={{ color: "white", textDecoration: "none" }}>
  Forgot your password?
</Link>

          </div>
        </div>
      </div>
      <div style={{ width: "47%", height: "100vh", backgroundColor: "black", color: "white", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <button style={{ border: "2px solid yellow", marginBottom: "50px" }} onClick={handleRegisterClick}>Register</button>
        <div>
          <img src="http://pms.nvli.in/pms/themes/contrib/estore/images/logo.png" alt="logo" />
        </div>
        <div style={{ textAlign: "justify" }}>
          The Pradhanmantri Sangrahalaya is a tribute to every Prime Minister of India since Independence, and a narrative record of how each one has contributed to the development of our nation over the last 75 years. It is a history of collective effort, and powerful evidence of the creative success of India's democracy. Our Prime Ministers came from every class and tier of society, for the gates of democracy were equally open to all. Each one left an important footprint on the journey of
          development, social harmony, and economic empowerment that has enabled India to give true meaning to freedom. We inherited an impoverished land from the debris of British colonialism, and together gave it a new life, lifting our country from famished deprivation to food-surplus status, and creating infrastructure over barren territory for the benefit of the people.
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
