import { Theme } from "@mui/material/styles";

export default function ToggleButton(theme: Theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          border: "unset",
          color: theme.palette.primary.contrastText,
        }),
      },
    },
  };
}
