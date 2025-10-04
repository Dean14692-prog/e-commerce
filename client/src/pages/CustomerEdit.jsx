// import React, { useState } from "react";
// import { useElectronics } from "./ElectronicsContext";
// import { useNavigate } from "react-router-dom";

// const CustomerDetailsEdit = () => {
//   const {
//     userAddress,
//     setUserAddress,
//     cart,
//     cartTotal,
//     deliveryFees,
//   } = useElectronics();

//   const navigate = useNavigate();

//   const [editAddress, setEditAddress] = useState(userAddress);

//   const handleChange = (e) => {
//     setEditAddress({ ...editAddress, [e.target.name]: e.target.value });
//   };

//   const handleSaveAddress = () => {
//     const newSummary = `${editAddress.address} | ${editAddress.city} | +254 ${editAddress.phone}`;

//     setUserAddress({
//       ...editAddress,
//       fullName: `${editAddress.firstName} ${editAddress.lastName}`,
//       addressSummary: newSummary,
//     });

//     navigate("/checkout");
//   };

//   const cartItemCount = cart ? cart.length : 0;
//   // Assuming a static tax rate for display purposes (5% mock tax from CheckoutSummaryPage)
//   const estimatedTaxes = cartTotal * 0.05;
//   const finalOrderTotal = cartTotal + deliveryFees + estimatedTaxes;

//   // Formatting values
//   const itemsTotalDisplay = cartTotal.toFixed(2);
//   const deliveryFeesDisplay = deliveryFees.toFixed(2);
//   const taxesDisplay = estimatedTaxes.toFixed(2);
//   const totalDisplay = finalOrderTotal.toFixed(2);

//   return (
//     <div className="bg-[#1a2037] min-h-screen p-4 md:p-8 font-sans">

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 mt-6">
//         {/* Main Content Area */}
//         <div className="lg:w-2/3 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
//           <div className="flex justify-end space-x-4 text-sm mb-4 border-b border-gray-700 pb-2">
//             <div className="flex items-center text-gray-400">
//               <span>
//                 Need Help?{" "}
//                 <a
//                   href="#"
//                   className="font-semibold text-orange-500 hover:text-orange-400"
//                 >
//                   Contact Us
//                 </a>
//               </span>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
//             CUSTOMER ADDRESS
//           </h2>

//           <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
//             <h3 className="text-lg font-semibold mb-6 text-white">
//               EDIT ADDRESS
//             </h3>

//             {/* Name Fields */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={editAddress.firstName || ""}
//                   onChange={handleChange}
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={editAddress.lastName || ""}
//                   onChange={handleChange}
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500"
//                 />
//               </div>
//             </div>

//             {/* Phone Number Fields */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Phone Number
//                 </label>
//                 <div className="flex">
//                   <span className="inline-flex items-center px-3 text-sm text-gray-400 bg-gray-700 border border-r-0 border-gray-600 rounded-l-md select-none">
//                     Prefix <strong className="ml-1 text-white">+254</strong>
//                   </span>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={editAddress.phone || ""}
//                     onChange={handleChange}
//                     className="flex-1 w-full p-3 bg-gray-700 border border-gray-600 rounded-r-md text-white focus:ring-orange-500 focus:border-orange-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Additional Phone Number
//                 </label>
//                 <div className="flex">
//                   <span className="inline-flex items-center px-3 text-sm text-gray-400 bg-gray-700 border border-r-0 border-gray-600 rounded-l-md select-none">
//                     Prefix <strong className="ml-1 text-white">+254</strong>
//                   </span>
//                   <input
//                     type="text"
//                     name="additionalPhone"
//                     value={editAddress.additionalPhone || ""}
//                     onChange={handleChange}
//                     className="flex-1 w-full p-3 bg-gray-700 border border-gray-600 rounded-r-md text-white focus:ring-orange-500 focus:border-orange-500"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Address Fields */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={editAddress.address || ""}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500"
//               />
//             </div>

//             {/* Additional Information */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-300 mb-1">
//                 Additional Information
//               </label>
//               <input
//                 type="text"
//                 name="additionalInfo"
//                 value={editAddress.additionalInfo || ""}
//                 onChange={handleChange}
//                 placeholder="Enter Additional Information"
//                 className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500"
//               />
//             </div>

