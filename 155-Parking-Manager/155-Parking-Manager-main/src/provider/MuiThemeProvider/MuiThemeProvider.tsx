"use client";

import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  let theme = createTheme({
    typography: {
      fontFamily: ["var(--font-codenext)", "Roboto", "san-serif"].join(","),
    },
    palette: {
      mode: "light",
      divider: "rgba(246, 246, 246, 1)",
      background: {
        default: "#fff",
        paper: "#101921",
      },
      primary: {
        main: "#2DC98A",
        contrastText: "#fff",
        "100": "#0B5135",
      },
      secondary: {
        main: "#ffffff",
        light: "#FFD2A3",
      },
      error: {
        main: "#591717",
      },
      text: {
        // primary: "#fff",
        primary: "#001646",
        secondary: "#5E5E5E",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
