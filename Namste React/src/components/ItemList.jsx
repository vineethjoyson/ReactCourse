import { useDispatch } from "react-redux"; //redux for dispatching an action
import { addItem } from "../utils/cartSlice"; //action
import { hotelMenuImg } from "../utils/constants";
const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div className="ItemConatiner p-4 text-left mx-2 border-gray-200 border-t-2 flex justify-between">
      <div className="w-5/12 p-2">
        <h2 className="font-bold">{data?.card?.info?.name}</h2>
        {data?.card?.info?.isVeg == 1 ? <span>🟢</span> : <span>🔴</span>}
        <h3 className="font-bold">
          ₹
          {data?.card?.info?.price / 100 ||
            data?.card?.info?.defaultPrice / 100}
          .00
        </h3>
        <p>{data?.card?.info?.description}</p>
      </div>
      <div className="w-4/12 p-2 rounded-2xl">
        <div className="absolute m-2 mx-3">
          <button
            className="text-green-500 border font-bold bg-white cursor-pointer  hover:bg-green-600  hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
            onClick={() => handleAddItem(data)}
          >
            Add+
          </button>
        </div>

        <img
          className="rounded-2xl"
          src={hotelMenuImg + data?.card?.info?.imageId}
          alt=""
        />
      </div>
    </div>
  );
};
export default ItemList;
