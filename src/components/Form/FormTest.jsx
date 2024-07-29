import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  IconButton,
  Paper,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
// import { useTheme } from "../../context/ThemeContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const MambaForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const { darkTheme } = useTheme();

  const formik = useFormik({
    initialValues: {
      userName: "",
      contact: "",
      email: "",
      password: "",
      role: "",
      status: "",
      ChangeType: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Required"),
      contact: Yup.string()
        .matches(/^\d{10,15}$/, "Must be a valid phone number")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Required"),
      role: Yup.string().required("Required"),
      status: Yup.string().required("Required"),
      ChangeType: Yup.string().required("Required"),
      
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Paper
      elevation={0}
      sx={{
        margin: "auto",
        marginTop: "1rem",
        marginBottom: "1rem",
        // maxWidth: "50rem",
        borderRadius: "1rem",
        backgroundColor: "#f0f0f0",
        color: "",
        transition: "box-shadow 0.3s",
        boxShadow: "inset 0px -1px 20px -8px rgb(13 84 140 / 30%)",
        // "&:hover": {
        // boxShadow: darkTheme
        //   ? "0px -2px 16px 8px rgb(238 14 36 / 56%)"
        //   : " 0px 4px 15px rgba(0, 0, 0, 0.1)",
        // },
      }}
    >
      <style>
        {`
          .form-input-mui::after, .css-i4bv87-MuiSvgIcon-root,
          .css-1hbvpl3-MuiSvgIcon-root {
            color: "";
          }
          Label{
            color: "";
          }
          .css-1x51dt5-MuiInputBase-input-MuiInput-input {
            color:"";
          }
          .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
            background: "";
            }
          }
          /* Change placeholder color in dark mode */
          .css-1n5l04g-MuiInputBase-input::before {
            color: "";
          }
        `}
      </style>
      <Box
        sx={{
          marginBottom: "20px",
          backgroundColor: "rgb(208, 206, 207)",
          borderRadius: "1rem 1rem 0 0",
          padding: "5px 0",
        }}
      >
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          Mamba Form
        </Typography>
      </Box>
      <form
        className="p-4"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <Box
          sx={{
            display: "flex",
            marginBottom: "1rem",
            gap: "1rem",
          }}
        >
          <FormControl className="form-input-mui" fullWidth variant="standard">
            <InputLabel
              className="form-input-mui"
              color={""}
              htmlFor="userName"
            >
              User Name*
            </InputLabel>
            <Input
              className="form-input-mui"
              id="userName"
              {...formik.getFieldProps("userName")}
              sx={{ color: "#333" }}
            />
            {formik.touched.userName && formik.errors.userName && (
              <FormHelperText error>{formik.errors.userName}</FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth variant="standard" className="form-input-mui">
            <InputLabel htmlFor="contact">Contact*</InputLabel>
            <Input
              id="contact"
              type="tel"
              {...formik.getFieldProps("contact")}
            />
            {formik.touched.contact && formik.errors.contact && (
              <FormHelperText error>{formik.errors.contact}</FormHelperText>
            )}
          </FormControl>
        </Box>
        <div className="flex gap-3" style={{ marginBottom: "1rem" }}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="email">Email*</InputLabel>
            <Input id="email" type="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email && (
              <FormHelperText error>{formik.errors.email}</FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="password">Password*</InputLabel>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...formik.getFieldProps("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{ color: "#333" }}
            />
            {formik.touched.password && formik.errors.password && (
              <FormHelperText error>{formik.errors.password}</FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="flex gap-3" style={{ marginBottom: "1rem" }}>
          <FormControl
            fullWidth
            sx={{ display: "flex" }}
            variant="standard"
            error={formik.touched.role && formik.errors.role}
          >
            <InputLabel htmlFor="role">Role*</InputLabel>
            <Select
              id="role"
              {...formik.getFieldProps("role")}
              sx={{
                color: "#000",
              }}
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              <MenuItem
                sx={{
                  color: "#000",
                }}
                value="admin"
              >
                Admin
              </MenuItem>
              <MenuItem
                sx={{
                  color: "#000",
                }}
                value="user"
              >
                User
              </MenuItem>
            </Select>
            {formik.touched.role && formik.errors.role && (
              <FormHelperText error>{formik.errors.role}</FormHelperText>
            )}
          </FormControl>
          <FormControl
            fullWidth
            sx={{ display: "flex", gap: "3" }}
            component="fieldset"
            error={formik.touched.status && formik.errors.status}
          >
            {/* <label htmlFor="status">Status*</label> */}
            <RadioGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "flex-end",
                // alignItems: "end",
                // alignContent: "end",
                // marginTop: "auto",
              }}
              {...formik.getFieldProps("status")}
              id="status"
            >
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
                sx={{
                  color: "#333",
                }}
              />
              <FormControlLabel
                value="inactive"
                control={<Radio />}
                label="Inactive"
                sx={{
                  color: "#333",
                }}
              />
            </RadioGroup>
            {formik.touched.status && formik.errors.status && (
              <FormHelperText error>{formik.errors.status}</FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="space-x-2 gap-2 my-2" style={{}}>
          <Button
            type="submit"
            variant={"outlined"}
            sx={{
              backgroundColor: "transparent",
              color: "#1976d2",
            }}
          >
            Submit
          </Button>

          <Button
            type="reset"
            variant={"outlined"}
            sx={{
              color: "#1976d2",
              borderColor: "#1976d2",
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default MambaForm;
