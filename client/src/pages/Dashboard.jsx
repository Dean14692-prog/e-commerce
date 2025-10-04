// import React, { useState, useEffect } from "react";
// import {
//   ShoppingCart,
//   Users,
//   DollarSign,
//   BarChart3,
//   Package,
//   AlertTriangle,
//   Truck,
//   Star,
//   Eye,
//   TrendingUp,
//   TrendingDown,
//   Bell,
//   Settings,
//   Search,
//   Zap,
//   Activity,
// } from "lucide-react";
// // Import recharts components
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// // Data for the new chart
// const monthlyRevenueData = [
//   { month: "Jan", revenue: 40000 },
//   { month: "Feb", revenue: 45000 },
//   { month: "Mar", revenue: 52000 },
//   { month: "Apr", revenue: 48000 },
//   { month: "May", revenue: 60000 },
//   { month: "Jun", revenue: 75000 },
//   { month: "Jul", revenue: 82000 },
//   { month: "Aug", revenue: 78000 },
//   { month: "Sep", revenue: 95000 },
//   { month: "Oct", revenue: 110000 },
//   { month: "Nov", revenue: 105000 },
//   { month: "Dec", revenue: 120000 },
// ];

// // Custom component for the chart
// const MonthlyRevenueChart = () => (
//   <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-orange-500/20 p-6 shadow-xl">
//     <h2 className="text-xl font-bold text-white mb-6 flex items-center">
//       <DollarSign className="h-5 w-5 text-orange-400 mr-2" />
//       ANNUAL REVENUE TREND
//     </h2>
//     <div className="h-96 w-full">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           data={monthlyRevenueData}
//           margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//           <XAxis dataKey="month" stroke="#9CA3AF" tickLine={false} />
//           <YAxis
//             stroke="#9CA3AF"
//             tickLine={false}
//             tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
//           />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: "rgba(31, 41, 55, 0.9)",
//               border: "1px solid #F97316",
//               borderRadius: "8px",
//               color: "white",
//             }}
//             // This formatter displays the revenue value on hover
//             formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
//             labelStyle={{ color: "#F97316" }}
//           />
//           <Line
//             type="monotone"
//             dataKey="revenue"
//             stroke="#F97316" // Solid Orange line
//             strokeWidth={3}
//             dot={{ r: 4, stroke: "#F97316", fill: "#FFF" }}
//             activeDot={{ r: 8 }}
//             // --- Added Animation Properties (Runs on Load/Mount) ---
//             animationDuration={1800} // Smooth animation over 1.8 seconds
//             animationEasing="ease-in-out"
//             isAnimationActive={true}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//     <p className="text-sm text-gray-400 mt-4 text-center">
//       Monthly gross revenue figures for the last fiscal year.
//     </p>
//   </div>
// );

// const Dashboard = () => {
//   const [timeframe, setTimeframe] = useState("7d");
//   const [currentTime, setCurrentTime] = useState(new Date());
//   // State for the specific orders search input remains functional
//   const [orderSearchQuery, setOrderSearchQuery] = useState("");

//   // Update time every second for futuristic feel
//   useEffect(() => {
//     // Load recharts dynamically (although typically done via npm, this ensures the single-file mandate works)
//     const script = document.createElement("script");
//     script.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/recharts/2.12.7/recharts.min.js";
//     script.async = true;
//     document.body.appendChild(script);

//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => {
//       clearInterval(timer);
//       document.body.removeChild(script); // Cleanup
//     };
//   }, []);

//   // Mock data with enhanced futuristic elements
//   const stats = {
//     totalRevenue: { value: "$124,582", change: "+12.5%", up: true },
//     totalOrders: { value: "2,847", change: "+8.3%", up: true },
//     totalCustomers: { value: "12,459", change: "+15.2%", up: true },
//     avgOrderValue: { value: "$87.34", change: "-3.1%", up: false },
//   };

//   const recentOrders = [
//     {
//       id: "#ORD-001",
//       customer: "John Smith",
//       amount: "$125.99",
//       status: "shipped",
//       date: "2 hours ago",
//     },
//     {
//       id: "#ORD-002",
//       customer: "Sarah Johnson",
//       amount: "$89.50",
//       status: "processing",
//       date: "5 hours ago",
//     },
//     {
//       id: "#ORD-003",
//       customer: "Mike Chen",
//       amount: "$234.75",
//       status: "delivered",
//       date: "1 day ago",
//     },
//     {
//       id: "#ORD-004",
//       customer: "Lisa Brown",
//       amount: "$156.25",
//       status: "pending",
//       date: "1 day ago",
//     },
//     {
//       id: "#ORD-005",
//       customer: "David Wilson",
//       amount: "$92.80",
//       status: "shipped",
//       date: "2 days ago",
//     },
//   ];

//   // Filter logic for recent orders remains functional
//   const filteredOrders = recentOrders.filter((order) => {
//     const query = orderSearchQuery.toLowerCase();
//     if (!query) return true;

//     return (
//       order.id.toLowerCase().includes(query) ||
//       order.customer.toLowerCase().includes(query) ||
//       order.amount.toLowerCase().includes(query) ||
//       order.status.toLowerCase().includes(query)
//     );
//   });

//   const topProducts = [
//     {
//       name: "Wireless Headphones",
//       sales: 324,
//       revenue: "$32,400",
//       stock: 45,
//     },
//     {
//       name: "Smart Watch",
//       sales: 298,
//       revenue: "$89,400",
//       stock: 12,
//     },
//     {
//       name: "Laptop Stand",
//       sales: 256,
//       revenue: "$12,800",
//       stock: 78,
//     },
//     {
//       name: "USB-C Cable",
//       sales: 189,
//       revenue: "$3,780",
//       stock: 156,
//     },
//     {
//       name: "Phone Case",
//       sales: 167,
//       revenue: "$4,175",
//       stock: 89,
//     },
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "delivered":
//         return "text-green-400 bg-green-900/30 border-green-400/30";
//       case "shipped":
//         return "text-blue-400 bg-blue-900/30 border-blue-400/30";
//       case "processing":
//         return "text-yellow-400 bg-yellow-900/30 border-yellow-400/30";
//       case "pending":
//         return "text-gray-400 bg-gray-800/30 border-gray-400/30";
//       default:
//         return "text-gray-400 bg-gray-800/30 border-gray-400/30";
//     }
//   };

