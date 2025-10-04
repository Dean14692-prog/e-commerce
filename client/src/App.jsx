import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Electronics from "./pages/Electronics";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CartPage from "./pages/CartPage";
import CheckoutSummaryPage from "./pages/CheckoutSummaryPage";
import WishlistPage from "./pages/WishlistPage";
import { ElectronicsProvider } from "./pages/ElectronicsContext";
import CustomerDetailsEdit from "./pages/CustomerEdit";
import InvoicePage from "./pages/InvoicePage";
import OrderSuccessPage from "./pages/PaymentPage";

const App = () => {
  return (
    <BrowserRouter>

      <ElectronicsProvider>
          <div className="min-h-screen font-sans bg-[#1a2037]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/electronics" element={<Electronics />} />
              {/* <Route path="/clothings" element={<Clothings />} />{" "} */}

              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutSummaryPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route
                path="/Customer-details-editing"
                element={<CustomerDetailsEdit />}
              />
              <Route path="/invoice" element={<InvoicePage />} />
              <Route path="/payment" element={<OrderSuccessPage />} />
            </Routes>
          </div>
      </ElectronicsProvider>
    </BrowserRouter>
  );
};

export default App;