import { normalize } from "path";
import React from "react";
import { useHistory } from "react-router-dom";
import { v1 as uuidv1 } from "uuid";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { shoesReducerApp, shoesReducer } from "./Types/types";
import { deleteCart, increaseCart, decreaseCart } from "./Redux/CartSlice";

const Showcart = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const getCart: shoesReducer = useSelector(
    (state: shoesReducerApp) => state.reducers
  );
  const increaseItem = (id: number) => {
    dispatch(increaseCart(id));
  };

  const decreaseItem = (id: number) => {
    dispatch(decreaseCart(id));
  };
  const handleBack = () => {
    history.push("/");
  };

  const onDelete = (id: number) => {
    dispatch(deleteCart(id));
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
    const { name, price, id, quantity } = product;
    return (
      <div key={uuidv1()} className="showcartItm">
        <img src={product.photo} alt="name" />

        <div
          style={{
            fontSize: 10,
            fontWeight: "normal",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <div>
            <h3>{name}</h3>
            <h4>{(price * quantity).toFixed(2)}</h4>
          </div>
          <div style={{ marginTop: "20px", fontSize: "20px" }}>
            <div>({quantity})</div>
          </div>
        </div>
        {/* <div style={{ justifyContent: "space-around", display: "flex" }}>
          <button
            onClick={() => increaseItem(id)}
            style={{
              outline: "none",
              border: "none",

              cursor: "pointer",
            }}
          >
            <AiOutlinePlusCircle size="2rem" />
          </button>
          <p
            style={{
              color: "red",
              backgroundColor: "green",
              borderRadius: "50%",
              padding: ".5rem .8rem",
            }}
          >
            {quantity}
          </p>
          <div>
            <button
              onClick={() => decreaseItem(id)}
              style={{
                outline: "none",
                border: "none",
                // backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <AiOutlineMinusCircle size="2rem" />
            </button>
          </div>
        </div> */}

        <button
          style={{
            backgroundColor: "#532525",
            borderRadius: "4px",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px 10px",
            color: "red",
            marginTop: "10px",
            marginLeft: "165px",
            flexWrap: "wrap",
          }}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="footercart">
      <div className="cocktail-footer">
        <div className="cocktails-center">{allItem}</div>
      </div>
    </div>
  );
};
export default Showcart;