//   const StatCard = ({ title, value, change, up, icon: Icon }) => (
//     <div className="relative group">
//       {/* Removed gradient background */}
//       <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 hover:border-orange-400/50 transition-all duration-300">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <p className="text-sm font-medium text-gray-300 mb-2">{title}</p>
//             {/* Removed text gradient, using solid orange */}
//             <p className="text-3xl font-bold text-orange-400">{value}</p>
//           </div>
//           <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-400/30">
//             <Icon className="h-7 w-7 text-orange-400" />
//           </div>
//         </div>
//         <div className="flex items-center">
//           {up ? (
//             <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
//           ) : (
//             <TrendingDown className="h-4 w-4 text-red-400 mr-2" />
//           )}
//           <span
//             className={`text-sm font-bold ${
//               up ? "text-green-400" : "text-red-400"
//             }`}
//           >
//             {change}
//           </span>
//           <span className="text-sm text-gray-400 ml-2">
//             vs last {timeframe === "7d" ? "week" : "month"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );

//   const timeframeOptions = [
//     { value: "7d", label: "7 Days" },
//     { value: "30d", label: "30 Days" },
//     { value: "90d", label: "90 Days" },
//   ];

//   return (
//     <div
//       className="min-h-screen relative overflow-hidden"
//       style={{ backgroundColor: "#1A2037" }}
//     >
//       {/* Animated Background Elements (Softened) */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       {/* Header */}
//       <header className="relative backdrop-blur-xl bg-gray-900/60 border-b border-orange-500/20 shadow-2xl">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-4">
//               <div className="p-2 bg-orange-500/20 rounded-xl border border-orange-400/30">
//                 <Activity className="h-8 w-8 text-orange-400" />
//               </div>
//               <div>
//                 {/* Removed text gradient, using solid white */}
//                 <h1 className="text-3xl font-bold text-white">NEXUS CONTROL</h1>
//                 <p className="text-sm text-gray-400 font-mono">
//                   {currentTime.toLocaleTimeString()} • LIVE MONITORING
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-6">
//               {/* Notification Bell */}
//               <button className="relative p-3 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-orange-500/20 hover:border-orange-400/50 transition-all duration-300 group">
//                 <Bell className="h-6 w-6 text-orange-400" />
//                 <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse border-2 border-gray-900">
//                   3
//                 </span>
//               </button>

//               {/* Settings */}
//               <button className="p-3 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-orange-500/20 hover:border-orange-400/50 transition-all duration-300 group">
//                 <Settings className="h-6 w-6 text-orange-400 group-hover:rotate-90 transition-transform duration-300" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8">
//         {/* Time Filter */}
//         <div className="mb-8 flex items-center justify-between">
//           <div className="flex space-x-1 bg-gray-900/60 backdrop-blur-xl rounded-xl p-1 border border-orange-500/20">
//             {timeframeOptions.map(({ value, label }) => (
//               <button
//                 key={value}
//                 onClick={() => setTimeframe(value)}
//                 className={`px-6 py-3 text-sm font-bold rounded-lg transition-all duration-300 ${
//                   timeframe === value
//                     ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
//                     : "text-gray-300 hover:text-white hover:bg-gray-800/50"
//                 }`}
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center space-x-3">
//             <div className="flex items-center space-x-2 px-4 py-2 bg-green-900/30 rounded-lg border border-green-400/30">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-green-400 text-sm font-mono">
//                 SYSTEM ONLINE
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//           <StatCard
//             title="TOTAL REVENUE"
//             value={stats.totalRevenue.value}
//             change={stats.totalRevenue.change}
//             up={stats.totalRevenue.up}
//             icon={DollarSign}
//           />
//           <StatCard
//             title="TOTAL ORDERS"
//             value={stats.totalOrders.value}
//             change={stats.totalOrders.change}
//             up={stats.totalOrders.up}
//             icon={ShoppingCart}
//           />
//           <StatCard
//             title="ACTIVE USERS"
//             value={stats.totalCustomers.value}
//             change={stats.totalCustomers.change}
//             up={stats.totalCustomers.up}
//             icon={Users}
//           />
//           <StatCard
//             title="AVG ORDER VALUE"
//             value={stats.avgOrderValue.value}
//             change={stats.avgOrderValue.change}
//             up={stats.avgOrderValue.up}
//             icon={BarChart3}
//           />
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Recent Orders */}
//           <div className="lg:col-span-2 relative group">
//             {/* Removed gradient background */}
//             <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 overflow-hidden">
//               <div className="p-6 border-b border-gray-700/50">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-xl font-bold text-white flex items-center">
//                     <Activity className="h-5 w-5 text-blue-400 mr-2" />
//                     LIVE ORDER STREAM
//                   </h2>
//                   <button className="px-4 py-2 bg-blue-500/20 text-blue-400 font-bold rounded-lg border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300">
//                     VIEW ALL
//                   </button>
//                 </div>
//                 {/* Search Input for Orders (Kept functional) */}
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search Orders (ID, Customer, Status...)"
//                     value={orderSearchQuery}
//                     onChange={(e) => setOrderSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 bg-gray-800/80 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 text-sm"
//                   />
//                   <Search className="h-4 w-4 text-blue-400 absolute left-3 top-2.5" />
//                 </div>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-800/50">
//                     <tr>
//                       <th className="px-6 py-4 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
//                         ORDER ID
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
//                         CUSTOMER
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
//                         AMOUNT
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
//                         STATUS
//                       </th>
//                       <th className="px-6 py-4 text-left text-xs font-bold text-orange-400 uppercase tracking-wider">
//                         TIME
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-700/50">
//                     {/* Map over filteredOrders */}
//                     {filteredOrders.map((order, index) => (
//                       <tr
//                         key={index}
//                         className="hover:bg-gray-800/30 transition-colors duration-200 group"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-400">
//                           {order.id}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
//                           {order.customer}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-400">
//                           {order.amount}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`px-3 py-1 rounded-lg text-xs font-bold border ${getStatusColor(
//                               order.status
//                             )}`}
//                           >
//                             {order.status.toUpperCase()}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono">
//                           {order.date}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 {/* Display message if no results are found */}
//                 {filteredOrders.length === 0 && (
//                   <div className="text-center py-8 text-gray-500 text-lg">
//                     No orders found matching "{orderSearchQuery}".
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Top Products */}
//           <div className="relative group">
//             {/* Removed gradient background */}
//             <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-green-500/20">
//               <div className="p-6 border-b border-gray-700/50">
//                 <h2 className="text-xl font-bold text-white flex items-center">
//                   <Zap className="h-5 w-5 text-green-400 mr-2" />
//                   TOP PERFORMERS
//                 </h2>
//               </div>

