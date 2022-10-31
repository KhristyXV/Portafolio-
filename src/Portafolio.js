import React from "react";
import { About } from "./components/hero/About";
import { Form } from "./components/hero/Form";
import { Home } from "./components/hero/Home";
import { Proyects } from "./components/hero/Proyects";
import { NavBar } from "./components/navBar/NavBar";
import { Modals } from "./components/Modal.jsx/Modals";
import { Footer } from "./components/hero/Footer";

export const Portafolio = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Proyects />
      <Modals />
      <Form />
      <Footer />
    </>
  );
};
