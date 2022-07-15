import { createTheme } from "@mui/material/styles";
import { Theme, ThemeProvider } from "@mui/material";
import React, { useState, useMemo, createContext, useEffect, FC } from "react";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/router";
import Color from "color";

declare module "@mui/material/styles" {
  interface Palette {
    gradient: any;
    type: any;
  }
  interface PaletteOptions {
    gradient: any;
    type: any;
  }
  interface Theme {
    config?: any;
  }
  interface ThemeOptions {
    config?: any;
  }

  interface TypographyVariants {
    H1_Kanit_ExtraLight_40px: React.CSSProperties;
    H1_Kanit_ExtraLight_36px: React.CSSProperties;
    H1_Kanit_ExtraLight_32px: React.CSSProperties;
    H2_Kanit_ExtraLight_28px: React.CSSProperties;
    H3_Kanit_ExtraLight_25px: React.CSSProperties;
    H4_Kanit_ExtraLight_22px: React.CSSProperties;
    H5_Kanit_ExtraLight_20px: React.CSSProperties;
    H6_Kanit_ExtraLight_18px: React.CSSProperties;
    Paragraph_Kanit_ExtraLight_16px: React.CSSProperties;
    Paragraph_Kanit_ExtraLight_14px: React.CSSProperties;
    Hint_Kanit_ExtraLight_12px: React.CSSProperties;
    Hint_Kanit_ExtraLight_10px: React.CSSProperties;

    H1_Kanit_Light_40px: React.CSSProperties;
    H1_Kanit_Light_36px: React.CSSProperties;
    H1_Kanit_Light_32px: React.CSSProperties;
    H2_Kanit_Light_28px: React.CSSProperties;
    H3_Kanit_Light_25px: React.CSSProperties;
    H4_Kanit_Light_22px: React.CSSProperties;
    H5_Kanit_Light_20px: React.CSSProperties;
    H6_Kanit_Light_18px: React.CSSProperties;
    Paragraph_Kanit_Light_16px: React.CSSProperties;
    Paragraph_Kanit_Light_14px: React.CSSProperties;
    Hint_Kanit_Light_12px: React.CSSProperties;
    Hint_Kanit_Light_10px: React.CSSProperties;

    H1_Kanit_Regular_40px: React.CSSProperties;
    H1_Kanit_Regular_36px: React.CSSProperties;
    H1_Kanit_Regular_32px: React.CSSProperties;
    H2_Kanit_Regular_28px: React.CSSProperties;
    H3_Kanit_Regular_25px: React.CSSProperties;
    H4_Kanit_Regular_22px: React.CSSProperties;
    H5_Kanit_Regular_20px: React.CSSProperties;
    H6_Kanit_Regular_18px: React.CSSProperties;
    Paragraph_Kanit_Regular_16px: React.CSSProperties;
    Paragraph_Kanit_Regular_14px: React.CSSProperties;
    Hint_Kanit_Regular_12px: React.CSSProperties;
    Hint_Kanit_Regular_10px: React.CSSProperties;

    H1_Kanit_Meduim_40px: React.CSSProperties;
    H1_Kanit_Meduim_36px: React.CSSProperties;
    H1_Kanit_Meduim_32px: React.CSSProperties;
    H2_Kanit_Meduim_28px: React.CSSProperties;
    H3_Kanit_Meduim_25px: React.CSSProperties;
    H4_Kanit_Meduim_22px: React.CSSProperties;
    H5_Kanit_Meduim_20px: React.CSSProperties;
    H6_Kanit_Meduim_18px: React.CSSProperties;
    Paragraph_Kanit_Meduim_16px: React.CSSProperties;
    Paragraph_Kanit_Meduim_14px: React.CSSProperties;
    Hint_Kanit_Meduim_12px: React.CSSProperties;

    H1_Kanit_Bold_40px: React.CSSProperties;
    H1_Kanit_Bold_36px: React.CSSProperties;
    H1_Kanit_Bold_32px: React.CSSProperties;
    H2_Kanit_Bold_28px: React.CSSProperties;
    H3_Kanit_Bold_25px: React.CSSProperties;
    H4_Kanit_Bold_22px: React.CSSProperties;
    H5_Kanit_Bold_20px: React.CSSProperties;
    H6_Kanit_Bold_18px: React.CSSProperties;
    Paragraph_Kanit_Bold_16px: React.CSSProperties;
    Paragraph_Kanit_Bold_14px: React.CSSProperties;
    Hint_Kanit_Bold_12px: React.CSSProperties;

