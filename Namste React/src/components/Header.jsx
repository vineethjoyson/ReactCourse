import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"; //link to specific child elements without refreshing the whole page
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"; //context file
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [logButton, setlogButton] = useState("LogIn");
  const { loggedInUser } = useContext(UserContext); //we are picking the logged in user from the context
  //responsive design;
  return (
    <div className="flex justify-between items-center px-4 py-3 md:px-8 md:py-4 bg-white shadow-md h-16 md:h-20 lg:h-25 w-full">
      <div className=" Logo h-full ">
        <img
          className="w-full h-full rounded-full"
          id="img"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="Navitems">
        <ul className="flex justify-between items-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg [&>li]:hover:text-red-400">
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
          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
