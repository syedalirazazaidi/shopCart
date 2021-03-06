import React, { useRef } from "react";
import Loader from "react-loader-spinner";

import { getStoreData } from "../api";
import { shoesType } from "../Types/types";
import { ShoeList } from "./ShoeList";
export const Home = () => {
  const [shoes, setShoesData] = React.useState<shoesType[]>([]);
  const [loading, setLoading] = React.useState(false);

  const [searchTerm, setSearchTerm] = React.useState("a");
  const searchValue = useRef<HTMLInputElement>(null);
  // function searchCocktail() {}

  const searchProduct = () => {
    if (searchValue.current) {
      setSearchTerm(searchValue.current.value);
      console.log(searchValue.current, "VALUE");
      // inputEl.current.focus();
      searchValue.current.focus();
    }
  };
  React.useEffect(() => {
    searchProduct();
  }, []);
  let fetchData = async () => {
    const getShoes: shoesType[] = await getStoreData();
    setShoesData(getShoes);
  };
  React.useEffect(() => {
    fetchData();
  }, [searchTerm]);

  if (!shoes.length) {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "700px",
        }}
      >
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Shoes</h2>
      {/* <div className="search-div">
        <input
          type="text"
          placeholder="search a product"
          className="search-form"
          ref={searchValue}
          onChange={searchProduct}
        />
      </div> */}

      <div className="cocktails-center">
        {shoes.map((shoe) => {
          return <ShoeList key={shoe.id} shoes={shoe} />;
        })}
      </div>
    </section>
  );
};
