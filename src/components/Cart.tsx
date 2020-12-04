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
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(getCart.cart).forEach(function (item: any) {
    TotalCart += getCart.cart[item].quantity * getCart.cart[item].price;
    // ListCart.push(getCart.cart[item]);
  });
  return (
    <div className="cart-container">
      <div>
        <p>No of item : ({getCart.cart.length})</p>
        <p>Sub Total :{Number(TotalCart).toLocaleString("en-US")} $</p>
      </div>
      <div onClick={displayCart} style={{ cursor: "pointer" }}>
        <Link to="/showcart">
          <BsBag
            className="abx"
            size="3rem"
            cursor="pointer"
            style={{ marginLeft: "6.4rem" }}
          />
          <p style={{ position: "absolute", top: 110, right: 280 }}></p>
        </Link>
      </div>
    </div>
  );
}