//             {/* Region/City Selects */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Region
//                 </label>
//                 <select
//                   name="region"
//                   value={editAddress.region}
//                   onChange={handleChange}
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white appearance-none focus:ring-orange-500 focus:border-orange-500"
//                 >
//                   <option value="Nairobi">Nairobi</option>
//                   <option value="Kisumu">Kisumu</option>
//                   <option value="Mombasa">Mombasa</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   City
//                 </label>
//                 <select
//                   name="city"
//                   value={editAddress.city}
//                   onChange={handleChange}
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white appearance-none focus:ring-orange-500 focus:border-orange-500"
//                 >
//                   <option value="CBD - Luthuli/Afya Centre/ R. Ngala">
//                     CBD - Luthuli/Afya Centre/ R. Ngala
//                   </option>
//                   <option value="Westlands">Westlands</option>
//                 </select>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-end space-x-4 pt-4 border-t border-gray-700 mt-4">
//               <button
//                 type="button"
//                 onClick={() => navigate("/checkout")}
//                 className="px-6 py-2 text-gray-300 border border-gray-600 rounded-md hover:bg-gray-700 transition-colors font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSaveAddress}
//                 className="px-6 py-2 font-semibold transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-md shadow-lg hover:shadow-orange-500/25"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Order Summary Sidebar */}
//         <div className="lg:w-1/3">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 sticky top-24">
//             <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-3">
//               Order Summary
//             </h3>

//             <div className="space-y-3 pb-4">
//               {/* 🟢 DYNAMIC ITEMS TOTAL */}
//               <div className="flex justify-between items-center text-gray-300">
//                 <span>Items ({cartItemCount})</span>
//                 <span className="font-medium text-white">
//                   ${itemsTotalDisplay}
//                 </span>
//               </div>
//               {/* 🟢 DYNAMIC DELIVERY FEES */}
//               <div className="flex justify-between items-center text-gray-300">
//                 <span>Shipping & Handling</span>
//                 <span className="font-medium text-white">
//                   ${deliveryFeesDisplay}
//                 </span>
//               </div>
//               {/* 🟢 DYNAMIC ESTIMATED TAX */}
//               <div className="flex justify-between items-center text-gray-300">
//                 <span>Estimated Tax</span>
//                 <span className="font-medium text-white">${taxesDisplay}</span>
//               </div>
//             </div>

//             <div className="flex justify-between items-center text-lg font-bold border-t border-gray-700 pt-4 mt-4">
//               <span className="text-xl font-bold text-white">Order Total:</span>
//               {/* 🟢 DYNAMIC ORDER TOTAL */}
//               <span className="text-3xl font-extrabold text-orange-500">
//                 ${totalDisplay}
//               </span>
//             </div>


//             <button
//               className={`w-full py-4 mt-6 rounded-xl font-extrabold text-lg transition-all duration-200 shadow-xl ${
//                 cartItemCount > 0
//                   ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:shadow-green-500/25 transform hover:scale-[1.02]"
//                   : "bg-gray-600 text-gray-400 cursor-not-allowed"
//               }`}
//               disabled={cartItemCount === 0}
//             >
//               Place Your Order
//             </button>

//             <p className="text-xs text-gray-400 mt-3 text-center">
//               By placing your order, you agree to our terms and conditions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerDetailsEdit;

import React, { useState } from "react";
import { useElectronics } from "./ElectronicsContext";
import { useNavigate } from "react-router-dom";

