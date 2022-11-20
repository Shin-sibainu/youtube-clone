import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "5.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "94.5vh" }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
