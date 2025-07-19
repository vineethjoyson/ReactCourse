// element.addEventListener(event, callback, useCapture);
// Parameter	Description
// event	The name of the event (like 'click', 'submit', 'keydown')
// callback	The function to run when the event occurs
// useCapture	Optional; false by default; rarely used

//https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event   online event listener
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;
