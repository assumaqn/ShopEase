import { useContext, useState, createContext } from "react";

const productContext = createContext();
const BASEURL = `http://localhost:3000`;
function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  async function fetchProduct() {
    const resp = await fetch(`${BASEURL}/products`);
    const data = await resp.json();
    setProducts(data);
  }

  return (
    <productContext.Provider
      value={{
        fetchProduct,
        products,
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
