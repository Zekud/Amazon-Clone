import React, { useState, useContext } from "react";
import "./auth.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Utilities/FirebaseConfig";
import { cartContext } from "../../components/ContextAPI/CartContext";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useContext(cartContext);
  async function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      if (e.target.name === "signin") {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          dispatch({ type: "Set_User", user: userCredential.user });
        } catch (error) {
          setError(error.message);
        }
      } else if (e.target.name === "create-account") {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          dispatch({ type: "Set_User", user: userCredential.user });
        } catch (error) {
          setError(error.message);
        }
      }
    } else {
      setError("Please fill all the fields");
    }
  }
  return (
    <section className="auth-container">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="signin-container">
        <h1>Sign In</h1>
        <form action="">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            name="signin"
            className="signin"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's clone Conditions of Use and
          Privacy Notice.
        </p>
        <button
          onClick={handleSubmit}
          name="create-account"
          className="create-account"
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
