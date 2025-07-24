import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //to get the dynamic params
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams(); //to get the dynamic params----------------------->>>>>IMP
  const [showIndex, setShowIndex] = useState(null); //lifting the state so control is on this component
  console.log(resId);
  const resMenu = useRestaurantMenu(resId); //custom hook here created acustom utility function just tyo call specified url
  if (resMenu == null) return <Shimmer />; //till its load
  // console.log("resmenu", resMenu);
  const {
    name,
    city,
    avgRating,
    totalRatingsString,
    cuisines,
    costForTwoMessage,
  } = resMenu?.cards[2]?.card?.card.info;
  const itemList =
    resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) =>
        x?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("itemLioist", itemList[0]);
  return (
    <div className="RestaurantCardMenu w-6/12 mx-auto my-4">
      <div className="heading text-center font-bold text-xl">
        <h1>{name}</h1>
        <h2>{costForTwoMessage}</h2>
        <h3>{cuisines.join(",")}</h3>
      </div>
      {itemList.map((x, index) => (
        <RestaurantCategory
          key={x?.card?.card?.categoryId}
          itemList={x}
          menuListFlag={showIndex == index ? true : false} //lifting the state
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)} //lifting the state----> this is for only opening one field at a time
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
