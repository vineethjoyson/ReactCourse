import CartList from "./CartList";
import sum from "../utils/sum";
import { useSelector } from "react-redux"; //for recieveing or reading Redux state we use this we need to sunscribe this
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" w-6/12 mx-auto my-4 bg-gray-200 rounded-2xl shadow-2xl min-h-screen">
      <div className=" Head text-center font-bold text-xl">My Cart🛒</div>
      <div className="w-1/12 mx-auto">
        <button
          className=" Head text-center font-bold text-xl bg-black text-white px-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>
      {cartItems.length == 0 && <p>Crat is empty</p>}
      <div>
        {cartItems.map((x, index) => (
          <CartList key={index} cartItems={x} />
        ))}
      </div>
      <div className="w-6/12 mx-80">total: {sum(cartItems)}₹</div>
    </div>
  );
};
export default Cart;