    H1_Kanit_Black_40px: React.CSSProperties;
    H1_Kanit_Black_36px: React.CSSProperties;
    H1_Kanit_Black_32px: React.CSSProperties;
    H2_Kanit_Black_28px: React.CSSProperties;
    H3_Kanit_Black_25px: React.CSSProperties;
    H4_Kanit_Black_22px: React.CSSProperties;
    H5_Kanit_Black_20px: React.CSSProperties;
    H6_Kanit_Black_18px: React.CSSProperties;
    Paragraph_Kanit_Black_16px: React.CSSProperties;
    Paragraph_Kanit_Black_14px: React.CSSProperties;
    Hint_Kanit_Black_12px: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    H1_Kanit_ExtraLight_40px: React.CSSProperties;
    H1_Kanit_ExtraLight_36px: React.CSSProperties;
    H1_Kanit_ExtraLight_32px: React.CSSProperties;
    H2_Kanit_ExtraLight_28px: React.CSSProperties;
    H3_Kanit_ExtraLight_25px: React.CSSProperties;
    H4_Kanit_ExtraLight_22px: React.CSSProperties;
    H5_Kanit_ExtraLight_20px: React.CSSProperties;
    H6_Kanit_ExtraLight_18px: React.CSSProperties;
    Paragraph_Kanit_ExtraLight_16px: React.CSSProperties;
    Paragraph_Kanit_ExtraLight_14px: React.CSSProperties;
    Hint_Kanit_ExtraLight_12px: React.CSSProperties;
    Hint_Kanit_ExtraLight_10px: React.CSSProperties;

    H1_Kanit_Light_40px: React.CSSProperties;
    H1_Kanit_Light_36px: React.CSSProperties;
    H1_Kanit_Light_32px: React.CSSProperties;
    H2_Kanit_Light_28px: React.CSSProperties;
    H3_Kanit_Light_25px: React.CSSProperties;
    H4_Kanit_Light_22px: React.CSSProperties;
    H5_Kanit_Light_20px: React.CSSProperties;
    H6_Kanit_Light_18px: React.CSSProperties;
    Paragraph_Kanit_Light_16px: React.CSSProperties;
    Paragraph_Kanit_Light_14px: React.CSSProperties;
    Hint_Kanit_Light_12px: React.CSSProperties;
    Hint_Kanit_Light_10px: React.CSSProperties;

    H1_Kanit_Regular_40px: React.CSSProperties;
    H1_Kanit_Regular_36px: React.CSSProperties;
    H1_Kanit_Regular_32px: React.CSSProperties;
    H2_Kanit_Regular_28px: React.CSSProperties;
    H3_Kanit_Regular_25px: React.CSSProperties;
    H4_Kanit_Regular_22px: React.CSSProperties;
    H5_Kanit_Regular_20px: React.CSSProperties;
    H6_Kanit_Regular_18px: React.CSSProperties;
    Paragraph_Kanit_Regular_16px: React.CSSProperties;
    Paragraph_Kanit_Regular_14px: React.CSSProperties;
    Hint_Kanit_Regular_12px: React.CSSProperties;
    Hint_Kanit_Regular_10px: React.CSSProperties;

    H1_Kanit_Meduim_40px: React.CSSProperties;
    H1_Kanit_Meduim_36px: React.CSSProperties;
    H1_Kanit_Meduim_32px: React.CSSProperties;
    H2_Kanit_Meduim_28px: React.CSSProperties;
    H3_Kanit_Meduim_25px: React.CSSProperties;
    H4_Kanit_Meduim_22px: React.CSSProperties;
    H5_Kanit_Meduim_20px: React.CSSProperties;
    H6_Kanit_Meduim_18px: React.CSSProperties;
    Paragraph_Kanit_Meduim_16px: React.CSSProperties;
    Paragraph_Kanit_Meduim_14px: React.CSSProperties;
    Hint_Kanit_Meduim_12px: React.CSSProperties;

