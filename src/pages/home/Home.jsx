import { Route, Routes, useLocation, useMatch } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Navbar />
        <Slider />
    </div>
  );
}

export default Home;
