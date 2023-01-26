import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import React, { useState, useMemo, createContext, FC } from "react";
import { parseCookies, setCookie } from "nookies";
import ComponentsOverrides from "../theme/overrides";
import { ThemeConfig } from "../theme/palette";

declare module "@mui/material/styles" {
  interface Palette {
    secondary1: any;
    secondary2: any;
    gradient: any;
    customize: any;
    other: any;
    glassmorphism: any;
    type: any;
    gray: any;
  }
  interface PaletteOptions {
    secondary1: any;
    secondary2: any;
    gradient: any;
    glassmorphism: any;
    customize: any;
    type: any;
    other: any;
    gray: any;
  }
  interface Theme {
    config?: any;
  }
  interface ThemeOptions {
    config?: any;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true;
    maptool: true;
    icon: true;
    containedPrimary?: true;
    containedSecondary1?: true;
  }
  interface ButtonPropsColorOverrides {
    gradient: true;
    glassmorphism5: true;
    gradient1: true;
    color?: true;
    shadow?: true;
    neon?: true;
    borderde?: true;
    gradient3?: true;
    gradient7?: true;
    error?: any;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    glassmorphism: true;
    gray: true;
  }

  interface TextFieldPropsVariantOverrides {
    glassmorphism: true;
    gray: true;
  }
}

interface IThemeContext {
  settheme: Function;
}
const initalState: IThemeContext = {
  settheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(initalState);
export const ThemeContextProvider: FC<{ children: React.ReactNode }> = (
  props
) => {
  const cookies = parseCookies();
  const [theme, settheme] = useState<any>(
    createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1440,
          xl: 1920,
        },
      },
      typography: {
        fontFamily: ["NotoSans-Regular", "Prompt-Regular"].join(","),
        button: {
          textTransform: "unset",
        },
      },
      config: {
        neon: {
          boxShadow: `1px 1px 10px 4px rgba(180, 206, 86, 0.25)`,
        },
        neonSecondary: `1px 1px 10px 4px rgba(208, 213, 206, 0.25)`,
        box: {
          width: 14,
          height: 14,
          marginRight: "4px",
          borderRadius: "2px",
          border: `0.5px solid #E2E251`,
        },
        glassmorphism: {
          backdropFilter: "blur(12.5px)",
        },
        card: {
          boxShadow: "0px 8px 100px rgba(73, 28, 100, 0.04)",
          borderRadius: "20px",
        },
        spaceBetween: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        jusCenter: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        center: {
          display: "flex",
          alignItems: "center",
        },
        fontLight: {
          fontFamily: ["NotoSans-Light", "Prompt-Light"].join(","),
        },
        fontRegular: {
          fontFamily: ["NotoSans-Regular", "Prompt-Regular"].join(","),
        },
        fontMedium: {
          fontFamily: ["NotoSans-Medium", "Prompt-Medium"].join(","),
        },
        fontBold: {
          fontFamily: ["NotoSans-Bold", "Prompt-Bold"].join(","),
        },
        activeGrid: {
          border: `1px solid #40403F`,
          backgroundColor: `rgba(0, 0, 0, 0.04)`,
        },
        item: {
          px: 0.5,
          borderRadius: "6px",
          mb: 0.5,
          "&.MuiListItem-root.Mui-selected": {
            bgcolor: "rgba(0, 0, 0, 0.08)",
            fontFamily: ["NotoSans-Bold", "Prompt-Bold"].join(","),
          },
          fontFamily: ["NotoSans-Regular", "Prompt-Regular"].join(","),
        },
        spaceAround: {
          display: "flex",
          justifyContent: "space-around",
        },
        btn: {
          borderRadius: "10px",
          boxShadow: "unset",
          "&:hover": {
            boxShadow: "unset",
          },
          "&:disabled": {
            opacity: "0.5",
            color: "#FFFFFF",
          },
        },
        topbar: {
          height: 76,
        },
      },
    })
  );

  useMemo(() => {
    settheme({
      ...theme,
      palette:
        ThemeConfig[
          cookies[process.env.NEXT_PUBLIC_THEME]
            ? cookies[process.env.NEXT_PUBLIC_THEME]
            : "default"
        ],
      components: ComponentsOverrides({
        ...theme,
        palette:
          ThemeConfig[
            cookies[process.env.NEXT_PUBLIC_THEME]
              ? cookies[process.env.NEXT_PUBLIC_THEME]
              : "default"
          ],
      }),
    });
  }, [cookies[process.env.NEXT_PUBLIC_THEME]]);

  const Theme = useMemo(() => {
    cookies[process.env.NEXT_PUBLIC_THEME] === undefined &&
      setCookie(null, process.env.NEXT_PUBLIC_THEME as any, "default");
    return createTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ settheme }}>
      <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
export const ThemeContextConsumer = ThemeContext.Consumer;
