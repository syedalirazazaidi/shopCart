import { normalize } from "path";
import React from "react";
import { useHistory } from "react-router-dom";
import { v1 as uuidv1 } from "uuid";

import { useSelector } from "react-redux";
import { shoesReducerApp, shoesReducer } from "./Types/types";

const Showcart = () => {
  let history = useHistory();
  const getCart: shoesReducer = useSelector(
    (state: shoesReducerApp) => state.reducers
  );
  const handleBack = () => {
    history.push("/");
  };
  if (!getCart.cart.length) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "16rem",
          flexWrap: "wrap",
        }}
      >
        <h2>No item in the cart</h2>
        <button
          onClick={handleBack}
          style={{
            border: "none",
            padding: "7.4px",
            color: "green",
            borderRadius: "5px",
            position: "absolute",
            top: 370,
          }}
        >
          Go to Store
        </button>
      </div>
    );
  }
  const allItem = getCart.cart.map((product) => {
    const { name, price, id } = product;
    return (
      <div key={uuidv1()}>
        <img src={product.photo} alt="name" />

        <div style={{ fontSize: 10, fontWeight: "normal" }}>
          <h3>{name}</h3>
          <h4>{price}</h4>
        </div>
        <button
          style={{
            backgroundColor: "#fff",
            borderRadius: "4px",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
            color: "red",
          }}
          onClick={() => console.log("clear cart")}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    // <section className="section">
    // <article className="cocktail">
    <div>
      <div className="cocktail-footer">
        <div className="cocktails-center">{allItem}</div>;
      </div>
    </div>
    // </article>
    // </section>
  );
};
export default Showcart;
