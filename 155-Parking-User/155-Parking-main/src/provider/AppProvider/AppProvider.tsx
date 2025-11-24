"use client";
import React, { Suspense } from "react";
import MuiThemeProvider from "../MuiThemeProvider/MuiThemeProvider";
import { Container } from "@mui/material";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider>
      {/* <LocalizationProvider dateAdapter={AdapterMoment}> */}
      <>{children}</>
      {/* </LocalizationProvider> */}
    </MuiThemeProvider>
  );
};

export default AppProvider;
