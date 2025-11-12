import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { lazy, Suspense } from "react";
import { ProductProvider } from "./Contexts/ProductContext"; //thhso
import Spinner from "./Components/Spinner";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Profile = lazy(() => import("./pages/Profile"));
const Cart = lazy(() => import("./pages/Cart"));
const SignIn = lazy(() => import("./Components/SignIn"));
const SignUp = lazy(() => import("./Components/SignUp"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));
const CheckOut = lazy(() => import("./Components/CheckOut"));
const User = lazy(() => import("./Components/User"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
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
            <Route path="cart/checkout/PlaceOrder" element={<PlaceOrder />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
