import { Theme } from "@mui/material/styles";

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: theme.palette.secondary.main,
          borderRadius: `6px`,
          padding: "4px 12px",
          fontSize: `10px`,
        },
        arrow: {
          color: theme.palette.secondary.main,
        },
      },
    },
  };
}