    H1_Kanit_Bold_40px: React.CSSProperties;
    H1_Kanit_Bold_36px: React.CSSProperties;
    H1_Kanit_Bold_32px: React.CSSProperties;
    H2_Kanit_Bold_28px: React.CSSProperties;
    H3_Kanit_Bold_25px: React.CSSProperties;
    H4_Kanit_Bold_22px: React.CSSProperties;
    H5_Kanit_Bold_20px: React.CSSProperties;
    H6_Kanit_Bold_18px: React.CSSProperties;
    Paragraph_Kanit_Bold_16px: React.CSSProperties;
    Paragraph_Kanit_Bold_14px: React.CSSProperties;
    Hint_Kanit_Bold_12px: React.CSSProperties;

    H1_Kanit_Black_40px: React.CSSProperties;
    H1_Kanit_Black_36px: React.CSSProperties;
    H1_Kanit_Black_32px: React.CSSProperties;
    H2_Kanit_Black_28px: React.CSSProperties;
    H3_Kanit_Black_25px: React.CSSProperties;
    H4_Kanit_Black_22px: React.CSSProperties;
    H5_Kanit_Black_20px: React.CSSProperties;
    H6_Kanit_Black_18px: React.CSSProperties;
    Paragraph_Kanit_Black_16px: React.CSSProperties;
    Paragraph_Kanit_Black_14px: React.CSSProperties;
    Hint_Kanit_Black_12px: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true;
    maptool: true;
    icon: true;
  }
  interface ButtonPropsColorOverrides {
    gradient: true;
    glassmorphism5: true;
    gradient1: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    H1_Kanit_ExtraLight_40px: true;
    H1_Kanit_ExtraLight_36px: true;
    H1_Kanit_ExtraLight_32px: true;
    H2_Kanit_ExtraLight_28px: true;
    H3_Kanit_ExtraLight_25px: true;
    H4_Kanit_ExtraLight_22px: true;
    H5_Kanit_ExtraLight_20px: true;
    H6_Kanit_ExtraLight_18px: true;
    Paragraph_Kanit_ExtraLight_16px: true;
    Paragraph_Kanit_ExtraLight_14px: true;
    Hint_Kanit_ExtraLight_12px: true;
    Hint_Kanit_ExtraLight_10px: true;

    H1_Kanit_Light_40px: true;
    H1_Kanit_Light_36px: true;
    H1_Kanit_Light_32px: true;
    H2_Kanit_Light_28px: true;
    H3_Kanit_Light_25px: true;
    H4_Kanit_Light_22px: true;
    H5_Kanit_Light_20px: true;
    H6_Kanit_Light_18px: true;
    Paragraph_Kanit_Light_16px: true;
    Paragraph_Kanit_Light_14px: true;
    Hint_Kanit_Light_12px: true;
    Hint_Kanit_Light_10px: true;

    H1_Kanit_Regular_40px: true;
    H1_Kanit_Regular_36px: true;
    H1_Kanit_Regular_32px: true;
    H2_Kanit_Regular_28px: true;
    H3_Kanit_Regular_25px: true;
    H4_Kanit_Regular_22px: true;
    H5_Kanit_Regular_20px: true;
    H6_Kanit_Regular_18px: true;
    Paragraph_Kanit_Regular_16px: true;
    Paragraph_Kanit_Regular_14px: true;
    Hint_Kanit_Regular_12px: true;
    Hint_Kanit_Regular_10px: true;

    H1_Kanit_Meduim_40px: true;
    H1_Kanit_Meduim_36px: true;
    H1_Kanit_Meduim_32px: true;
    H2_Kanit_Meduim_28px: true;
    H3_Kanit_Meduim_25px: true;
    H4_Kanit_Meduim_22px: true;
    H5_Kanit_Meduim_20px: true;
    H6_Kanit_Meduim_18px: true;
    Paragraph_Kanit_Meduim_16px: true;
    Paragraph_Kanit_Meduim_14px: true;
    Hint_Kanit_Meduim_12px: true;

    H1_Kanit_Bold_40px: true;
    H1_Kanit_Bold_36px: true;
    H1_Kanit_Bold_32px: true;
    H2_Kanit_Bold_28px: true;
    H3_Kanit_Bold_25px: true;
    H4_Kanit_Bold_22px: true;
    H5_Kanit_Bold_20px: true;
    H6_Kanit_Bold_18px: true;
    Paragraph_Kanit_Bold_16px: true;
    Paragraph_Kanit_Bold_14px: true;
    Hint_Kanit_Bold_12px: true;

