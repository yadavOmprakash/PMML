import React, { useEffect, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import { useNavigate, Link } from "react-router-dom";

function Ebook() {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://pms.nvli.in/pms/ebooks-rest`);
        const apiData = await response.json();
        console.log(apiData);
        setData(apiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
    console.log(data);
  const navigate = useNavigate();
  const handleMyaccountclick = () => {
    navigate("/myaccount");
  };
  return (
    <div>
      <div style={{ width: "100vw", height: "5vh", backgroundColor: "rgb(242,199,68)", display: "flex", color: "white", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
            <MailOutlineIcon /> info@gmail.com
          </div>
          <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
            <TurnLeftIcon /> Skip to main content
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }} onClick={handleMyaccountclick}>
            My account
          </div>
          <div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>Log out</div>
        </div>
      </div>

      <div className="background-image-home" style={{ height: "30vh" }}>
        <div style={{ display: "flex", color: "white", alignItems: "center" }}>
          <div style={{ backgroundColor: "cyan", height: "6vh", width: "6vh", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>Logo</div>
          <div>
            <div>PMML</div>
            <div>Prime Ministers Museum and Library</div>
          </div>
          <div style={{ display: "flex" }}>
            <Link className="link" to={"/home"}>
              HOME
            </Link>
            <Link className="link" to={"/collections"}>
              COLLECTIONS
            </Link>
            <Link className="link" to={"/photoarchive"}>
              PHOTO ARCHIVE
            </Link>
            <Link className="link" to={"/rarebooks"}>
              RAREBOOKS
            </Link>
            <Link className="link" to={"/ebooks"}>
              EBOOKS
            </Link>
          </div>
          <div style={{ display: "flex" }}>
            <div>cart Logo</div>
            <div>Total</div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", height: "5vh", backgroundColor: "whitesmoke" }}>
          <div>Home /</div>
          <div>Ebooks</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Ebook;
