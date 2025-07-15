import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import SearchBar from "./Searchbar";
export const Body = () => {
  //state cahnge by calling api
  const [lisOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setsearchText] = useState("");
  let apiResp;
  ///use effect tohook to render after the basic rendering and then call api and do all the shit
  useEffect(() => {
    fetchData();
  }, []);

  //fetching Swiggy APi
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.5419454&lng=76.1377935&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    apiResp = await data.json();
    //  = json;
    let initialLoadData = apiResp?.data?.cards?.filter(
      (x) => x?.card?.card?.id == "restaurant_grid_listing_v2"
    )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlistOfRestaurant(initialLoadData);
    setFilteredRest(initialLoadData);
  };

  //conditional Rendering
  // Shimmer UI before the api calls and render
  // if (lisOfRestaurant?.length === 0) {
  //   return <Shimmer />;
  // }

  //using ternary operator⭐
  //mainbody drendering
  // console.log("initialLoadData", initialLoadData);
  return lisOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="SearchBar">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            placeholder="eg:cafe"
          />
          <button
            className="searchButton"
            onClick={() => {
              setFilteredRest(
                lisOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            seacrh
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRest(
              lisOfRestaurant.filter((x) => x.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestaurantsContainer">
        {filteredRest.map((Restaurants) => (
          <RestaurantCard
            key={Restaurants.info.id}
            RestaurantData={Restaurants}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
