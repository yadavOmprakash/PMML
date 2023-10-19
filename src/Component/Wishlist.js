import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import { Link } from "react-router-dom";
function Wishlist() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1, height: "100vh" }}>
        <div style={{ display: "flex", height: "5vh", backgroundColor: "whitesmoke" }}>
          <div>Home /</div>
          <div>My Account</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/myaccount" className="MyAccountButton">
            MY ACCOUNT
          </Link>
          <Link to="/orderhistory" className="MyAccountButton">
            ORDER HISTORY
          </Link>
          <Link to="/downloadlist" className="MyAccountButton">
            DOWNLOAD LIST
          </Link>
          <Link to="/wishlist" className="MyAccountButton">
            WISHLIST
          </Link>
        </div>
      </div>
      <div style={{display:'flex' , height:"10vh", alignItems:"center", justifyContent:"center"}}>
      <div  style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <div style={{borderBottom:"1px solid black" , height :"3vh" , width:"40vw", marginBottom:"2px"}}></div>
        <div  style={{borderTop:"1px solid black" , height :"3vh" , width:"40vw"}}></div>
      </div>
      <div  style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", width:"15vw"}}> WISHLIST</div>

      <div  style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <div style={{borderBottom:"1px solid black" , height :"3vh" , width:"40vw", marginBottom:"2px"}}></div>
        <div  style={{borderTop:"1px solid black" , height :"3vh" , width:"40vw"}}></div>
      </div>

      </div>      <Footer />
    </div>
  )
}

export default Wishlist