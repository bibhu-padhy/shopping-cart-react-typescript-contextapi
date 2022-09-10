import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { GlobalContext } from "./context/context";
function App() {
  return (
    <>
      <GlobalContext.Provider value={{ cartItems: [1, 2, 3] }}>
        <Navbar />
        <div className="container mx-auto px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
