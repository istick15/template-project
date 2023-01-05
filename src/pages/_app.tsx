import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import Meta from "../components/meta";
import "../languages/index";
import "simplebar/src/simplebar.css";
import moment from "moment";
import "moment/locale/th";
import "moment/locale/en-gb";
import { parseCookies, setCookie } from "nookies";
import { useTranslation } from "react-i18next";
import Router, { useRouter, withRouter } from "next/router";
import TransitionPage from "../components/transitions/transitionPage";

const Transition = dynamic(import("../components/transitions/transition"), {
  ssr: false,
});

const ThemeContextProvider = dynamic(
  () => import("../context/theme").then((mod) => mod.ThemeContextProvider),
  { ssr: false }
);

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const cookies = parseCookies(null);

    if (!cookies["Lang"]) {
      setCookie(null, "Lang", i18n.language, { path: "/" });
    } else {
      i18n.changeLanguage(cookies["Lang"]);
      moment.locale(cookies["Lang"] === "th" ? "th" : "en-gb");
    }
  }, []);

  const router = useRouter();
  const clearTimerRef: any = React.useRef();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleStart = (url: any) => {
      clearTimerRef.current = setTimeout(() => {
        setLoading(true);
      }, 500);
    };
    const handleComplete = (url: any) => {
      clearTimeout(clearTimerRef.current);
      setLoading(false);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <CacheProvider value={emotionCache}>
      <Meta title={"template"} />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeContextProvider>
        <CssBaseline />
        <TransitionPage loading={loading}>
          <Transition transitionkey={router.route}>
            <Component {...pageProps} />
          </Transition>
        </TransitionPage>
      </ThemeContextProvider>
    </CacheProvider>
  );
};

export default withRouter(MyApp);
