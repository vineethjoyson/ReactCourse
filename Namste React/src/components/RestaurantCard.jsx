import { imgUrlPart } from "../utils/constants";
const RestaurantCard = ({ RestaurantData }) => {
  return (
    <div className="RestaurantsCard">
      <img
        className="RestaurantImg"
        src={imgUrlPart + RestaurantData.info.cloudinaryImageId}
        alt=""
      />
      <h3>{RestaurantData.info.name} </h3>
      <h4>{RestaurantData.info.costForTwo}</h4>
      <h4>{RestaurantData.info.avgRating} ⭐</h4>
      <h4>{RestaurantData.info.locality}</h4>
    </div>
  );
};
export default RestaurantCard;
