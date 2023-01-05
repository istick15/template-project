export default function Paper(theme: any) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: "10px",
          background: "rgb(255, 255, 255)",
        },
      },
    },
  };
}
