import React, { useEffect, useContext } from "react";
import { cartContext } from "../ContextAPI/CartContext";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utilities/FirebaseConfig";

function ProtectedRoute({ children, msg, redirect }) {
  const { state } = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [state.user]);
  return children;
}

export default ProtectedRoute;
