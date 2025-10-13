import { useContext, createContext, useReducer } from "react";

const productContext = createContext();
const BASEURL = `http://localhost:3000/products`;
const initalState = {
  products: [],
  product: {},
  cartedProduct: [],
  isLoading: false,
  totalPrice: 0,
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
    case "cart/added":
      return {
        ...state,
        isLoading: false,
        cartedProduct: state.cartedProduct.some(
          (cart) => cart.id === action.payload.id
        )
          ? state.cartedProduct
          : [
              ...state.cartedProduct,
              {
                ...action.payload,
                quantity: 1,
                totalPrice: action.payload.price,
              },
            ],
      };

    case "cart/delete":
      return {
        ...state,
        isLoading: false,
        cartedProduct: state.cartedProduct.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "item/increase":
      return {
        ...state,
        cartedProduct: state.cartedProduct.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        ),
      };
    case "item/decrease":
      return {
        ...state,
        cartedProduct: state.cartedProduct.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                totalPrice:
                  (item.quantity > 1 ? item.quantity - 1 : 1) * item.price,
              }
            : item
        ),
      };
    case "total":
      return { ...state, totalPrice: action.payload };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default: {
      throw new Error("Unkonwn action");
    }
  }
}

function ProductProvider({ children }) {
  const [{ products, product, error, isLoading, cartedProduct }, dispatch] =
    useReducer(reducer, initalState);
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

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
  const subTotal = cartedProduct
    .map((item) => item.totalPrice)
    .reduce((accu, cur) => accu + cur, 0);
  const shipping =
    subTotal > 1000 ? 0 : (subTotal * 0.05).toLocaleString("en-US");
  const tax = subTotal * 0.12;
  const total = subTotal + tax + Number(shipping);

  const featureProduct = shuffleArray(products).slice(0, 6);

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
        dispatch,
        cartedProduct,
        subTotal,
        tax,
        total,
        shipping,
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
