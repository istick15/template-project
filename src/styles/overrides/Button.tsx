import { Theme } from "@mui/material/styles";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "gradient" },
          style: ({ theme }: any) => ({
            background: theme.palette.gradient.gradient4,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
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
        {
          props: { variant: "contained", color: "primary", type: "submit" },
          style: ({ theme }: any) => ({
            padding: "6px 0px",
            color: theme.palette.common.white,
            boxShadow: "0px 4.15984px 4.15984px rgba(178, 199, 86, 0.25)",
            borderRadius: "20px",
            "&.Mui-disabled": {
              backgroundColor: theme.palette.text.disabled,
            },
          }),
        },
        {
          props: { variant: "contained", color: "secondary", type: "submit" },
          style: ({ theme }: any) => ({
            padding: "6px 0px",
            color: theme.palette.common.white,
            boxShadow: "0px 4.15984px 4.15984px rgba(178, 199, 86, 0.25)",
            borderRadius: "20px",
            "&.Mui-disabled": {
              backgroundColor: theme.palette.text.disabled,
            },
          }),
        },
      ],
    },
  };
}
