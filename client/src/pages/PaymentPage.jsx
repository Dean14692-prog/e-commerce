import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useElectronics } from "./ElectronicsContext";

const CustomToast = ({ message, isVisible, onDismiss }) => {
  if (!isVisible) return null;

  return (
    <div

      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white p-4 rounded-lg shadow-2xl border border-orange-500 transition-opacity duration-300"
      role="alert"
      >
          
      <div className="flex items-center">
        <svg
          // 🟢 Changed text-green-400 to text-orange-500 for the icon color
          className="w-5 h-5 mr-3 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <p className="font-medium text-white">{message}</p>{" "}
        {/* Ensured message text is white */}
        <button
          onClick={onDismiss}
          className="ml-4 text-gray-400 hover:text-white"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
// -----------------------------------------------------------

const OrderSuccessPage = () => {
  const { cart, cartTotal, deliveryFees, userAddress } = useElectronics();
  const navigate = useNavigate();

  const [toast, setToast] = useState({ isVisible: false, message: "" });

  const estimatedTaxes = cartTotal * 0.05;
  const finalOrderTotal = cartTotal + deliveryFees + estimatedTaxes;

  const handleSTKPush = () => {
    const phoneNumber = userAddress.phone;

    if (!phoneNumber) {
      setToast({
        isVisible: true,
        message: "Error: Phone number is missing in customer details.",
      });
      // Automatically hide the toast after 5 seconds
      setTimeout(() => {
        setToast({ isVisible: false, message: "" });
      }, 5000);
      return;
    }

    const message = `M-Pesa STK Push of $${finalOrderTotal.toFixed(
      2
    )} initiated to +254${phoneNumber}. Check your phone for the prompt.`;

    setToast({ isVisible: true, message });

    // Automatically hide the toast after 5 seconds
    setTimeout(() => {
      setToast({ isVisible: false, message: "" });
    }, 5000);

    // ⚠️ Real STK Push API call would go here
  };

  const dismissToast = () => {
    setToast({ isVisible: false, message: "" });
  };

  // Dummy finalize handler for completeness
  const handleFinalize = () => {
    // In a real scenario, you'd check the payment status and then navigate.
    alert("Simulating Check Status. Navigating to Order History.");
    // navigate("/order-history");
  };

  return (
    <div className="min-h-screen bg-[#1a2037] p-4 md:p-8 flex items-center justify-center font-sans">
      <div className="max-w-xl w-full bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-8 text-center">
        <div className="mx-auto w-24 h-24 flex items-center justify-center bg-green-500 rounded-full mb-6">
          <svg
            className="w-16 h-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 mb-2">
          Order Ready for Payment
        </h1>
        <p className="text-gray-300 text-xl font-semibold mb-6">
          Hello,{" "}
          <span className="text-white">
            {userAddress.fullName || "Customer"}
          </span>
          ! Please finalize your payment.
        </p>

        {/* 1. AMOUNT SUMMARY */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700">
          <p className="text-sm font-medium text-gray-400 mb-1">
            Total Amount Due
          </p>
          <p className="text-5xl font-extrabold text-orange-500 mb-4">
            ${finalOrderTotal.toFixed(2)}
          </p>
          <p className="text-gray-400 text-sm">
            We are awaiting payment confirmation for this order.
          </p>
        </div>

        {/* 2. STK PUSH BUTTON */}
        <button
          onClick={handleSTKPush}
          className="w-full py-3 mb-6 rounded-xl font-extrabold text-lg transition-all duration-200 shadow-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:shadow-green-500/25 transform hover:scale-[1.01]"
        >
          Initiate M-Pesa STK Push
        </button>

        
      </div>

      {/* TOAST RENDER */}
      <CustomToast
        message={toast.message}
        isVisible={toast.isVisible}
        onDismiss={dismissToast}
      />
    </div>
  );
};

export default OrderSuccessPage;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useElectronics } from "./ElectronicsContext";

// const CustomToast = ({ message, isVisible, onDismiss }) => {
//   if (!isVisible) return null;

//   return (
//     <div
//       // Toast at the top with white text and orange border
//       className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white p-4 rounded-lg shadow-2xl border border-orange-500 transition-opacity duration-300"
//       role="alert"
//     >
//       <div className="flex items-center">
//         <svg
//           // Icon color orange-500
//           className="w-5 h-5 mr-3 text-orange-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M13 10V3L4 14h7v7l9-11h-7z"
//           />
//         </svg>
//         <p className="font-medium text-white">{message}</p>
//         <button
//           onClick={onDismiss}
//           className="ml-4 text-gray-400 hover:text-white"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };
// // -----------------------------------------------------------

// const OrderSuccessPage = () => {
//   const { cart, cartTotal, deliveryFees, userAddress } = useElectronics();
//   const navigate = useNavigate();

//   const [toast, setToast] = useState({ isVisible: false, message: "" });

//   const estimatedTaxes = cartTotal * 0.05;
//   const finalOrderTotal = cartTotal + deliveryFees + estimatedTaxes;

//   const handleSTKPush = () => {
//     const phoneNumber = userAddress.phone;

//     if (!phoneNumber) {
//       setToast({
//         isVisible: true,
//         message: "Error: Phone number is missing in customer details.",
//       });
//       setTimeout(() => {
//         setToast({ isVisible: false, message: "" });
//       }, 5000);
//       return;
//     }

//     const message = `M-Pesa STK Push of $${finalOrderTotal.toFixed(
//       2
//     )} initiated to +254${phoneNumber}. Check your phone for the prompt.`;

//     setToast({ isVisible: true, message });

//     setTimeout(() => {
//       setToast({ isVisible: false, message: "" });
//     }, 5000);

//     // ⚠️ Real STK Push API call would go here
//   };

//   const dismissToast = () => {
//     setToast({ isVisible: false, message: "" });
//   };

//   // Dummy finalize handler for completeness
//   const handleFinalize = () => {
//     alert("Simulating Check Status. Navigating to Order History.");
//     // navigate("/order-history");
//   };

//   // 🟢 NEW HANDLER for back navigation
//   const handleBackToInvoice = () => {
//     navigate("/invoice");
//   };

//   return (
//     <div className="min-h-screen bg-[#1a2037] p-4 md:p-8 flex items-center justify-center font-sans">
//       <div className="max-w-xl w-full bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-8 text-center">
//         {/* Success Icon - Updated to Orange-500 */}
//         <div className="mx-auto w-24 h-24 flex items-center justify-center bg-orange-500 rounded-full mb-6">
//           <svg
//             className="w-16 h-16 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>

//         <h1 className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-2">
//           {" "}
//           {/* Changed text-green-400 to text-orange-400 */}
//           Order Ready for Payment
//         </h1>
//         <p className="text-gray-300 text-xl font-semibold mb-6">
//           Hello,{" "}
//           <span className="text-white">
//             {userAddress.fullName || "Customer"}
//           </span>
//           ! Please finalize your payment.
//         </p>

//         {/* 1. AMOUNT SUMMARY */}
//         <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700">
//           <p className="text-sm font-medium text-gray-400 mb-1">
//             Total Amount Due
//           </p>
//           <p className="text-5xl font-extrabold text-orange-500 mb-4">
//             ${finalOrderTotal.toFixed(2)}
//           </p>
//           <p className="text-gray-400 text-sm">
//             We are awaiting payment confirmation for this order.
//           </p>
//         </div>

//         {/* 2. STK PUSH BUTTON - Updated to Orange-500/600 gradient */}
//         <button
//           onClick={handleSTKPush}
//           className="w-full py-3 mb-6 rounded-xl font-extrabold text-lg transition-all duration-200 shadow-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:shadow-orange-500/25 transform hover:scale-[1.01]"
//         >
//           Initiate M-Pesa STK Push
//         </button>

//         {/* Manual Payment Instructions - Re-added to complete the previous section */}

//         {/* Action Buttons */}
//         {/* <div className="space-y-4">

//           <button
//             onClick={handleBackToInvoice} // 🟢 NEW BUTTON
//             className="w-full text-gray-400 hover:text-orange-500 text-sm font-semibold transition-colors py-3 border border-gray-700 rounded-xl block text-center"
//           >
//             Back to Invoice
//           </button>
//           <Link
//             to="/electronics"
//             className="w-full text-gray-400 hover:text-orange-500 text-sm font-semibold transition-colors py-3 border border-gray-700 rounded-xl block text-center"
//           >
//             Return to Shop
//           </Link>
//         </div> */}
//       </div>

//       {/* TOAST RENDER */}
//       <CustomToast
//         message={toast.message}
//         isVisible={toast.isVisible}
//         onDismiss={dismissToast}
//       />
//     </div>
//   );
// };

// export default OrderSuccessPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useElectronics } from "./ElectronicsContext";

// // 🔸 Custom Toast Component
// const CustomToast = ({ message, isVisible, onDismiss }) => {
//   if (!isVisible) return null;

//   return (
//     <div
//       className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white p-4 rounded-lg shadow-2xl border border-orange-500 transition-opacity duration-300"
//       role="alert"
//     >
//       <div className="flex items-center">
//         <svg
//           className="w-5 h-5 mr-3 text-orange-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M13 10V3L4 14h7v7l9-11h-7z"
//           />
//         </svg>
//         <p className="font-medium text-white">{message}</p>
//         <button
//           onClick={onDismiss}
//           className="ml-4 text-gray-400 hover:text-white"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// // -----------------------------------------------------------

// const OrderSuccessPage = () => {
//   const { cart, cartTotal, deliveryFees, userAddress } = useElectronics();
//   const navigate = useNavigate();

//   const [toast, setToast] = useState({ isVisible: false, message: "" });

//   const estimatedTaxes = cartTotal * 0.05;
//   const finalOrderTotal = cartTotal + deliveryFees + estimatedTaxes;

//   const handleSTKPush = () => {
//     const phoneNumber = userAddress.phone;

//     if (!phoneNumber) {
//       setToast({
//         isVisible: true,
//         message: "Error: Phone number is missing in customer details.",
//       });
//       setTimeout(() => setToast({ isVisible: false, message: "" }), 5000);
//       return;
//     }

//     const message = `M-Pesa STK Push of $${finalOrderTotal.toFixed(
//       2
//     )} initiated to +254${phoneNumber}. Check your phone for the prompt.`;

//     setToast({ isVisible: true, message });
//     setTimeout(() => setToast({ isVisible: false, message: "" }), 5000);
//   };

//   const dismissToast = () => {
//     setToast({ isVisible: false, message: "" });
//   };

//   // ✅ New: Back arrow to navigate to /invoice
//   const handleBack = () => {
//     navigate("/invoice");
//   };

//   return (
//     <div className="min-h-screen bg-[#1a2037] p-4 md:p-8 flex items-center justify-center font-sans relative">
//       {/* 🔙 BACK ARROW */}
//       <button
//         onClick={handleBack}
//         className="absolute top-6 left-6 flex items-center text-gray-400 hover:text-orange-500 transition-colors"
//       >
//         <svg
//           className="w-6 h-6 mr-1"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M10 19l-7-7m0 0l7-7m-7 7h18"
//           />
//         </svg>
//         <span className="font-semibold">Back to Invoice</span>
//       </button>

//       <div className="max-w-xl w-full bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-8 text-center">
//         {/* ✅ Success icon */}
//         <div className="mx-auto w-24 h-24 flex items-center justify-center bg-green-500 rounded-full mb-6">
//           <svg
//             className="w-16 h-16 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>

//         <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 mb-2">
//           Order Ready for Payment
//         </h1>

//         <p className="text-gray-300 text-xl font-semibold mb-6">
//           Hello,{" "}
//           <span className="text-white">
//             {userAddress.fullName || "Customer"}
//           </span>
//           ! Please finalize your payment.
//         </p>

//         {/* 💰 Amount Summary */}
//         <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700">
//           <p className="text-sm font-medium text-gray-400 mb-1">
//             Total Amount Due
//           </p>
//           <p className="text-5xl font-extrabold text-orange-500 mb-4">
//             ${finalOrderTotal.toFixed(2)}
//           </p>
//           <p className="text-gray-400 text-sm">
//             We are awaiting payment confirmation for this order.
//           </p>
//         </div>

//         {/* 🔘 M-Pesa Button */}
//         <button
//           onClick={handleSTKPush}
//           className="w-full py-3 mb-6 rounded-xl font-extrabold text-lg transition-all duration-200 shadow-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:shadow-green-500/25 transform hover:scale-[1.01]"
//         >
//           Initiate M-Pesa STK Push
//         </button>
//       </div>

//       {/* ✅ Toast */}
//       <CustomToast
//         message={toast.message}
//         isVisible={toast.isVisible}
//         onDismiss={dismissToast}
//       />
//     </div>
//   );
// };

// export default OrderSuccessPage;
