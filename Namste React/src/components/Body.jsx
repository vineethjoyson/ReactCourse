import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";
export const Body = () => {
  //state cahnge by calling api
  const [lisOfRestaurant, setlistOfRestaurant] = useState([]); //main data  ---Reference which we wopont alter
  const [filteredRest, setFilteredRest] = useState([]); // filtered data
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
          <Link
            key={Restaurants.info.id}
            to={"/restaurants/" + Restaurants?.info.id} //routing to spectific path for  dynamic routing
          >
            <RestaurantCard RestaurantData={Restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
