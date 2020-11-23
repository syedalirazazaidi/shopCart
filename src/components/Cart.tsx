import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
export default function Cart() {
  return (
    <div className="cart-container">
      <div>
        <p>No of item :</p>
        <p>Sub Total :</p>
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsBag
          className="abx"
          size="4rem"
          cursor="pointer"
          style={{ marginLeft: "5.4rem" }}
        />
      </div>
    </div>
  );
}
