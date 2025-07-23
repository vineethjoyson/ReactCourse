import { imgUrlPart } from "../utils/constants";
const RestaurantCard = ({ RestaurantData }) => {
  return (
    <div className="RestaurantsCard  p-4 m-2 w-52 h-96 bg-gray-200 roun rounded-lg hover:border">
      <img
        className="RestaurantImg rounded-lg h-48 w-full "
        src={imgUrlPart + RestaurantData.info.cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold text-lg">{RestaurantData.info.name} </h3>
      <h4>{RestaurantData.info.costForTwo}</h4>
      <h4>{RestaurantData.info.avgRating} ⭐</h4>
      <h4>{RestaurantData.info.locality}</h4>
    </div>
  );
};
export default RestaurantCard;
