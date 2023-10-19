import "./App.css";
import ForgotPassword from "./Component/ForgotPassword";
import LandingPage from "./Component/LandingPage";
import Register from "./Component/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHomePage from "./Component/UserHomePage";
import MyAccountDashboard from "./Component/MyAccountDashboard";
import OrderHistory from "./Component/OrderHistory";
import DownloadList from "./Component/DownloadList";
import Wishlist from "./Component/Wishlist";
import Collection from "./Component/Collection";
import PhotoArchive from "./Component/PhotoArchive";
import Rarebook from "./Component/Rarebook";
import Ebook from "./Component/Ebook";
import Home from "./Component/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/homepage" element={<UserHomePage />} />
        <Route path="/myaccount" element={< MyAccountDashboard/>} />
        <Route path="/orderhistory" element={< OrderHistory/>} />
        <Route path="/downloadlist" element={< DownloadList/>} />
        <Route path="/wishlist" element={< Wishlist/>} />
        <Route path="/home" element={< Home/>} />
        <Route path="/collections" element={< Collection/>} />
        <Route path="/photoarchive" element={< PhotoArchive/>} />
        <Route path="/rarebooks" element={< Rarebook/>} />
        <Route path="/ebooks" element={< Ebook/>} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