    H1_Kanit_Black_40px: true;
    H1_Kanit_Black_36px: true;
    H1_Kanit_Black_32px: true;
    H2_Kanit_Black_28px: true;
    H3_Kanit_Black_25px: true;
    H4_Kanit_Black_22px: true;
    H5_Kanit_Black_20px: true;
    H6_Kanit_Black_18px: true;
    Paragraph_Kanit_Black_16px: true;
    Paragraph_Kanit_Black_14px: true;
    Hint_Kanit_Black_12px: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    glassmorphism: true;
  }

  interface TextFieldPropsVariantOverrides {
    glassmorphism: true;
  }
}

//const vallarismain = "/icon/gistda-logo-png.png";
// const vallarisblack = `/icon/logo-black.svg`;
// const vallariswhite = `/icon/logo-white.svg`;
export const mainlogo = "/icon/gistda-logo-png.png";
// export const blacklogo = vallarisblack;
export const whitelogo = "/icon/gistda-logo-white.png";

export const ThemeConfig: any = {
  default: {
    type: "default",
    mode: "light",
    primary: {
      main: `#4685F7`,
      dark: `#233967`,
      light: `#5CBFCC`,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: `#426A7C`,
      dark: `#354C57`,
      light: `#E2E3E3`,
      contrastText: "#FFFFFF",
    },
    background: { paper: "#FFFFFF" },
    other: {
      customize1: "#79D6D4",
      customize2: "#79B0BA",
      customize3: "#C9CF63",
      customize4: "#C9CF63",
      customize5: "#50A88A",
      customize6: "#EDD66F",
    },
    gradient: {
      gradient1: "linear-gradient(153.43deg, #4685F7 16.67%, #5CBFCC 100%)",
      gradient2: "linear-gradient(153.43deg, #233967 16.67%, #238C9A 100%)",
      gradient3:
        "linear-gradient(128.35deg, #4685F7 -29.46%, #498EF0 -4.67%, #50A0E3 11.86%, #54ABDB 38.03%, #5CBFCC 100%)",
      gradient4:
        "linear-gradient(156.61deg, #C9CF63 61.81%, #D8D268 78.13%, #E3D46C 88.89%, #EDD66F 100%)",
    },
    glassmorphism: {
      glassmorphism1: "rgba(255, 255, 255, 0.7)",
      glassmorphism2: "rgba(255, 255, 255, 0.2)",
      glassmorphism3: "rgba(53, 76, 87, 0.95)",
      glassmorphism4: "rgba(53, 76, 87, 0.7)",
      glassmorphism5: "linear-gradient(180deg, #2B2D3F 0%, #354C57 100%)",
      glassmorphism6: "linear-gradient(180deg, #354C57 0%, #2B2D3F 100%)",
    },
    error: { main: `#F44336`, dark: `#E31B0C`, light: `#F88078` },
    warning: { main: `#FF9800`, dark: `#C77700`, light: `#FFB547` },
    info: { main: `#2196F3`, dark: `#0B79D0`, light: `#64B6F7` },
    success: { main: `#4CAF50`, dark: `#3B873E`, light: `#7BC67E` },
    text: {
      primary: `#414143`,
      secondary: `#8E8E8B`,
      disabled: `#D0D5CE`,
    },
  },
  dark: {
    type: "dark",
    mode: "light",
    primary: {
      main: `#000000`,
      dark: `#233967`,
      light: `#5CBFCC`,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: `#426A7C`,
      dark: `#354C57`,
      light: `#E2E3E3`,
      contrastText: "#FFFFFF",
    },
    background: { paper: "#FFFFFF" },
    other: {
      customize1: "#79D6D4",
      customize2: "#79B0BA",
      customize3: "#C9CF63",
      customize4: "#C9CF63",
      customize5: "#50A88A",
      customize6: "#EDD66F",
    },
    gradient: {
      gradient1: "linear-gradient(153.43deg, #4685F7 16.67%, #5CBFCC 100%)",
      gradient2: "linear-gradient(153.43deg, #233967 16.67%, #238C9A 100%)",
      gradient3:
        "linear-gradient(128.35deg, #4685F7 -29.46%, #498EF0 -4.67%, #50A0E3 11.86%, #54ABDB 38.03%, #5CBFCC 100%)",
      gradient4:
        "linear-gradient(156.61deg, #C9CF63 61.81%, #D8D268 78.13%, #E3D46C 88.89%, #EDD66F 100%)",
    },
    glassmorphism: {
      glassmorphism1: "rgba(255, 255, 255, 0.7)",
      glassmorphism2: "rgba(255, 255, 255, 0.2)",
      glassmorphism3: "rgba(53, 76, 87, 0.95)",
      glassmorphism4: "rgba(53, 76, 87, 0.7)",
      glassmorphism5: "linear-gradient(180deg, #2B2D3F 0%, #354C57 100%)",
      glassmorphism6: "linear-gradient(180deg, #354C57 0%, #2B2D3F 100%)",
    },
    error: { main: `#F44336`, dark: `#E31B0C`, light: `#F88078` },
    warning: { main: `#FF9800`, dark: `#C77700`, light: `#FFB547` },
    info: { main: `#2196F3`, dark: `#0B79D0`, light: `#64B6F7` },
    success: { main: `#4CAF50`, dark: `#3B873E`, light: `#7BC67E` },
    text: {
      primary: `#414143`,
      secondary: `#8E8E8B`,
      disabled: `#D0D5CE`,
    },
  },
};

