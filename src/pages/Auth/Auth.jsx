import React, { useState, useContext } from "react";
import "./auth.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utilities/FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import ClipLoader from "react-spinners/ClipLoader";

function Auth() {
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signUp: false,
  });
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading({ ...loading, signin: false, signUp: false });
    if (email !== "" && password !== "") {
      if (e.target.name === "signin") {
        setLoading({ ...loading, signin: true });
        try {
          await signInWithEmailAndPassword(auth, email, password);
          //dispatch({ type: "Set_User", user: userCredential.user });
          setLoading({ ...loading, signin: false });
          navigate(state?.redirect ? state.redirect : "/");
        } catch (error) {
          setError("Incorrect Email or Password");
          setLoading({ ...loading, signin: false });
        }
      } else if (e.target.name === "create-account") {
        setLoading({ ...loading, signUp: true });
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          //dispatch({ type: "Set_User", user: userCredential.user });
          setLoading({ ...loading, signUp: false });
          navigate(state?.redirect ? state.redirect : "/");
        } catch (error) {
          if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            setError("Email Already in Use");
          } else if (
            error.message === "Firebase: Error (auth/invalid-email)."
          ) {
            setError("Invalid Email");
          } else {
            setError("Something went wrong");
          }
          setLoading({ ...loading, signUp: false });
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
        <div style={{ color: "red", textAlign: "center" }}>
          {state?.msg ? state.msg : ""}
        </div>
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
            {loading.signin ? (
              <ClipLoader color="white" size={20} />
            ) : (
              "Sign In"
            )}
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
          {loading.signUp ? (
            <ClipLoader color="white" size={20} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    </section>
  );
}

export default Auth;
