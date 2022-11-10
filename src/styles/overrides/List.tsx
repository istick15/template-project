import { Components, Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function List(theme: Theme) {
  const listItem: Components<Theme>["MuiListItem"] = {
    styleOverrides: {
      root: {
        ".Mui-selected": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          //   "&:hover": {
          //     backgroundColor: theme.palette.action.hover,
          //   },
        },
      },
    },
  };
  return {
    MuiListItem: {
      ...listItem,
    },
  };
}
