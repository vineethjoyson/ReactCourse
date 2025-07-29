import { hotelMenuImg } from "../utils/constants";
const CartList = ({ cartItems }) => {
  console.log("cartItems>>>>", cartItems);
  return (
    <div className=" border-gray-300 border-b-2 flex justify-between px-4 ">
      <div className="w-7/12 p-2 rounded-2xl">
        <img
          className="cartDataImg w-3/12 mb-2 "
          src={hotelMenuImg + cartItems?.card?.info?.imageId}
          alt=""
        />
      </div>
      <div>
        <p>Price: {cartItems?.card?.info?.price / 100}₹</p>
      </div>
    </div>
  );
};

export default CartList;
