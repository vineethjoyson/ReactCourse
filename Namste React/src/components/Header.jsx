import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [logButton, setlogButton] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo">
        <img id="img" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="Navitems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
