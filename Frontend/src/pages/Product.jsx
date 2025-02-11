import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import BreadCrum from "../BreadCrum/BreadCrum";
import { ShopContext } from "../context/ShopContext";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Discription from "../Discription/Discription";
import Related from "../Relatedfolder/Related";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <Discription />
      <Related />
    </div>
  );
};

export default Product;
