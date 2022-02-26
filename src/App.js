import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Categories from "./Pages/Categories";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
