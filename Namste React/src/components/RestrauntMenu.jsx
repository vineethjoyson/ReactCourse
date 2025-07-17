import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //to get the dynamic params
const RestaurantMenu = () => {
  const { resId } = useParams(); //to get the dynamic params----------------------->>>>>IMP
  console.log(resId);
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchResdata();
  }, []);

  const fetchResdata = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.51600&lng=76.21570&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonResp = await data.json();
    setResMenu(jsonResp.data);
  };
  if (resMenu == null) return <Shimmer />; //till its load
  const {
    name,
    city,
    avgRating,
    totalRatingsString,
    cuisines,
    costForTwoMessage,
  } = resMenu?.cards[2]?.card?.card.info;
  return (
    <div className="RestaurantCardMenu">
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{cuisines.join(",")}</h2>
      <h2>{avgRating}</h2>
      <h2>{totalRatingsString}</h2>
      <h2>Menu</h2>
      <ul>
        {resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (x) => (
            <li key={x.card.info.id}>---{x.card.info.name}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
