import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"; //link to specific child elements without refreshing the whole page
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [logButton, setlogButton] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo">
        <img id="img" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="Navitems">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"./"}>Home</Link>
          </li>
          <li>
            <Link to={"./about"}>About us</Link>
          </li>
          <li>
            <Link to={"./contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"./grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              setlogButton(logButton == "LogIn" ? "LogOut" : "LogIn")
            }
          >
            {logButton}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
