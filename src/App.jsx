import "./app.scss";
import Routing from "./Router";
import { useContext, useEffect } from "react";
import { cartContext } from "./components/ContextAPI/CartContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utilities/FirebaseConfig";

function App() {
  const { dispatch } = useContext(cartContext);
  useEffect(() => {
    return () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch({ type: "Set_User", user: user });
        } else {
          dispatch({ type: "Set_User", user: null });
        }
      });
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
