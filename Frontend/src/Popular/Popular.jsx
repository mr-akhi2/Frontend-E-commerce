import React, { useEffect, useState } from "react";
import "./Popular.css";
// import data_project from "../assets/data";
import Item from "../components/item/item";

const Popular = () => {
  const [data_project, setdata_project] = useState([]);

  useEffect(() => {
    fetch("https://frontend-e-commerce-mdgv.onrender.com/popularwomen")
      .then((resp) => resp.json())
      .then((data) => {
        setdata_project(data);
      });
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {data_project.map((item, index) => {
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

export default Popular;
