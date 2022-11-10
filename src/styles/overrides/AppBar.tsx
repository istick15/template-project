import { Theme } from "@mui/material/styles";

const barHeight = 45;

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      variants: [
        {
          props: { variant: "elevation", color: "secondary" },
          style: ({ theme }: any) => ({
            height: barHeight,
            boxShadow: "unset",
            borderRadius: 0,
          }),
        },
      ],
    },
  };
}
