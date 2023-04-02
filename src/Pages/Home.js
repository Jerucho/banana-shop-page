import React from "react";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="bg-background-plants bg-cover h-screen bg-top">
      <Navbar />
      <h1 className="text-center my-10">
        It's one banana, Michael. What could it cost, Ten dollars?
      </h1>
    </div>
  );
}
