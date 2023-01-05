export default function Card(theme: any) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          ...theme.config.card,
        },
      },
    },
  };
}