//               <div className="p-6 space-y-4">
//                 {topProducts.map((product, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-green-400/30 transition-all duration-300 group"
//                   >
//                     <div className="flex-1">
//                       <p className="font-bold text-white mb-2">
//                         {product.name}
//                       </p>
//                       <div className="flex items-center space-x-4 text-sm">
//                         <span className="text-gray-300">
//                           {product.sales} sold
//                         </span>
//                         <span className="font-bold text-green-400">
//                           {product.revenue}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-xs text-gray-400 uppercase tracking-wide">
//                         STOCK
//                       </p>
//                       <p
//                         className={`text-lg font-bold ${
//                           product.stock < 20 ? "text-red-400" : "text-green-400"
//                         }`}
//                       >
//                         {product.stock}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
//           <button className="relative group">
//             {/* Removed gradient background */}
//             <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-orange-500/20 hover:border-orange-400/50 transition-all duration-300 text-center h-full">
//               <Package className="h-10 w-10 text-orange-400 mx-auto mb-4" />
//               <p className="font-bold text-white mb-2">MANAGE PRODUCTS</p>
//               <p className="text-sm text-gray-400">
//                 Add, edit, or remove products
//               </p>
//             </div>
//           </button>

//           <button className="relative group">
//             {/* Removed gradient background */}
//             <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 text-center h-full">
//               <Truck className="h-10 w-10 text-blue-400 mx-auto mb-4" />
//               <p className="font-bold text-white mb-2">TRACK ORDERS</p>
//               <p className="text-sm text-gray-400">Monitor order fulfillment</p>
//             </div>
//           </button>

//           <button className="relative group">
//             {/* Removed gradient background */}
//             <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 text-center h-full">
//               <Users className="h-10 w-10 text-green-400 mx-auto mb-4" />
//               <p className="font-bold text-white mb-2">CUSTOMERS</p>
//               <p className="text-sm text-gray-400">Manage customer accounts</p>
//             </div>
//           </button>

//           <button className="relative group">
//             {/* Removed gradient background */}
//             <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 text-center h-full">
//               <BarChart3 className="h-10 w-10 text-purple-400 mx-auto mb-4" />
//               <p className="font-bold text-white mb-2">ANALYTICS</p>
//               <p className="text-sm text-gray-400">View detailed reports</p>
//             </div>
//           </button>
//         </div>

//         {/* --- MONTHLY REVENUE CHART (Replaces Alerts Section) --- */}
//         <div className="mt-10">
//           <MonthlyRevenueChart />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  Target,
  BarChart3,
  Home,
  FolderOpen,
  Package,
  FileText,
  Settings,
  Bell,
  Calendar,
  Zap,
  Activity,
  Menu, // Imported Menu icon for sidebar toggle
  ChevronLeft,
  LogOut, // Added LogOut icon
  Edit, // Icon for setting target (retained for consistency with modal)
  Send, // Icon for sending a message
  X, // Icon for closing chatbox
  Smile, // Chatbox icons
  AtSign, // Chatbox icons
  Paperclip, // Chatbox icons
  Bold, // Chatbox icons
  Italic, // Chatbox icons
  Link as LinkIcon, // Chatbox icons (aliased to avoid conflict with react-router-dom Link)
  List, // Chatbox icons
  ListOrdered, // Chatbox icons
  Quote, // Chatbox icons
  Code, // Chatbox icons
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Link } from "react-router-dom";

// Onan Green color palette
const onanGreen = {
  primary: "#2E7D32",
  light: "#4CAF50",
  dark: "#1B5E20",
  accent: "#66BB6A",
};

