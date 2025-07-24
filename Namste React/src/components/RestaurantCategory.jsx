import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ itemList, menuListFlag, setShowIndex }) => {
  // const [menuListFlag, setMenuListFlag] = useState(false);   ------> we can use this but we are trying the concept Lifting the state up. So here what is the logic is if we click one all should collapse. we an use the state here if we want the control in this componet itself.henc e become uncontrolled component. Here this component behaviour is controlled by its parent funtion so its a controlled function
  const handleclick = () => {
    setShowIndex();
  };
  console.log("menuList", menuListFlag);
  return (
    <div className="mb-3 pb-2">
      <div
        className="Head flex justify-between py-4 cursor-pointer p-6 bg-white rounded shadow-lg"
        onClick={() => {
          handleclick();
        }}
      >
        <span className="font-bold px-6 shadow-2xl">
          {itemList?.card?.card?.title} (
          {itemList?.card?.card?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {menuListFlag && (
        <div className="Content">
          {itemList?.card?.card?.itemCards?.map((x) => (
            <ItemList key={x?.card?.info?.id} data={x} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
