import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id} className="card">
          <div>
            <img src={product.image} alt="#" />
          </div>
          <div className="card-description">
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
