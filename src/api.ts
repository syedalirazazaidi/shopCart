import { shoesType } from "./Types/types";

export const getStoreData = async (): Promise<shoesType[]> => {
  const res = await fetch("/shoes");
  let shoes = await res.json().then((res) => res);

  return shoes;
};
