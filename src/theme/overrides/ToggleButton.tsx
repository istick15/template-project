export default function ToggleButton(theme: any) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: "unset",
          color: theme.palette.primary.contrastText,
        },
      },
    },
  };
}