interface IThemeContext {
  settheme: Function;
}
const initalState: IThemeContext = {
  settheme: () => {},
};

// allCookie[process.env.NEXT_PUBLIC_THEME as any] === "dark"
// ? darkTheme
// : lightTheme,
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
        fontFamily: ["Kanit", "sans-serif"].join(","),

        H1_Kanit_ExtraLight_40px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "40px",
          lineHeight: "60px",
        },
        H1_Kanit_ExtraLight_36px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "36px",
          lineHeight: "54px",
        },
        H1_Kanit_ExtraLight_32px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "32px",
          lineHeight: "48px",
        },
        H2_Kanit_ExtraLight_28px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "28px",
          lineHeight: "42px",
        },
        H3_Kanit_ExtraLight_25px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "25px",
          lineHeight: "37px",
        },
        H4_Kanit_ExtraLight_22px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "22px",
          lineHeight: "33px",
        },
        H5_Kanit_ExtraLight_20px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "20px",
          lineHeight: "30px",
        },
        H6_Kanit_ExtraLight_18px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "18px",
          lineHeight: "27px",
        },
        Paragraph_Kanit_ExtraLight_16px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "16px",
          lineHeight: "24px",
        },
        Paragraph_Kanit_ExtraLight_14px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "14px",
          lineHeight: "21px",
        },
        Hint_Kanit_ExtraLight_12px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "12px",
          lineHeight: "18px",
        },
        Hint_Kanit_ExtraLight_10px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 275,
          fontSize: "10px",
          lineHeight: "15px",
        },
        H1_Kanit_Light_40px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "40px",
          lineHeight: "60px",
        },
        H1_Kanit_Light_36px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "36px",
          lineHeight: "54px",
        },
        H1_Kanit_Light_32px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "32px",
          lineHeight: "48px",
        },
        H2_Kanit_Light_28px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "28px",
          lineHeight: "42px",
        },
        H3_Kanit_Light_25px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "25px",
          lineHeight: "37px",
        },
        H4_Kanit_Light_22px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "22px",
          lineHeight: "33px",
        },
        H5_Kanit_Light_20px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "20px",
          lineHeight: "30px",
        },
        H6_Kanit_Light_18px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "18px",
          lineHeight: "27px",
        },
        Paragraph_Kanit_Light_16px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: "24px",
        },
        Paragraph_Kanit_Light_14px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "14px",
          lineHeight: "21px",
        },
        Hint_Kanit_Light_12px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "12px",
          lineHeight: "18px",
        },
        Hint_Kanit_Light_10px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 300,
          fontSize: "10px",
          lineHeight: "15px",
        },
        H1_Kanit_Regular_40px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "40px",
          lineHeight: "60px",
        },
        H1_Kanit_Regular_36px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "36px",
          lineHeight: "54px",
        },
        H1_Kanit_Regular_32px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "32px",
          lineHeight: "48px",
        },
        H2_Kanit_Regular_28px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "28px",
          lineHeight: "42px",
        },
        H3_Kanit_Regular_25px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "25px",
          lineHeight: "37px",
        },
        H4_Kanit_Regular_22px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "22px",
          lineHeight: "33px",
        },
        H5_Kanit_Regular_20px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "20px",
          lineHeight: "30px",
        },
        H6_Kanit_Regular_18px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "18px",
          lineHeight: "27px",
        },
        Paragraph_Kanit_Regular_16px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "24px",
        },
        Paragraph_Kanit_Regular_14px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "21px",
        },
        Hint_Kanit_Regular_12px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "12px",
          lineHeight: "18px",
        },
        Hint_Kanit_Regular_10px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "normal",
          fontSize: "10px",
          lineHeight: "15px",
        },
        H1_Kanit_Meduim_40px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "40px",
          lineHeight: "60px",
        },
        H1_Kanit_Meduim_36px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "36px",
          lineHeight: "54px",
        },
        H1_Kanit_Meduim_32px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "32px",
          lineHeight: "48px",
        },
        H2_Kanit_Meduim_28px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "28px",
          lineHeight: "42px",
        },
        H3_Kanit_Meduim_25px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "25px",
          lineHeight: "37px",
        },
        H4_Kanit_Meduim_22px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "33px",
        },
        H5_Kanit_Meduim_20px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "30px",
        },
        H6_Kanit_Meduim_18px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "27px",
        },
        Paragraph_Kanit_Meduim_16px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
        },
        Paragraph_Kanit_Meduim_14px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "21px",
        },
        Hint_Kanit_Meduim_12px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "18px",
        },
        H1_Kanit_Bold_40px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "40px",
          lineHeight: "60px",
        },
        H1_Kanit_Bold_36px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "36px",
          lineHeight: "54px",
        },
        H1_Kanit_Bold_32px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "32px",
          lineHeight: "48px",
        },
        H2_Kanit_Bold_28px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "28px",
          lineHeight: "42px",
        },
        H3_Kanit_Bold_25px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "25px",
          lineHeight: "37px",
        },
        H4_Kanit_Bold_22px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "22px",
          lineHeight: "33px",
        },
        H5_Kanit_Bold_20px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "20px",
          lineHeight: "30px",
        },
        H6_Kanit_Bold_18px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "27px",
        },
        Paragraph_Kanit_Bold_16px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "16px",
          lineHeight: "24px",
        },
        Paragraph_Kanit_Bold_14px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "14px",
          lineHeight: "21px",
        },
        Hint_Kanit_Bold_12px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: "bold",
          fontSize: "12px",
          lineHeight: "18px",
        },
        H1_Kanit_Black_40px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "40px",
          lineHeight: "60px",
        },
        H1_Kanit_Black_36px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "36px",
          lineHeight: "54px",
        },
        H1_Kanit_Black_32px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "32px",
          lineHeight: "48px",
        },
        H2_Kanit_Black_28px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "28px",
          lineHeight: "42px",
        },
        H3_Kanit_Black_25px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "25px",
          lineHeight: "37px",
        },
        H4_Kanit_Black_22px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "22px",
          lineHeight: "33px",
        },
        H5_Kanit_Black_20px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "20px",
          lineHeight: "30px",
        },
        H6_Kanit_Black_18px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "18px",
          lineHeight: "27px",
        },
        Paragraph_Kanit_Black_16px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "16px",
          lineHeight: "24px",
        },
        Paragraph_Kanit_Black_14px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "14px",
          lineHeight: "21px",
        },
        Hint_Kanit_Black_12px: {
          fontStyle: "normal",
          fontFamily: ["Kanit", "sans-serif"].join(","),
          fontWeight: 900,
          fontSize: "12px",
          lineHeight: "18px",
        },

        button: {
          textTransform: "unset",
          fontSize: "14px",
          lineHeight: "19.07px",
        },
      },
      config: {
        card: {
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        },
        glassmorphism: {
          backdropFilter: "blur(10px)",
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root: ({ theme }: any) => theme.config.card,
          },
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: ({ theme }: any) => ({
              background: theme.palette.glassmorphism.glassmorphism3,
            }),
            arrow: ({ theme }: any) => ({
              color: theme.palette.glassmorphism.glassmorphism3,
            }),
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: ({ theme }: any) => ({
              ...theme.config.glassmorphism,
              borderRadius: "unset",
              background: theme.palette.glassmorphism.glassmorphism3,
            }),
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: ({ theme }: any) => theme.config.card,
          },
        },
        MuiMenu: {
          styleOverrides: {
            root: ({ theme }: any) => ({
              ".MuiMenu-paper": theme.config.card,
            }),
          },
        },
        MuiButton: {
          variants: [
            {
              props: { variant: "gradient" },
              style: ({ theme }: any) => ({
                background: theme.palette.gradient.gradient4,
                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
              }),
            },
            {
              props: { variant: "gradient", color: "glassmorphism5" },
              style: ({ theme }: any) => ({
                background: theme.palette.glassmorphism.glassmorphism5,
                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
              }),
            },
            {
              props: { variant: "gradient", color: "gradient1" },
              style: ({ theme }: any) => ({
                background: theme.palette.gradient.gradient1,
                boxShadow:
                  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
              }),
            },

            {
              props: { variant: "maptool" },
              style: ({ theme }: any) => ({
                ...theme.config.glassmorphism,
                borderRadius: "4px",
                background: theme.palette.glassmorphism.glassmorphism1,
                border: "0.5px solid #E2E3E3",
                boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
                height: "40px",
                width: "40px",
                padding: "unset",
                minWidth: "40px",
              }),
            },
            {
              props: { variant: "icon", color: "gradient" },
              style: ({ theme }: any) => ({
                ...theme.config.glassmorphism,
                borderRadius: "20px",
                background: `${theme.palette.gradient.gradient2} !important`,

                boxShadow: "unset",
                height: "38px",
                width: "38px",
                padding: "unset",
                minWidth: "38px",
              }),
            },
            {
              props: { variant: "icon" },
              style: ({ theme }: any) => ({
                ...theme.config.glassmorphism,
                borderRadius: "20px",
                background: theme.palette.glassmorphism.glassmorphism1,

                boxShadow: "unset",
                height: "38px",
                width: "38px",
                padding: "unset",
                minWidth: "38px",
              }),
            },
          ],
        },
        MuiTextField: {
          variants: [
            {
              props: { variant: "outlined" },
              style: ({ theme }: any) => ({
                "& .MuiOutlinedInput-adornedEnd": {
                  paddingRight: 8,
                },
                "& .MuiSelect-icon": {
                  color: theme.palette.primary.contrastText,
                },
                "& .MuiInputLabel-outlined": {
                  color: theme.palette.primary.contrastText,
                },
                "& .MuiOutlinedInput-input": {
                  ...theme.typography.Paragraph_Kanit_ExtraLight_14px,
                  color: theme.palette.primary.contrastText,
                  "&:-webkit-autofill": {
                    WebkitTextFillColor: theme.palette.text.primary,
                    WebkitBackgroundClip: "text",
                  },

                  "&::placeholder": {
                    opacity: 1,
                  },
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
                  background: Color(theme.palette.glassmorphism.glassmorphism1)
                    .alpha(0.3)
                    .hsl()
                    .string(),
                  "& fieldset": {
                    borderColor: Color(
                      theme.palette.glassmorphism.glassmorphism1
                    )
                      .alpha(0.3)
                      .hsl()
                      .string(),
                  },
                  "&:hover fieldset": {
                    borderColor: Color(
                      theme.palette.glassmorphism.glassmorphism1
                    )
                      .alpha(0.3)
                      .hsl()
                      .string(),
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: Color(
                      theme.palette.glassmorphism.glassmorphism1
                    )
                      .alpha(0.3)
                      .hsl()
                      .string(),
                  },
                  "&.Mui-error fieldset": {
                    color: theme.palette.error.main,
                  },
                },
              }),
            },
            {
              props: { variant: "outlined", color: "glassmorphism" },
              style: ({ theme }: any) => ({
                "& .MuiInputLabel-outlined": {
                  background: theme.palette.glassmorphism.glassmorphism5,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.secondary.dark,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.dark,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.secondary.dark,
                  },
                  "&.Mui-error fieldset": {
                    color: theme.palette.error.main,
                  },
                },
              }),
            },
          ],
        },
        MuiToggleButton: {
          styleOverrides: {
            root: ({ theme }: any) => ({
              border: "unset",
              color: theme.palette.primary.contrastText,
            }),
          },
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