// Corrected Semi-circular Segmented Gauge component with labels inside
const SemiCircularSegmentedGauge = ({ percentage = 15 }) => {
  // Default to 15 to show "Poor" initially
  const outerRadius = 100;
  const innerRadius = 50;
  const gaugeWidth = outerRadius * 2;
  const gaugeHeight = outerRadius;
  const cx = gaugeWidth / 2;
  const cy = gaugeHeight;

  // Function to create an arc path for the TOP semi-circle
  // Angles are standard SVG angles (0=right, 90=up, 180=left), sweeping counter-clockwise.
  const createArcPath = (startAngle, endAngle) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + outerRadius * Math.cos(startRad);
    const y1 = cy - outerRadius * Math.sin(startRad);
    const x2 = cx + outerRadius * Math.cos(endRad);
    const y2 = cy - outerRadius * Math.sin(endRad);

    const x3 = cx + innerRadius * Math.cos(endRad);
    const y3 = cy - innerRadius * Math.sin(endRad);
    const x4 = cx + innerRadius * Math.cos(startRad);
    const y4 = cy - innerRadius * Math.sin(startRad);

    // For a semi-circle, largeArcFlag is typically 0 for segments, sweepFlag is 0 (counter-clockwise)
    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 0 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 1 ${x4} ${y4} Z`;
  };

  // Define segments mapping percentage to visual angles (0 to 180 degrees for a semi-circle)
  const segmentsData = [
    {
      pStart: 0,
      pEnd: 25,
      color: "#EF4444",
      name: "Poor",
      textColor: "#ffffff",
    }, // Red for Poor
    {
      pStart: 25,
      pEnd: 75,
      color: "#FCD34D",
      name: "Average",
      textColor: "#1F2937",
    }, // Yellow for Average
    {
      pStart: 75,
      pEnd: 90,
      color: "#22C55E",
      name: "Good",
      textColor: "#ffffff",
    }, // Green for Good
    {
      pStart: 90,
      pEnd: 100,
      color: "#15803D",
      name: "Excellent",
      textColor: "#ffffff",
    }, // Dark Green for Excellent
  ];

  // Map percentage ranges to SVG standard angles (0=right, 90=up, 180=left)
  const visualSegments = segmentsData.map((s) => {
    // Convert gauge percentages (0-100, left to right) to SVG angles (180 to 0, left to right)
    const gaugeStartPercentageAngle = s.pStart * 1.8; // 0 to 180 degrees for the gauge
    const gaugeEndPercentageAngle = s.pEnd * 1.8; // 0 to 180 degrees for the gauge

    const svgStartAngle = 180 - gaugeEndPercentageAngle; // Map the "end" of gauge percentage to SVG start angle
    const svgEndAngle = 180 - gaugeStartPercentageAngle; // Map the "start" of gauge percentage to SVG end angle

    return {
      startAngle: svgStartAngle, // SVG angle where this segment starts
      endAngle: svgEndAngle, // SVG angle where this segment ends
      color: s.color,
      name: s.name,
      textColor: s.textColor,
    };
  });

  // Calculate needle angle (0-100% maps to 0-180 degrees on gauge, converted to SVG angle)
  const gaugeNeedleAngle = percentage * 1.8; // Angle on the 0-180 gauge (left to right)
  const svgNeedleAngle = 180 - gaugeNeedleAngle; // Converted to SVG standard angle

  const needleLength = outerRadius - 10;
  const needleRad = (svgNeedleAngle * Math.PI) / 180; // Convert to radians for Math.cos/sin
  const needleEndX = cx + needleLength * Math.cos(needleRad);
  const needleEndY = cy - needleLength * Math.sin(needleRad);

  const currentStatus =
    segmentsData.find((s) => percentage >= s.pStart && percentage <= s.pEnd)
      ?.name || "N/A";

  return (
    <div className="flex flex-col items-center">
      <svg
        width={gaugeWidth}
        height={gaugeHeight + 30}
        viewBox={`0 0 ${gaugeWidth} ${gaugeHeight + 30}`}
      >
        {/* Gauge background segments and their labels */}
        {visualSegments.map((segment, index) => {
          const midAngle = (segment.startAngle + segment.endAngle) / 2;
          // Position the text mid-way between inner and outer radius
          const textRadius = (outerRadius + innerRadius) / 2;
          const textRad = (midAngle * Math.PI) / 180;

          const textX = cx + textRadius * Math.cos(textRad);
          const textY = cy - textRadius * Math.sin(textRad);

          return (
            <React.Fragment key={index}>
              <path
                d={createArcPath(segment.startAngle, segment.endAngle)}
                fill={segment.color}
              />
              <text
                x={textX}
                y={textY}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="12" // Increased font size for better visibility
                fontWeight="bold"
                fill={segment.textColor}
              >
                {segment.name}
              </text>
            </React.Fragment>
          );
        })}

        {/* Needle */}
        <line
          x1={cx}
          y1={cy}
          x2={needleEndX}
          y2={needleEndY}
          stroke="#1F2937"
          strokeWidth="3"
          strokeLinecap="round"
          className="transition-transform duration-300 ease-in-out"
        />

        {/* Center dot for the needle pivot */}
        <circle cx={cx} cy={cy} r="6" fill="#1F2937" />
      </svg>
      {/* Percentage and status display below the gauge */}
      <div className="text-center mt-2">
        <p className="text-xl font-bold text-gray-900">
          {percentage.toFixed(0)}%
        </p>{" "}
        {/* Display percentage with 0 decimal places */}
        <p className="text-sm text-gray-600">
          Status:{" "}
          <span
            className="font-semibold"
            style={{
              color:
                segmentsData.find(
                  (s) => percentage >= s.pStart && percentage <= s.pEnd
                )?.color || "#1F2937",
            }}
          >
            {currentStatus}
          </span>
        </p>
      </div>
    </div>
  );
};

// Reusable full circle Gauge component (kept for other cards)
const GaugeChart = ({ value, max, title, subtitle }) => {
  const percentage = (value / max) * 100;
  const radius = 80;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={onanGreen.primary}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(percentage)}%
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg font-semibold text-gray-900">
          {value} / {max} Units
        </p>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

// Resizable Sidebar Component - Now accepts isCollapsed prop
const ResizableSidebar = ({
  children,
  isCollapsed, // New prop
  initialWidth = 256,
  minWidth = 64,
  maxWidth = 400,
  collapsedWidth = 80, // Define collapsed width
}) => {
  const [currentWidth, setCurrentWidth] = useState(initialWidth);
  const sidebarRef = useRef(null);

  // Effect to manage width based on isCollapsed prop
  useEffect(() => {
    if (isCollapsed) {
      setCurrentWidth(collapsedWidth);
    } else {
      setCurrentWidth(initialWidth);
    }
  }, [isCollapsed, initialWidth, collapsedWidth]);

  const handleMouseMove = (e) => {
    const newWidth = e.clientX;
    if (newWidth > minWidth && newWidth < maxWidth) {
      setCurrentWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={sidebarRef}
      className="bg-white shadow-lg border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out relative" // Added duration for smooth transition
      style={{ width: `${currentWidth}px` }}
    >
      {children}
      {/* Resizer handle only visible when not collapsed */}
      {!isCollapsed && (
        <div
          className="w-2 cursor-ew-resize absolute right-0 top-0 bottom-0 z-20 hover:bg-gray-300 transition-colors"
          onMouseDown={handleMouseDown}
        ></div>
      )}
    </div>
  );
};

// Custom Tooltip for Monthly Sales
const CustomSalesTooltip = ({
  active,
  payload,
  label,
  monthlySalesData,
  formatCurrency,
}) => {
  if (active && payload && payload.length) {
    const currentMonthIndex = monthlySalesData.findIndex(
      (d) => d.name === label
    );
    const currentSales = payload[0].value;
    let percentageChange = 0;
    let changeText = "";
    let changeColor = onanGreen.primary; // Default to green

    if (currentMonthIndex > 0) {
      const previousMonthSales = monthlySalesData[currentMonthIndex - 1].sales;
      const difference = currentSales - previousMonthSales;
      percentageChange = ((difference / previousMonthSales) * 100).toFixed(1);

      if (difference > 0) {
        changeText = `Increased by ${percentageChange}%`;
        changeColor = onanGreen.primary;
      } else if (difference < 0) {
        changeText = `Decreased by ${Math.abs(percentageChange)}%`;
        changeColor = "#EF4444"; // Red
      } else {
        changeText = "No Change";
        changeColor = "#6b7280"; // Gray
      }
    } else {
      changeText = "N/A (First Month)";
      changeColor = "#6b7280";
    }

    return (
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
        <p className="text-sm font-semibold text-gray-900 mb-1">{label}</p>
        <p className="text-sm text-gray-700">
          Total Sales:{" "}
          <span className="font-medium">{formatCurrency(currentSales)}</span>
        </p>
        <p
          className="text-sm font-semibold mt-1"
          style={{ color: changeColor }}
        >
          {changeText}
        </p>
      </div>
    );
  }

  return null;
};

// Target Setting Modal Component
const TargetSettingModal = ({
  isOpen,
  onClose,
  onSetTarget,
  currentMonth,
  currentYear,
  monthlyTargetOverrides,
  months,
  years,
  formatCurrency,
}) => {
  const [targetAmount, setTargetAmount] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(currentMonth.toString());
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());

  // Effect to pre-fill the modal when it opens
  useEffect(() => {
    if (isOpen) {
      setSelectedMonth(currentMonth.toString());
      setSelectedYear(currentYear.toString());
      // Set the target amount from overrides if it exists, otherwise empty
      const key = `${currentYear}-${currentMonth}`;
      setTargetAmount(
        monthlyTargetOverrides[key]
          ? monthlyTargetOverrides[key].toString()
          : ""
      );
    }
  }, [isOpen, currentMonth, currentYear, monthlyTargetOverrides]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(targetAmount);
    if (!isNaN(amount) && amount >= 0) {
      onSetTarget(selectedYear, selectedMonth, amount);
      onClose();
    } else {
      alert("Please enter a valid positive number for the target.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Set Monthly Sales Target
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="targetAmount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Target Amount
            </label>
            <input
              type="number"
              id="targetAmount"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="e.g., 300000"
              min="0"
            />
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="targetMonth"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Month
              </label>
              <select
                id="targetMonth"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              >
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="targetYear"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Year
              </label>
              <select
                id="targetYear"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md transition-colors"
              style={{ backgroundColor: onanGreen.primary }}
            >
              Set Target
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Chatbox Modal Component - Replicated UI
const ChatboxModal = ({ isOpen, onClose, notificationMessage }) => {
  const [replyMessage, setReplyMessage] = useState("");
  const chatHistoryRef = useRef(null);

  // Sample chat messages for demonstration
  const [messages, setMessages] = useState([
    { id: 1, sender: "Dennis Ngui", text: "Hello Sam,", time: "1:29 PM" },
    {
      id: 2,
      sender: "Dennis Ngui",
      text: "Group 1 we are requesting to use the checkout session time to polish some parts of our project. Please approve.",
      time: "1:29 PM",
    },
    {
      id: 3,
      sender: "Sam Tomashi",
      text: "Hello Dennis, I haven't received invite for class",
      time: "July 23",
    },
    {
      id: 4,
      sender: "Dennis Ngui",
      text: "Hello Sam, Hope you are doing well. Kindly can I get your personal phone number?",
      time: "9:05 PM",
    },
    { id: 5, sender: "Sam Tomashi", text: "07112317212", time: "11:30 AM" },
    {
      id: 6,
      sender: "Dennis Ngui",
      text: "Thanks I'll text on whatsapp",
      time: "9:30 PM",
    },
  ]);

  const handleSendReply = () => {
    if (replyMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You", // Assuming "You" as the current user
        text: replyMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setReplyMessage(""); // Clear input

      // For now, log the message to the console as there's no backend
      console.log("Reply sent:", newMessage.text);
    }
  };

  // Scroll to bottom of chat history when new messages are added
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-[80vh] flex flex-col">
        {/* Chat Header */}
        <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center justify-between rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-900">
            Chat with Notification Sender{" "}
            {/* Could be dynamic based on notification */}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat History Area */}
        <div
          ref={chatHistoryRef}
          className="flex-1 p-4 overflow-y-auto space-y-4"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start max-w-[70%] p-3 rounded-lg shadow-sm ${
                  msg.sender === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.sender !== "You" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold mr-2">
                    {msg.sender.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  {msg.sender !== "You" && (
                    <p className="font-semibold text-sm mb-1">{msg.sender}</p>
                  )}
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-75 text-right">
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Display the original notification message as the first message if needed, or in a separate context */}
          <div className="flex justify-start">
            <div className="bg-yellow-50 text-yellow-800 p-3 rounded-lg shadow-sm max-w-[70%]">
              <p className="font-semibold text-sm mb-1">
                Original Notification:
              </p>
              <p className="text-sm">{notificationMessage}</p>
              <p className="text-xs mt-1 opacity-75 text-right">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Message Input Area */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Smile
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Emoji"
            />
            <AtSign
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Mention"
            />
            <Paperclip
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Attach File"
            />
            <span className="flex-1"></span> {/* Spacer */}
            <Bold
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Bold"
            />
            <Italic
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Italic"
            />
            <LinkIcon
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Link"
            />
            <List
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Unordered List"
            />
            <ListOrdered
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Ordered List"
            />
            <Quote
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Quote"
            />
            <Code
              className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
              title="Code"
            />
          </div>
          <div className="flex items-end space-x-2">
            <textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Write a message..."
              className="flex-1 h-auto min-h-[40px] max-h-[120px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm resize-y"
              rows="1" // Start with 1 row, let it expand with resize-y
            ></textarea>
            <button
              onClick={handleSendReply}
              className="p-3 rounded-md text-white flex-shrink-0 transition-colors"
              style={{ backgroundColor: onanGreen.primary }}
              title="Send Message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("7");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [performancePercentage, setPerformancePercentage] = useState(15); // State for the semi-circular gauge
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // New state for sidebar collapse
  const [showTargetModal, setShowTargetModal] = useState(false); // State to control modal visibility
  // State to store monthly target overrides. Key: 'YYYY-M', Value: targetAmount
  const [monthlyTargetOverrides, setMonthlyTargetOverrides] = useState({
    // Default target for July 2024, set to 450000 as per user request
    "2024-7": 450000,
    "2025-1": 350000, // Example override
  });
  // State to store quarterly target overrides. Key: 'YYYY-Q', Value: targetAmount
  const [quarterlyTargetOverrides, setQuarterlyTargetOverrides] = useState({
    "2025-1": 1000000, // Example Q1 2025 target
  });

  // Notifications state, now client-side only (no Firebase for now)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "warning",
      message:
        "Project #4512 (Acme Corp) is awaiting client sign-off. 2 days overdue.",
      time: "2 hours ago",
      priority: "high",
    },
    {
      id: 2,
      type: "success",
      message: 'New lead assigned: "City Hospital" - Priority: High',
      time: "4 hours ago",
      priority: "medium",
    },
    {
      id: 3,
      type: "info",
      message: 'Meeting with Supplier "DieselTech" in 30 mins.',
      time: "30 minutes ago",
      priority: "low",
    },
  ]);

  // State for chatbox visibility and selected message
  const [showChatbox, setShowChatbox] = useState(false);
  const [selectedNotificationMessage, setSelectedNotificationMessage] =
    useState("");

  // Ref and state for scroll animation
  const salesChartRef = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  // Simulate "live" updates by adding a new notification every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: notifications.length + 1,
        type: Math.random() > 0.6 ? "warning" : "success", // Random type
        message: `New sale: P-${Math.floor(
          Math.random() * 1000
        )} model sold to customer #A${Math.floor(Math.random() * 1000)}`,
        time: "just now",
        priority: Math.random() > 0.7 ? "high" : "low", // Random priority
      };
      setNotifications((prev) => [newNotification, ...prev]);
    }, 10000);

    return () => clearInterval(interval);
  }, [notifications]); // Dependency array updated to react to notifications state

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the chart enters the viewport, increment the animationKey to trigger re-animation
        if (entry.isIntersecting) {
          setAnimationKey((prevKey) => prevKey + 1);
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    const currentRef = salesChartRef.current; // Capture the current ref value
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function: disconnect observer when component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Run once on mount to set up the observer

  // Function to generate sample monthly sales data based on the year
  const generateMonthlySalesData = (year) => {
    const baseSales = {
      2022: [
        120000, 140000, 160000, 150000, 180000, 200000, 190000, 210000, 200000,
        220000, 240000, 260000,
      ],
      2023: [
        180000, 200000, 220000, 210000, 240000, 270000, 250000, 280000, 260000,
        290000, 310000, 330000,
      ],
      2024: [
        220000, 240000, 270000, 250000, 280000, 310000, 290000, 320000, 300000,
        330000, 350000, 370000,
      ],
      2025: [
        280000, 300000, 330000, 310000, 340000, 370000, 350000, 380000, 360000,
        390000, 410000, 430000,
      ],
    };

    const monthsShort = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const salesForYear = baseSales[year] || baseSales["2024"]; // Default to 2024 if year not found

    return monthsShort.map((month, index) => ({
      name: month,
      sales: salesForYear[index],
    }));
  };

  const [monthlySalesData, setMonthlySalesData] = useState(
    generateMonthlySalesData(selectedYear)
  );

  // State for current month's revenue
  const [currentMonthlyRevenue, setCurrentMonthlyRevenue] = useState(0);

  // Default monthly target if no override exists (used for gauge in revenue card)
  const defaultMonthlyTarget = 450000; // Updated default to 450,000

  // Get the actual monthly target based on selected month/year or default
  const actualMonthlyTarget =
    monthlyTargetOverrides[`${selectedYear}-${selectedMonth}`] ||
    defaultMonthlyTarget;

  useEffect(() => {
    // Update monthly sales data when the selected year changes
    const newMonthlySalesData = generateMonthlySalesData(selectedYear);
    setMonthlySalesData(newMonthlySalesData);

    // Also increment animationKey to force re-animation for new data
    setAnimationKey((prevKey) => prevKey + 1);
  }, [selectedYear]);

  // Effect to update currentMonthlyRevenue and performancePercentage when selectedMonth, monthlySalesData, or actualMonthlyTarget changes
  useEffect(() => {
    const monthIndex = parseInt(selectedMonth) - 1; // Months are 1-indexed in select, 0-indexed in array
    if (monthlySalesData.length > monthIndex && monthIndex >= 0) {
      const revenue = monthlySalesData[monthIndex].sales;
      setCurrentMonthlyRevenue(revenue);
      // Calculate performance percentage for the gauge using actualMonthlyTarget
      const calculatedPercentage = Math.max(
        0,
        Math.min(100, (revenue / actualMonthlyTarget) * 100)
      );
      setPerformancePercentage(calculatedPercentage);
    } else {
      setCurrentMonthlyRevenue(0); // Reset if month index is invalid
      setPerformancePercentage(0); // Reset percentage
    }
  }, [selectedMonth, monthlySalesData, actualMonthlyTarget]); // Added actualMonthlyTarget to dependencies

  // Function to handle setting a new monthly target from the modal
  const handleSetMonthlyTarget = (year, month, amount) => {
    const key = `${year}-${month}`;
    setMonthlyTargetOverrides((prev) => ({
      ...prev,
      [key]: amount,
    }));
  };

  // Helper function to get the current quarter (1-4)
  const getCurrentQuarter = (month) => {
    if (month >= 1 && month <= 3) return 1;
    if (month >= 4 && month <= 6) return 2;
    if (month >= 7 && month <= 9) return 3;
    if (month >= 10 && month <= 12) return 4;
    return 1; // Default to Q1
  };

  // Helper function to get quarterly sales data up to the selected month
  const getQuarterlySales = (year, selectedMonth, allMonthlySalesData) => {
    const currentQuarterNum = getCurrentQuarter(selectedMonth);
    let startMonthIndex;

    switch (currentQuarterNum) {
      case 1:
        startMonthIndex = 0; // January (index 0)
        break;
      case 2:
        startMonthIndex = 3; // April (index 3)
        break;
      case 3:
        startMonthIndex = 6; // July (index 6)
        break;
      case 4:
        startMonthIndex = 9; // October (index 9)
        break;
      default:
        return 0;
    }

    // The end index for slicing should be the selected month's index
    const endMonthIndex = parseInt(selectedMonth) - 1;

    const salesForYear = generateMonthlySalesData(year); // Ensure we have the correct year's data

    // Sum sales from the start of the quarter up to and including the selected month
    const quarterSales = salesForYear
      .slice(startMonthIndex, endMonthIndex + 1)
      .reduce((sum, month) => sum + month.sales, 0);

    return quarterSales;
  };

  const currentQuarter = getCurrentQuarter(parseInt(selectedMonth));
  // Pass selectedMonth to getQuarterlySales for dynamic calculation
  const currentQuarterlySales = getQuarterlySales(
    selectedYear,
    parseInt(selectedMonth),
    monthlySalesData
  );

  // Base monthly target for calculating the quarterly target as requested by user (450,000)
  const baseQuarterlyMonthlyTarget = 450000;
  // Dynamic quarterly target based on the base monthly target (3 months in a quarter)
  const calculatedQuarterlyTarget = baseQuarterlyMonthlyTarget * 3;

  // Use the calculated quarterly target if no override, otherwise use the override
  const actualQuarterlyTarget =
    quarterlyTargetOverrides[`${selectedYear}-${currentQuarter}`] ||
    calculatedQuarterlyTarget;

  const quarterlyPercentage = Math.max(
    0,
    Math.min(100, (currentQuarterlySales / actualQuarterlyTarget) * 100)
  );
  const quarterlyAmountNeeded = Math.max(
    0,
    actualQuarterlyTarget - currentQuarterlySales
  );
  const percentageNeeded =
    (quarterlyAmountNeeded / actualQuarterlyTarget) * 100;

  // Calculate dynamic change and isPositive for monthly revenue
  const calculateMonthlyChange = () => {
    const monthIndex = parseInt(selectedMonth) - 1;
    if (monthIndex > 0 && monthlySalesData.length > monthIndex) {
      const currentSales = monthlySalesData[monthIndex].sales;
      const previousMonthSales = monthlySalesData[monthIndex - 1].sales;

      if (previousMonthSales === 0) {
        // Avoid division by zero
        return { change: 0, isPositive: currentSales > 0 };
      }

      const difference = currentSales - previousMonthSales;
      const percentageChange = (
        (difference / previousMonthSales) *
        100
      ).toFixed(1);
      return {
        change: Math.abs(parseFloat(percentageChange)),
        isPositive: difference >= 0,
      };
    }
    return { change: 0, isPositive: true }; // Default for first month or invalid index
  };

  const { change, isPositive } = calculateMonthlyChange();

  // Derive revenueData, with 'current' now coming from currentMonthlyRevenue
  const revenueData = {
    current: currentMonthlyRevenue, // Now reflects the selected month's revenue
    change: change,
    isPositive: isPositive,
    performancePercentage: performancePercentage, // Linked to the state
  };

  const projectData = {
    total: 18,
    onTrack: 12,
    atRisk: 4,
    delayed: 2,
  };

  const teamData = [
    { name: "John Doe", performance: 125, target: 100 },
    { name: "Sarah Smith", performance: 98, target: 100 },
    { name: "Mike Johnson", performance: 87, target: 100 },
    { name: "Lisa Brown", performance: 76, target: 100 },
  ];

  const gensetModelData = [
    { model: "P-1250", units: 28, avgPrice: 42500, total: 1190000 },
    { model: "Q-800", units: 35, avgPrice: 28000, total: 980000 },
    { model: "R-2000", units: 15, avgPrice: 63000, total: 945000 },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = ["2022", "2023", "2024", "2025"];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true, path: "/dashboard" },
    { icon: FolderOpen, label: "Projects", path: "/projects" },
    { icon: Users, label: "Team", path: "/team" },
    { icon: Package, label: "Inventory", path: "/inventory" },
    { icon: FileText, label: "Reports", path: "/reports" },
    {
      icon: Target,
      label: "Targets",
      path: "/targets",
      action: () => setShowTargetModal(true),
    }, // Action to open modal
    { icon: Settings, label: "Settings", path: "/settings" },
    {
      icon: LogOut,
      label: "Logout",
      path: "/logout",
      action: () => alert("Logging out..."),
    }, // Added logout item with a placeholder action
  ];

  // Handler for opening the chatbox
  const handleNotificationClick = (message) => {
    setSelectedNotificationMessage(message);
    setShowChatbox(true);
  };

  return (
    <div className="h-screen overflow-hidden flex">
      {/* Sidebar */}
      <ResizableSidebar isCollapsed={isSidebarCollapsed}>
        {" "}
        {/* Pass isSidebarCollapsed */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          {/* Toggle button for sidebar */}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
          >
            {isSidebarCollapsed ? (
              <Menu className="h-5 w-5" /> // Menu icon when collapsed
            ) : (
              <Menu className="h-5 w-5" /> // ChevronLeft icon when expanded
            )}
          </button>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                {/* Use Link component for navigation items */}
                <Link
                  to={item.path}
                  // Check if there's an action, and if so, prevent default link behavior for it
                  onClick={
                    item.action
                      ? (e) => {
                          e.preventDefault();
                          item.action();
                        }
                      : null
                  }
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    item.active
                      ? "text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={
                    item.active ? { backgroundColor: onanGreen.primary } : {}
                  }
                >
                  <item.icon className="h-5 w-5" />
                  {/* Conditionally render label based on collapse state */}
                  {!isSidebarCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </ResizableSidebar>

          
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Sales Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Performance overview for {months[parseInt(selectedMonth) - 1]}{" "}
                {selectedYear}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* 1. Revenue Card with Semi-circular Gauge (Vertical Layout) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Monthly Revenue ({months[parseInt(selectedMonth) - 1]}{" "}
                {selectedYear})
              </h3>
              <DollarSign
                className="h-8 w-8"
                style={{ color: onanGreen.primary }}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <SemiCircularSegmentedGauge
                percentage={revenueData.performancePercentage}
              />
              <div className="flex flex-col items-center space-x-4 mt-4">
                <div className="text-4xl font-bold text-gray-900">
                  {formatCurrency(revenueData.current)}
                </div>
                <div
                  className={`flex items-center space-x-1 ${
                    revenueData.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {revenueData.isPositive ? (
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  )}
                  <span className="font-semibold">{revenueData.change}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Projects Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Active Projects
              </h3>
              <FolderOpen
                className="h-6 w-6"
                style={{ color: onanGreen.primary }}
              />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-4">
              {projectData.total}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">On Track</span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: onanGreen.primary }}
                >
                  {projectData.onTrack}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">At Risk</span>
                <span className="text-sm font-semibold text-yellow-600">
                  {projectData.atRisk}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Delayed</span>
                <span className="text-sm font-semibold text-red-600">
                  {projectData.delayed}
                </span>
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>

          {/* 3. Team Performance Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Team Performance
              </h3>
              <Users className="h-6 w-6" style={{ color: onanGreen.primary }} />
            </div>
            <div className="space-y-3">
              {teamData.map((member, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {member.name}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        member.performance >= 100
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      {member.performance}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${Math.min(member.performance, 100)}%`,
                        backgroundColor:
                          member.performance >= 100
                            ? onanGreen.primary
                            : "#6b7280",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* 4. Notifications */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Notifications
              </h3>
              <Bell className="h-6 w-6" style={{ color: onanGreen.primary }} />
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors border-l-4"
                  style={{
                    borderLeftColor:
                      notification.type === "warning"
                        ? "#f59e0b"
                        : notification.type === "success"
                        ? onanGreen.primary
                        : "#6b7280",
                  }}
                  onClick={() => handleNotificationClick(notification.message)} // Click handler
                >
                  <div className="flex-shrink-0 mt-1">
                    {notification.type === "warning" && (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    )}
                    {notification.type === "success" && (
                      <CheckCircle
                        className="h-4 w-4"
                        style={{ color: onanGreen.primary }}
                      />
                    )}
                    {notification.type === "info" && (
                      <Clock className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
              {notifications.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  No new notifications.
                </p>
              )}
            </div>
          </div>

          {/* 5. Annual Sales Target (Gauge) */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Annual Sales Target
              </h3>
              <Target
                className="h-6 w-6"
                style={{ color: onanGreen.primary }}
              />
            </div>
            <div className="flex flex-col items-center">
              <GaugeChart
                value={78}
                max={100}
                title="Annual Sales Target"
                subtitle="$3.12M / $4.00M"
              />
            </div>
          </div>

          {/* 6. Expenses */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                YTD Expenses
              </h3>
              <Activity
                className="h-6 w-6"
                style={{ color: onanGreen.primary }}
              />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatCurrency(98200)}
            </div>
            <div
              className="flex items-center space-x-1 mb-4"
              style={{ color: onanGreen.primary }}
            >
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm font-semibold">-2.3% vs Budget</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Marketing</span>
                <span className="font-medium">35%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Logistics</span>
                <span className="font-medium">28%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">Salaries</span>
                <span className="font-medium">37%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}


        {/* Fourth Row - Total Sales Per Month Line Graph */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Total Sales Per Month ({selectedYear}) {/* Dynamic title */}
              </h3>
              <BarChart3 // You might want to change this icon for a line chart specifically
                className="h-6 w-6"
                style={{ color: onanGreen.primary }}
              />
            </div>
            <div className="h-64" ref={salesChartRef}>
              {" "}
              {/* Attach ref here */}
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  key={animationKey} // Key prop to force re-mount and re-animation
                  data={monthlySalesData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => formatCurrency(value)} />
                  <Tooltip
                    cursor={{ stroke: "gray", strokeDasharray: "3 3" }}
                    content={
                      <CustomSalesTooltip
                        monthlySalesData={monthlySalesData}
                        formatCurrency={formatCurrency}
                      />
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke={onanGreen.primary}
                    activeDot={{ r: 8 }}
                    isAnimationActive={true} // Animation is always active because the key forces remount
                    animationDuration={1500} // Animation duration in milliseconds
                    animationEasing="ease-out" // Easing function for the animation
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Target Setting Modal Component */}
      <TargetSettingModal
        isOpen={showTargetModal}
        onClose={() => setShowTargetModal(false)}
        onSetTarget={handleSetMonthlyTarget}
        currentMonth={parseInt(selectedMonth)}
        currentYear={parseInt(selectedYear)}
        monthlyTargetOverrides={monthlyTargetOverrides}
        months={months}
        years={years}
        formatCurrency={formatCurrency}
      />

      {/* Chatbox Modal */}
      <ChatboxModal
        isOpen={showChatbox}
        onClose={() => setShowChatbox(false)}
        notificationMessage={selectedNotificationMessage}
      />
    </div>
  );
};

export default Dashboard;
