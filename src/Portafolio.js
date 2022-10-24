import React from "react";
import { About } from "./components/hero/About";
import { Home } from "./components/hero/Home";
import { NavBar } from "./components/navBar/NavBar";

export const Portafolio = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
    </>
  );
};