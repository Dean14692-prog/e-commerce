import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; 

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: 400,
        margin: "4rem auto",
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
        <h2 className="text-orange-500 text-center">Welcome to E-commerce.</h2>
      </div>

      {/* Full Name */}
      <TextField
        label="Full Name"
        type="text"
        variant="outlined"
        fullWidth
        size="small"
        InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
      />

      {/* Email Field */}
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        size="small"
        InputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
      />

      {/* Password Field */}
      <FormControl variant="outlined" fullWidth size="small">
        <InputLabel style={{ color: "white" }}>Password</InputLabel>
        <OutlinedInput
          type="password"
          style={{ color: "white" }}
          label="Password"
        />
      </FormControl>

      <FormControl variant="outlined" fullWidth size="small">
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
        Login
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
          }}
        >
          Log in
        </Link>
      </Typography>
    </div>
  );
}
