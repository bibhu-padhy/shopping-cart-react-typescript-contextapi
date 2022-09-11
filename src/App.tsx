import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { GlobalContextProvider } from "./context/context";

function App() {
  return (
    <GlobalContextProvider>
      <Navbar />
      <div className="container mx-auto px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
