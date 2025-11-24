"use client";

import { Box, CircularProgress, CssBaseline } from "@mui/material";
import useAppSelector from "@/hooks/useAppSelector";

const AppProvider = ({ children }: any) => {
  let { drawerOpen, isLogged, user, isLoading } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <>
      <CssBaseline />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="primary" size={50} />
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AppProvider;
