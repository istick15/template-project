export default function Autocomplete(theme: any) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
        },
        listbox: {
          padding: theme.spacing(0, 1),
          "& .MuiAutocomplete-option": {
            padding: theme.spacing(1),
            margin: theme.spacing(1, 0),
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
  };
}
