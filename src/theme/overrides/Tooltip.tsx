import { Theme } from "@mui/material/styles";

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: theme.palette.secondary1.main,
          borderRadius: `6px`,
          padding: "4px 12px",
          fontSize: `11px`,
          boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
        },
        arrow: {
          color: theme.palette.secondary1.main,
        },
      },
    },
  };
}
