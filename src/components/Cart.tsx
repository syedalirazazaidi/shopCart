import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";

// import { CSSTransitionGroup } from "react-transition-group";
import { findDOMNode } from "react-dom";
// import { selectCount } from "../Redux/CartSlice";
import { shoesReducerApp, shoesReducer } from "../Types/types";
import { EmptyCart } from "./EmptyCart";
export default function Cart() {
  const getCart: shoesReducer = useSelector(
    (state: shoesReducerApp) => state.reducers
  );
  const [menu, showMenu] = React.useState(false);
  const displayCart = () => {
    showMenu(!menu);
  };
  return (
    <div className="cart-container">
      <div>
        <p>No of item :</p>
        <p>Sub Total :</p>
      </div>
      <div onClick={displayCart} style={{ cursor: "pointer" }}>
        <Link to="/showcart">
          {/* go to cart */}
          <BsBag
            className="abx"
            size="3rem"
            cursor="pointer"
            style={{ marginLeft: "6.4rem" }}
          />
          <p style={{ position: "absolute", top: 110, right: 280 }}>
            ({getCart.cart.length})
          </p>
        </Link>
      </div>
    </div>
  );
}
