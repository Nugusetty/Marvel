import React from "react";
// import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "../App.css";

function Home() {
  return (
    <div className="Continer">
      <h1>Welcome to React JS APP..!</h1>
      <div className="Continer1">
        <Login />
        <Signup />
      </div>
      {/* <div className="button">
        <div className="col-6 mb-3">
          <Link to="./Login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>

        <div className="col-6">
          <Link to="./Signup">
            <button className="btn btn-primary">SignUp</button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
