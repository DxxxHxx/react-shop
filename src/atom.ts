import { atom, selector, useRecoilCallback } from "recoil";
import { getAllProducts } from "./fetchData";

export interface IData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface IBasket {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  amount: number;
}
export const darkModAtom = atom({
  key: "isDark",
  default: !localStorage.getItem("theme") ? true : false,
  // default:true
});

export const allProducts = selector<IData[]>({
  key: "allProducts",
  get: async () => {
    return await getAllProducts();
  },
});

export const fashionSelector = selector<IData[]>({
  key: "fashionSelector",
  get: ({ get }) => {
    const products = get(allProducts);
    return products.filter((product) => product.category.includes("cloth"));
  },
});

export const jewelerySelector = selector<IData[]>({
  key: "jewelerySelector",
  get: ({ get }) => {
    const products = get(allProducts);
    return products.filter((product) => product.category === "jewelery");
  },
});

export const electronicsSelector = selector<IData[]>({
  key: "electronicsSelector",
  get: ({ get }) => {
    const products = get(allProducts);
    return products.filter((product) => product.category === "electronics");
  },
});

export const basketSelector = selector<IBasket[]>({
  key: "basket",
  get: ({ get }) => {
    const product = get(allProducts);
    const basket = product.map((item) => {
      return {
        ...item,
        amount: 0,
      };
    });

    return basket;
  },
});

export const basketState = atom<IBasket[]>({
  key: "basketState",
  default: JSON.parse(localStorage.getItem("cart")!) ?? basketSelector,
});

export const IncreaseItemAmount = (id: number) => {
  return useRecoilCallback(({ snapshot, set }) => async () => {
    const currentBasket = await snapshot.getPromise(basketState);
    const updatedBasket = currentBasket.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    set(basketState, updatedBasket);
  });
};

export const DecreaseItemAmount = (id: number) => {
  return useRecoilCallback(({ snapshot, set }) => async () => {
    const currentBasket = await snapshot.getPromise(basketState);
    const updatedBasket = currentBasket.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    });
    set(basketState, updatedBasket);
  });
};

export const DeleteAll = () => {
  return useRecoilCallback(({ snapshot, set }) => async () => {
    const currentBasket = await snapshot.getPromise(basketState);
    const updatedBasket = currentBasket.map((item) => {
      return {
        ...item,
        amount: 0,
      };
    });
    set(basketState, updatedBasket);
  });
};
