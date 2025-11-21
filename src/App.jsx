import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { lazy, Suspense } from "react";
import { ProductProvider } from "./Contexts/ProductContext"; //thhso
import Spinner from "./ui/Spinner";
const Home = lazy(() => import("./features/home/Home"));
const About = lazy(() => import("./features/about/About"));
const Products = lazy(() => import("./features/product/Products"));
const FAQ = lazy(() => import("./features/faq/FAQ"));
const Profile = lazy(() => import("./features/profile/Profile"));
const Cart = lazy(() => import("./features/cart/Cart"));
const SignIn = lazy(() => import("./features/profile/SignIn"));
const SignUp = lazy(() => import("./features/profile/SignUp"));
const ProductDetail = lazy(() => import("./features/product/ProductDetail"));
const CheckOut = lazy(() => import("./features/cart/CheckOut"));
const User = lazy(() => import("./features/user/User"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));
const PlaceOrder = lazy(() => import("./features/cart/PlaceOrder"));

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
