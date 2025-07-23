import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Body = () => {
  //state cahnge by calling api
  const [lisOfRestaurant, setlistOfRestaurant] = useState([]); //main data  ---Reference which we wopont alter
  const [filteredRest, setFilteredRest] = useState([]); // filtered data
  const [searchText, setsearchText] = useState("");
  const RestaurantIsOpen = withOpenedLabel(RestaurantCard); //higher orderComponents
  let apiResp;
  console.log(lisOfRestaurant);
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
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
      <div className="filter flex items-center">
        <div className="SearchBar py-3 m-3">
          <input
            className="border "
            type="text"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            placeholder="eg:cafe"
          />
          <button
            className="searchButton px-2 py-1 ml-3  bg-white shadow-xl hover:border hover:border-black-500 p-4 rounded-md"
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
          className="filter-btn px-2 py-1 ml-3  bg-white shadow-xl hover:border hover:border-black-500 p-4 rounded-md"
          onClick={() => {
            setFilteredRest(
              lisOfRestaurant.filter((x) => x.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestaurantsContainer flex flex-wrap hover:">
        {filteredRest.map((Restaurants) => (
          <Link
            key={Restaurants.info.id}
            to={"/restaurants/" + Restaurants?.info.id} //routing to spectific path for  dynamic routing
          >
            {Restaurants?.info.isOpen ? (
              <RestaurantIsOpen RestaurantData={Restaurants} /> //HigerOrder component take one componet and enhance it and and return another component
            ) : (
              <RestaurantCard RestaurantData={Restaurants} />
            )}

            {/* <RestaurantCard RestaurantData={Restaurants} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
