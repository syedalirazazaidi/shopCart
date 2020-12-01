import React from "react";
import Loader from "react-loader-spinner";

import { getStoreData } from "../api";
import { shoesType } from "../Types/types";
import { ShoeList } from "./ShoeList";
export const Home = () => {
  const [shoes, setShoesData] = React.useState<shoesType[]>([]);
  const [loading, setLoading] = React.useState(false);
  let fetchData = async () => {
    try {
      const getShoes: shoesType[] = await getStoreData();
      setShoesData(getShoes);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

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
      <div className="cocktails-center">
        {shoes.map((shoe) => {
          return <ShoeList key={shoe.id} shoes={shoe} />;
        })}
      </div>
    </section>
  );
};
