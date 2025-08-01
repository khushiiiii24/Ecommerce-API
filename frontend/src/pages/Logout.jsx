// Logout.jsx
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Logout.css'
function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/user/logout", { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h2>Are you sure you want to logout?</h2>
        <button onClick={handleLogout} className="logout-button">Yes, Logout</button>
      </div>
    </div>
  );
}

export default Logout;
