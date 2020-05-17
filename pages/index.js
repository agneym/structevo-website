import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";

function IndexPage() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
