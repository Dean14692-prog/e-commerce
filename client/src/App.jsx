// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import HomePage from "./pages/HomePage";
// // import Electronics from "./pages/Electronics";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";

// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //       <div className="min-h-screen font-sans bg-[#1a2037]">
// //         <Navbar />

// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />
// //           <Route path="/electronics" element={<Electronics />} />
// //         </Routes>
// //       </div>
// //     </BrowserRouter>
// //   );
// // };

// // export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import Electronics from "./pages/Electronics"; 
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen font-sans bg-[#1a2037]">
//         {/* <Navbar /> */}
// {/* <Dashboard /> */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/electronics" element={<Electronics />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Electronics from "./pages/Electronics";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CartPage from "./pages/CartPage"; // New import
import CheckoutSummaryPage from "./pages/CheckoutSummaryPage"; // New import
import WishlistPage from "./pages/WishlistPage"; // New import
import { ElectronicsProvider } from "./pages/ElectronicsContext"; // New import
import CustomerDetailsEdit from "./pages/CustomerEdit";
import InvoicePage from "./pages/InvoicePage"; // Add this line

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
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutSummaryPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route
              path="/Customer-details-editing"
              element={<CustomerDetailsEdit />}
            />
            <Route path="/invoice" element={<InvoicePage />} />
          </Routes>
        </div>
      </ElectronicsProvider>
    </BrowserRouter>
  );
};

export default App;