import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import BuyPage from "./components/BuyPage";
import PurchasePageComponent from "./components/PurchasePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
          <div className="flex-1 overflow-y-auto px-0">
            <div className="relative mx-auto">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route
                  path="/pre-purchase-info"
                  element={<PurchasePageComponent />}
                />
              </Routes>
            </div>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
