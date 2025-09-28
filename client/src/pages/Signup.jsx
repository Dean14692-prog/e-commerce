// import React from "react";
// import { Link } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import Typography from "@mui/material/Typography";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const Signup = () => {
//   return (
//     // Outer div updated to center content (Flex container)
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center", // Center horizontally
//         alignItems: "center", // Center vertically
//         minHeight: "100vh", // Ensure it takes full viewport height
//         padding: "1rem", // Add padding for small screens
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "1rem",
//           maxWidth: 400,
//           width: "100%", 
//           margin: "0 auto", 
//           background: "transparent",
//           padding: "2rem",
//           borderRadius: "12px",
//           boxShadow: "0px 4px 20px rgba(249, 115, 22, 0.6)",
//           alignItems: "center",
//         }}
//       >
//         {/* Profile Icon */}
//         <AccountCircleIcon style={{ fontSize: 60, color: "#f97316" }} />

//         {/* Welcome Text */}
//         <div className="justify-center font-bold">
//           <h2 className="text-orange-500 text-center">
//             Welcome to E-commerce.
//           </h2>
//         </div>

//         {/* Full Name */}
//         <TextField
//           label="Full Name"
//           type="text"
//           variant="outlined"
//           fullWidth
//           size="small"
//           InputProps={{ style: { color: "white" } }}
//           InputLabelProps={{ style: { color: "white" } }}
//         />

//         <TextField
//           label="Email"
//           type="text"
//           variant="outlined"
//           fullWidth
//           size="small"
//           InputProps={{ style: { color: "white" } }}
//           InputLabelProps={{ style: { color: "white" } }}
//         />

//         <FormControl variant="outlined" fullWidth size="small">
//           <InputLabel style={{ color: "white" }}>Password</InputLabel>
//           <OutlinedInput
//             type="password"
//             style={{ color: "white" }}
//             label="Password"
//           />
//         </FormControl>

//         <FormControl variant="outlined" fullWidth size="small">
//           <InputLabel style={{ color: "white" }}>Confirm Password</InputLabel>
//           <OutlinedInput
//             type="password"
//             style={{ color: "white" }}
//             label="Confirm Password"
//           />
//         </FormControl>

//         <Button
//           variant="contained"
//           fullWidth
//           size="small"
//           sx={{
//             backgroundColor: "#f97316",
//             "&:hover": { backgroundColor: "#ea580c" },
//           }}
//         >
//           Sign Up{" "}
//         </Button>

//         <Typography
//           variant="body2"
//           align="center"
//           style={{ color: "white", marginTop: "0.5rem" }}
//         >
//           Already have an account?
//           <Link
//             to="/login"
//             style={{
//               color: "#f97316",
//               textDecoration: "none",
//               fontWeight: "bold",
//               marginLeft: "4px", 
//             }}
//           >
//             Log in
//           </Link>
//         </Typography>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Signup = () => {
  // Define the custom styles for orange focus (using MUI system properties)
  const orangeFocusStyles = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#f97316", // orange-500 hex
      },
      "&:hover fieldset": {
        borderColor: "#f97316", // Optional: Change hover color too
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#f97316", // Label color when focused
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: 400,
          width: "100%",
          margin: "0 auto",
          background: "transparent",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(249, 115, 22, 0.6)",
          alignItems: "center",
        }}
      >
        {/* Profile Icon */}
        <AccountCircleIcon style={{ fontSize: 60, color: "#f97316" }} />

        {/* Welcome Text */}
        <div className="justify-center font-bold">
          <h2 className="text-orange-500 text-center">
            Welcome to E-commerce.
          </h2>
        </div>

        {/* Full Name - Applied sx prop */}
        <TextField
          label="Full Name"
          type="text"
          variant="outlined"
          fullWidth
          size="small"
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          sx={orangeFocusStyles} // <-- ADDED
        />

        {/* Email - Applied sx prop */}
        <TextField
          label="Email"
          type="text"
          variant="outlined"
          fullWidth
          size="small"
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          sx={orangeFocusStyles} // <-- ADDED
        />

        {/* Password Field - Applied sx prop */}
        <FormControl
          variant="outlined"
          fullWidth
          size="small"
          sx={orangeFocusStyles}
        >
          {" "}
          {/* <-- ADDED */}
          <InputLabel style={{ color: "white" }}>Password</InputLabel>
          <OutlinedInput
            type="password"
            style={{ color: "white" }}
            label="Password"
          />
        </FormControl>

        {/* Confirm Password Field - Applied sx prop */}
        <FormControl
          variant="outlined"
          fullWidth
          size="small"
          sx={orangeFocusStyles}
        >
          {" "}
          {/* <-- ADDED */}
          <InputLabel style={{ color: "white" }}>Confirm Password</InputLabel>
          <OutlinedInput
            type="password"
            style={{ color: "white" }}
            label="Confirm Password"
          />
        </FormControl>

        <Button
          variant="contained"
          fullWidth
          size="small"
          sx={{
            backgroundColor: "#f97316",
            "&:hover": { backgroundColor: "#ea580c" },
          }}
        >
          Sign Up{" "}
        </Button>

        <Typography
          variant="body2"
          align="center"
          style={{ color: "white", marginTop: "0.5rem" }}
        >
          Already have an account?
          <Link
            to="/login"
            style={{
              color: "#f97316",
              textDecoration: "none",
              fontWeight: "bold",
              marginLeft: "4px",
            }}
          >
            Log in
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default Signup;