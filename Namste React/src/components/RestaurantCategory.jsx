import ItemList from "./ItemList";
const RestaurantCategory = ({ itemList }) => {
  console.log("hello", itemList);
  return (
    <div>
      <div className="Head bg-amber-300 flex justify-between ">
        <span>{itemList?.card?.card?.title}</span>
        <span>🔽</span>
      </div>
      <div className="Content">
        {itemList?.card?.card?.itemCards?.map((x) => (
          <ItemList key={x?.card?.info?.id} data={x} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
