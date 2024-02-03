import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
    accentLight: Palette["primary"];
  }

  interface PaletteOptions {
    accent: PaletteOptions["primary"];
    accentLight: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
    accentLight: true;
  }
}

declare module "@mui/material/Pagination" {
  interface PaginationPropsColorOverrides {
    accent: true;
    accentLight: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#ffffff" },
    text: {
      primary: "#000000",
      disabled: "black",
    },
    primary: {
      main: "#4e80d9",
      light: "#ffffff",
      dark: "#36f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#7f7f7f", //'#4E4B55',
      light: "#f5f5f5",
      contrastText: "#fff",
    },
    accent: {
      main: "#a885a2",
      contrastText: "#fff",
    },
    accentLight: {
      main: "#eee7ec",
      contrastText: "#a885a2",
    },
    action: {
      active: "#242c3a",
      hover: "rgba(255, 255, 255, 0.1)",
      // disabled: '#f5f5f5',
      disabled: "rgba(220, 220, 220, 0.8)",
    },
    success: {
      main: "#7cd986",
      contrastText: "#fff",
    },
    error: {
      main: "#f55361",
      contrastText: "#fff",
    },
    warning: {
      main: "#dcb823",
      contrastText: "#fff",
    },
    info: {
      main: "#11b7a8",
      contrastText: "#fff",
    },
  },

  shape: {
    borderRadius: 0,
  },

  typography: {
    h1: { fontSize: "3rem", lineHeight: 1.25 },
    h2: { fontSize: "2.5rem", lineHeight: 1.25 },
    h3: { fontSize: "2rem", lineHeight: 1.25 },
    h4: { fontSize: "1.5625rem", lineHeight: 1.28 },
    h5: { fontSize: "1.25rem", lineHeight: 1.4 },
    h6: { fontSize: "1rem", lineHeight: 1.5 },
    fontFamily:
      '"Noto Sans JP", "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;',
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            border: "0",
            "&:hover": { border: "0" },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.MuiMenuItem-root": {
            // backgroundColor: 'rgba(25, 118, 210, 0.08)',
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.08)",
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          paddingBlock: "0px",
          "&.Mui-checked": {
            color: "#36f",
          },
          "&.Mui-disabled": {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          paddingBlock: "0px",
          "&.Mui-checked": {
            color: "#36f",
          },
          "&.Mui-disabled": {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.MuiGrid-item": {
            "&&.label-text": {
              marginBlock: "auto",
              padding: "5px",
            },
            ".textfield-right .MuiInputBase-input.MuiOutlinedInput-input": {
              textAlign: "right",
            },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            cursor: "not-allowed",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            cursor: "not-allowed",
            pointerEvents: "auto",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-sizeSmall": {
            padding: "3.125px",
            borderRadius: "7px",
            minWidth: "75px",
          },
          "&.MuiButton-sizeMedium.MuiButtonBase-root.MuiButton-root": {
            borderRadius: "10px",
            minWidth: "100px",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

export default theme;
