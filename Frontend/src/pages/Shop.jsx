import React from "react";
import Hero from "../components/assetPage/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offeres/Offers";
import NewCollections from "../NewCollections/NewCollections";
import NewaLetter from "../NewsLetter/NewaLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewaLetter />
    </div>
  );
};

export default Shop;
