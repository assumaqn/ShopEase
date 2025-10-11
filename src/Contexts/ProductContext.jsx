import { useContext, createContext, useReducer, useEffect } from "react";

const productContext = createContext();
const BASEURL = `http://localhost:3000/products`;
const initalState = {
  products: [],
  product: {},
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "product/loaded":
      return { ...state, isLoading: false, products: action.payload };
    case "productDetail/loaded":
      return { ...state, isLoading: false, product: action.payload };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default: {
      throw new Error("Unkonwn action");
    }
  }
}

function ProductProvider({ children }) {
  const [{ products, product, error, isLoading }, dispatch] = useReducer(
    reducer,
    initalState
  );
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const featureProduct = shuffleArray(products).slice(0, 6);

  async function fetchProduct() {
    dispatch({ type: "loading" });
    try {
      const resp = await fetch(`${BASEURL}`);
      const data = await resp.json();
      dispatch({ type: "product/loaded", payload: data });
    } catch (err) {
      dispatch({ type: "rejected", payload: err.message });
    }
  }
  async function fetchProductDetail(id) {
    dispatch({ type: "loading" });
    try {
      const resp = await fetch(`${BASEURL}/${id}`);
      const data = await resp.json();
      dispatch({ type: "productDetail/loaded", payload: data });
    } catch (err) {
      dispatch({ type: "rejected", payload: err.message });
    }
  }

  return (
    <productContext.Provider
      value={{
        fetchProduct,
        products,
        featureProduct,
        isLoading,
        product,
        fetchProductDetail,
        error,
      }}
    >
      {children}
    </productContext.Provider>
  );
}

function useProduct() {
  const context = useContext(productContext);
  if (context === undefined)
    throw new Error("useProduct must be used inside the provider");

  return context;
}
export { ProductProvider, useProduct };
