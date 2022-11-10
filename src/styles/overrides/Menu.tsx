import { Theme } from "@mui/material/styles";

export default function Menu(theme: Theme) {
  return {
    MuiMenu: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          ".MuiMenu-paper": theme.config.card,
          "&.Mui-selected": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          },
          "&.MuiMenuItem-root.Mui-selected": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        }),
      },
    },
  };
}
