import CheckOut from "./components/CheckOut";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import { useDispatch, useSelector } from "react-redux";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { total } from "./components/State/Slice/CartSlice";
import { ItemDetails } from "./components/ItemDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.checkout);

  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  return (
    <Router>
      <div>
        <Navbar />
        {isOpen && <CheckOut />}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <ShoppingContainer />
              </div>
            }
          />
          <Route
            path="/ItemDetails/:id"
            element={<ItemDetails isOpen={isOpen} />} // Pass isOpen to ItemDetails
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
