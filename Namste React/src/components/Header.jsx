import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"; //link to specific child elements without refreshing the whole page
const Header = () => {
  const [logButton, setlogButton] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo">
        <img id="img" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="Navitems">
        <ul>
          <li>
            <Link to={"./"}>Home</Link>
          </li>
          <li>
            <Link to={"./About"}>About us</Link>
          </li>
          <li>
            <Link to={"./Contact"}>Contact us</Link>
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
