import React from "react";

function Footer() {
  return (
    <>
    <div style={{ display: "flex", backgroundColor: "black", height: "25vh", color: "white" , justifyContent:"space-evenly"}}>
      <div style={{ width: "20%" }}>
        <div>About PMML</div>
        <div style={{ fontSize: "10px" }}>The Pradhanmantri Sangrahalaya is a tribute to every Prime Minister of India since Independence, and a narrative record of how each one has contributed to the development of our nation over the last 75 years. It is a history of collective effort, and powerful evidence of the creative success of India's democracy. </div>
      </div>
      <div>
        <div>Footer menu</div>
        <div>Contact</div>
      </div>
      <div>
        <div>Quick Link</div>
        <div>Contact</div>
      </div>
      <div>
        <div>Search</div>
        <input></input>
      </div>
    </div>
    <div  style={{backgroundColor:"black"}}>
        <img src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" style={{ width: "20vh" }} alt="logo"/> 
    </div>
    </>
  );
}

export default Footer;
