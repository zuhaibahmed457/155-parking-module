"use client";

import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

const UIThemeProvider = ({ children }: { children: React.ReactNode }) => {
  let theme = createTheme({
    typography: {
      // fontFamily: ["var(--font-codenext)", "Roboto", "san-serif"].join(","),
      fontFamily: ["Inter", "serif"].join(","),
    },
    palette: {
      mode: "light",
      divider: "rgba(246, 246, 246, 1)",
      background: {
        default: "#fff",
        paper: "#fff",
        // paper: "#101921",
      },
      primary: {
        main: "#2DC98A",
        contrastText: "#fff",
        "100": "#0B5135",
      },
      secondary: {
        main: "#101921",
        light: "#FFD2A3",
      },
      error: {
        main: "#C92D2D",
      },
      warning: {
        main: "#C9A52D",
      },
      text: {
        primary: "#000",
        // primary: "#fff",
        secondary: "#001646",
        disabled: "#AEAEAE",
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

export default UIThemeProvider;
