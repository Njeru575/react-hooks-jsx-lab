import React from "react";


// Variables for name and city
const name = "Liza";
const city = "Newyork";

const Home = () => {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;
