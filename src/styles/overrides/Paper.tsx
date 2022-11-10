import { Theme } from "@mui/material/styles";

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }: any) => theme.config.card,
      },
    },
  };
}
