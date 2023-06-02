import React from "react";
import { Link } from "react-router-dom";
import FetchApi from "../ApiFetch/fetchApi";
import Contact from "./contact";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/contact">Contact</Link>
      <Link to="/FetchApi">FetchApi</Link>
    </div>
  );
};

export default Home;
