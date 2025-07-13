const RestaurantCard = ({ RestaurantData }) => {
  return (
    <div className="RestaurantsCard">
      <img className="RestaurantImg" src={RestaurantData.logoImage} alt="" />
      <h3>{RestaurantData.name} </h3>
      <h4>{RestaurantData.price}$</h4>
      <h4>{RestaurantData.rating} ⭐</h4>
      <h4>{RestaurantData.cuisine}</h4>
    </div>
  );
};
export default RestaurantCard;
