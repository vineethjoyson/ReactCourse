import { useState, useEffect } from "react";
import { restaurantDetailsUri } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchResdata();
  }, []);

  const fetchResdata = async () => {
    const data = await fetch(restaurantDetailsUri + resId);
    const jsonResp = await data.json();
    setResMenu(jsonResp.data);
  };
  return resMenu;
};
export default useRestaurantMenu;
