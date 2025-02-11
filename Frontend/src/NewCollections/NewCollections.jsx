import React, { useEffect, useState } from "react";
import "./newCollections.css";
// import new_collections from "../assets/new_collections";
import Item from "../components/item/item";

const NewCollections = () => {
  const [new_collections, setnewcollections] = useState([]);

  useEffect(() => {
    fetch("https://frontend-e-commerce-mdgv.onrender.com/newcollections")
      .then((resp) => resp.json())
      .then((data) => {
        setnewcollections(data);
      });
  }, []);
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
