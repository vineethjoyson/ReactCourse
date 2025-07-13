import RestaurantCard from "./RestaurantCard";
import data from "../../data.json";
import { useState } from "react";
export const Body = () => {
  const [lisOfRestaurant, setlistOfRestaurant] = useState(data);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfRestaurant(lisOfRestaurant.filter((x) => x.rating > 4));
            // console.log(newdata);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestaurantsContainer">
        {lisOfRestaurant.map((Restaurants) => (
          <RestaurantCard key={Restaurants.id} RestaurantData={Restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
