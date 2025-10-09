import { useContext, useState, createContext } from "react";

const productContext = createContext();
const BASEURL = `http://localhost:3000`;
function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
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
    try {
      setIsloading(true);
      const resp = await fetch(`${BASEURL}/products`);
      const data = await resp.json();
      setProducts(data);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <productContext.Provider
      value={{
        fetchProduct,
        products,
        featureProduct,
        isLoading,
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
