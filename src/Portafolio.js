import React from "react";
import { About } from "./components/hero/About";
import { Form } from "./components/hero/Form/Form.jsx";
import { Home } from "./components/hero/Home";
import { Proyects } from "./components/hero/Proyects/Proyects";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/hero/Footer";

export const Portafolio = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Proyects />
      <Form />
      <Footer />
    </>
  );
};
