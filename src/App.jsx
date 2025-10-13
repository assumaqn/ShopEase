import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { ProductProvider } from "./Contexts/ProductContext";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ProductDetail from "./Components/ProductDetail";
import CheckOut from "./Components/CheckOut";
import User from "./Components/User";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/:id/:id" element={<ProductDetail />} />

          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products/:id/:id" element={<ProductDetail />} />

          <Route path="faq" element={<FAQ />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Navigate to="signin" replace />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="user" element={<User />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
