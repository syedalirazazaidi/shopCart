import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
interface propSh {
  id: number;
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

export const ShoeList = ({ id, name, photo, price, quantity }: propSh) => {
  const dispatch = useDispatch();
  const addToCart = (id: number) => {
    console.log(id);
  };
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
              onClick={() => dispatch(addToCart(id))}
              style={{
                padding: ".5rem",
                border: "none",
                borderRadius: ".3rem",
                backgroundColor: "#bce6eb",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Add To Cart
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
