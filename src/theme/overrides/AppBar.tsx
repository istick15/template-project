const barHeight = 45;

export default function AppBar(theme: any) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          borderRadius: "unset",
          background: "white",
          boxShadow: "0px 8px 100px rgba(0, 0, 0, 0.1)",
        }),
      },
      variants: [
        {
          props: { variant: "elevation", color: "secondary" },
          style: {
            height: barHeight,
            boxShadow: "unset",
            borderRadius: 0,
            background: theme.palette.secondary1.main,
          },
        },
      ],
    },
  };
}
