import { shoesType } from "./Types/types";

export const getStoreData = async (): Promise<shoesType[]> => {
  const res = await fetch("/api/shoes");
  let shoes = await res.json().then((res) => res);
  console.log(shoes);

  return shoes;
};
