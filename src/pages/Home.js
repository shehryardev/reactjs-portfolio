import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div className="bg-[#0d1117] h-[7000px] ">
      <div className="fixed w-full bg-[#0d1117]">
        <TopBar />
      </div>
      <br />
      <Header />
      <div class="fixed inset-x-0 bottom-0 bg-[#0d1117]">
        <Footer />{" "}
      </div>
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
