"use client";

import React from "react";
import { Box, CssBaseline, Stack } from "@mui/material";
import { drawerWidth } from "@/constants/constants";
import { MainDrawer } from "@/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          overflowX: "hidden",
          height: "100vh",
        }}
      >
        <MainDrawer />

        <Stack
          sx={{
            width: {
              xs: "100%",
              md: true ? "100%" : `calc(100% - ${drawerWidth}px)`,
            },
          }}
        >
          {/* <Header /> */}

          {/* <Tool]bar /> */}
          {/* <Container maxWidth="xl" sx={{ mt: 2, pb: 3 }}> */}
          <>{children}</>
          {/* </Container> */}
        </Stack>
      </Box>
    </>
  );
};

export default Layout;
