import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import EmailIcon from "@mui/icons-material/Email";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function MyAccountDashboard() {
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

      <div style={{ display: "flex", height: "10vh", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ borderBottom: "1px solid black", height: "3vh", width: "40vw", marginBottom: "2px" }}></div>
          <div style={{ borderTop: "1px solid black", height: "3vh", width: "40vw" }}></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "15vw" }}> MY ACCOUNT</div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ borderBottom: "1px solid black", height: "3vh", width: "40vw", marginBottom: "2px" }}></div>
          <div style={{ borderTop: "1px solid black", height: "3vh", width: "40vw" }}></div>
        </div>
      </div>
      <div style={{ border: "1px solid blue", height: "40vh", margin: "6vh 6vw" }}>
        <div style={{ height: "5vh" }}> USERNAME</div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "25vw" }}></div>
          <div>
            <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
              <PersonIcon />
              Name:
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
              <FemaleIcon />
              <MaleIcon />
              Gender:
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
              <HomeIcon /> Address:
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
              
              <EmailIcon />
              Email:
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
            
              <FlagIcon />
              Country:
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
              
              <VpnKeyIcon />
              Last Login:
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
           
              <AccessTimeIcon />
              Last Access:
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyAccountDashboard;
