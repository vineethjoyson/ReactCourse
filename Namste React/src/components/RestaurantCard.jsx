import { imgUrlPart } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ RestaurantData }) => {
  const isOpen = RestaurantData.info.isOpen;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      className={`RestaurantsCard p-4 m-2 w-52 h-96 rounded-lg hover:border bg-gray-200 
        ${!isOpen ? "grayscale opacity-60  cursor-not-allowed" : ""}`}
    >
      <img
        className="RestaurantImg rounded-lg h-48 w-full "
        src={imgUrlPart + RestaurantData.info.cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold text-lg">{RestaurantData.info.name} </h3>
      <h4>{RestaurantData.info.costForTwo}</h4>
      <h4>{RestaurantData.info.avgRating} ⭐</h4>
      <h4>{RestaurantData.info.locality}</h4>
      <h4>userName: {loggedInUser}</h4>
    </div>
  );
};

//higer Order Components
export const withOpenedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
