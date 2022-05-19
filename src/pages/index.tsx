import { Box, Button, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import { parseCookies, setCookie } from "nookies";
import { Fragment, useContext } from "react";
import { ThemeContext } from "../context/theme";

const Home: NextPage = () => {
  const theme = useTheme();
  const cookies = parseCookies();
  const { settheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <Box>
      <Fragment>
        <Typography variant="H1_Kanit_Light_32px">Theme</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setCookie(
              null,
              process.env.NEXT_PUBLIC_THEME,
              cookies.default === "default" ? "dark" : "default"
            );
          }}
        >
          ssss
        </Button>
      </Fragment>
    </Box>
  );
};

export default Home;
