import { Theme } from "@mui/material/styles";

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }: any) => theme.config.card,
      },
    },
  };
}
