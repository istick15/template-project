export default function Menu(theme: any) {
  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          ".MuiMenu-paper": {
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: "10px",
            background: "rgb(255, 255, 255)",
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          },
          "&.MuiMenuItem-root.Mui-selected": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            "&:hover": {
              backgroundColor: theme.palette.other.customize8,
            },
          },
        },
      },
    },
  };
}
