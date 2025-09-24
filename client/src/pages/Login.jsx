import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: 400,
          margin: "5rem auto 0 auto",
          background: "transparent",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(249, 115, 22, 0.6)",
          alignItems: "center",
        }}
      >
        <AccountCircleIcon style={{ fontSize: 60, color: "#f97316" }} />

        <Typography
          variant="h6"
          align="center"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Welcome Back!
        </Typography>

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
            type={showPassword ? "text" : "password"}
            style={{ color: "white" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  style={{ color: "white" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
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
          New Here?{" "}
          <Link
            to="/signup"
            style={{
              color: "#f97316",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </div>
    </div>
  );
}
