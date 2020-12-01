import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { shoesType } from "../Types/types";
import { addToCart } from "../Redux/CartSlice";
import { shoesReducerApp, shoesReducer } from "../Types/types";
interface propSh {
  id: number;
  name: string;
  photo: string;
  price: number;
  quantity: number;
}
interface cartProp {
  shoes: shoesType;
}

export const ShoeList = ({ shoes }: cartProp) => {
  const [added, isAdded] = React.useState(false);
  const { id, name, photo, price, quantity } = shoes;

  const dispatch = useDispatch();
  const createCart = (shoes: propSh) => {
    dispatch(addToCart(shoes));
    isAdded(true);
    setTimeout(() => {
      isAdded(false);
    }, 2500);
  };

  const getCart: shoesReducer = useSelector(
    (state: shoesReducerApp) => state.reducers
  );
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={photo} alt="name" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{price}</h4>
        <div>
          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
              marginTop: "1rem",
              padding: "1rem",
              cursor: "pointer",
            }}
          >
            <button
              className="btn"
              onClick={() => createCart(shoes)}
              style={{
                padding: ".5rem",
                border: "none",
                borderRadius: ".3rem",
                backgroundColor: "#bce6eb",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {!added ? "ADD TO CART" : "✔ ADDED"}
            </button>
          </div>
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <AiOutlinePlusCircle size="2rem" />
            </button>
            <p>{}number</p>
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <AiOutlineMinusCircle size="2rem" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
