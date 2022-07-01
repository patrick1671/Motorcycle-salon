import React, { useState } from "react";
import Product from "./Product/Product";

const Photo = ({ model }: any) => {
  const [order, setOrder] = useState(model);
  //console.log(typeof model);

  return (
    <>
      {/* <div className="imageWrapper">
        <img alt="" src={order.photo} />
        <h1 className="model-title">{order.model}</h1>
        <span className="price">{order.price}</span>
  </div> */}
      <Product order={order} />
    </>
  );
};

export default Photo;
