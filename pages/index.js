import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

function IndexPage() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Intro />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