const CustomerDetailsEdit = () => {
  const { userAddress, setUserAddress, cart, cartTotal, deliveryFees } =
    useElectronics();

  const navigate = useNavigate();

  const [editAddress, setEditAddress] = useState(userAddress);

  const handleChange = (e) => {
    setEditAddress({ ...editAddress, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = () => {
    const newSummary = `${editAddress.address} | ${editAddress.city} | +254 ${editAddress.phone}`;

    setUserAddress({
      ...editAddress,
      fullName: `${editAddress.firstName} ${editAddress.lastName}`,
      addressSummary: newSummary,
    });

    navigate("/checkout");
  };

  const cartItemCount = cart ? cart.length : 0;
  // Assuming a static tax rate for display purposes (5% mock tax from CheckoutSummaryPage)
  const estimatedTaxes = cartTotal * 0.05;
  const finalOrderTotal = cartTotal + deliveryFees + estimatedTaxes;

  // Formatting values
  const itemsTotalDisplay = cartTotal.toFixed(2);
  const deliveryFeesDisplay = deliveryFees.toFixed(2);
  const taxesDisplay = estimatedTaxes.toFixed(2);
  const totalDisplay = finalOrderTotal.toFixed(2);

  return (
    <div className="bg-[#1a2037] min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 mt-6">
        {/* Main Content Area */}
        <div className="lg:w-2/3 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <div className="flex justify-end space-x-4 text-sm mb-4 border-b border-gray-700 pb-2">
            <div className="flex items-center text-gray-400">
              <span>
                Need Help?{" "}
                <a
                  href="#"
                  className="font-semibold text-orange-500 hover:text-orange-400"
                >
                  Contact Us
                </a>
              </span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            CUSTOMER ADDRESS
          </h2>

          <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-6 text-white">
              EDIT ADDRESS
            </h3>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={editAddress.firstName || ""}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={editAddress.lastName || ""}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            {/* Email Address Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={editAddress.email || ""}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Phone Number Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-400 bg-gray-700 border border-r-0 border-gray-600 rounded-l-md select-none">
                    Prefix <strong className="ml-1 text-white">+254</strong>
                  </span>
                  <input
                    type="text"
                    name="phone"
                    value={editAddress.phone || ""}
                    onChange={handleChange}
                    className="flex-1 w-full p-3 bg-gray-700 border border-gray-600 rounded-r-md text-white focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Additional Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-400 bg-gray-700 border border-r-0 border-gray-600 rounded-l-md select-none">
                    Prefix <strong className="ml-1 text-white">+254</strong>
                  </span>
                  <input
                    type="text"
                    name="additionalPhone"
                    value={editAddress.additionalPhone || ""}
                    onChange={handleChange}
                    className="flex-1 w-full p-3 bg-gray-700 border border-gray-600 rounded-r-md text-white focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Address Fields */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={editAddress.address || ""}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Additional Information */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Additional Information
              </label>
              <input
                type="text"
                name="additionalInfo"
                value={editAddress.additionalInfo || ""}
                onChange={handleChange}
                placeholder="Enter Additional Information"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* 🟢 MODIFIED: Region/City Inputs (Removed Dropdowns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Region
                </label>
                <input
                  type="text"
                  name="region"
                  value={editAddress.region || ""}
                  onChange={handleChange}
                  placeholder="Enter your region (e.g., Nairobi)"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={editAddress.city || ""}
                  onChange={handleChange}
                  placeholder="Enter your city (e.g., Westlands)"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            {/* 🟢 END MODIFIED SECTION */}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-700 mt-4">
              <button
                type="button"
                onClick={() => navigate("/checkout")}
                className="px-6 py-2 text-gray-300 border border-gray-600 rounded-md hover:bg-gray-700 transition-colors font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveAddress}
                className="px-6 py-2 font-semibold transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-md shadow-lg hover:shadow-orange-500/25"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 sticky top-24">
            <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 pb-4">
              {/* 🟢 DYNAMIC ITEMS TOTAL */}
              <div className="flex justify-between items-center text-gray-300">
                <span>Items ({cartItemCount})</span>
                <span className="font-medium text-white">
                  ${itemsTotalDisplay}
                </span>
              </div>
              {/* 🟢 DYNAMIC DELIVERY FEES */}
              <div className="flex justify-between items-center text-gray-300">
                <span>Shipping & Handling</span>
                <span className="font-medium text-white">
                  ${deliveryFeesDisplay}
                </span>
              </div>
              {/* 🟢 DYNAMIC ESTIMATED TAX */}
              <div className="flex justify-between items-center text-gray-300">
                <span>Estimated Tax</span>
                <span className="font-medium text-white">${taxesDisplay}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-lg font-bold border-t border-gray-700 pt-4 mt-4">
              <span className="text-xl font-bold text-white">Order Total:</span>
              {/* 🟢 DYNAMIC ORDER TOTAL */}
              <span className="text-3xl font-extrabold text-orange-500">
                ${totalDisplay}
              </span>
            </div>

            <button
              className={`w-full py-4 mt-6 rounded-xl font-extrabold text-lg transition-all duration-200 shadow-xl ${
                cartItemCount > 0
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:shadow-green-500/25 transform hover:scale-[1.02]"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              disabled={cartItemCount === 0}
            >
              Place Your Order
            </button>

            <p className="text-xs text-gray-400 mt-3 text-center">
              By placing your order, you agree to our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsEdit;