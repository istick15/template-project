import React, { FC } from "react";
import Head from "next/head";
import { APP_PLATFORM, BASE_PATH } from "../config";

interface MetaProps {
  path?: any;
  title?: any;
}

const Meta: FC<MetaProps> = ({ path, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href={`${BASE_PATH}/images/logo.svg`} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: "NotoSans-ExtraLight";
            font-style: normal;
            font-weight: 200;
            src: url("${BASE_PATH}/fonts/NotoSans-ExtraLight.ttf");
          }
          
          @font-face {
            font-family: "NotoSans-Light";
            font-style: normal;
            font-weight: 300;
            src: url("${BASE_PATH}/fonts/NotoSans-Light.ttf");
          }
          
          @font-face {
            font-family: "NotoSans-Regular";
            font-style: normal;
            font-weight: 400;
            src: url("${BASE_PATH}/fonts/NotoSans-Regular.ttf");
          }
          
          @font-face {
            font-family: "NotoSans-Medium";
            font-style: normal;
            font-weight: 500;
            src: url("${BASE_PATH}/fonts/NotoSans-Medium.ttf");
          }
          
          @font-face {
            font-family: "NotoSans-Bold";
            font-style: normal;
            font-weight: 700;
            src: url("${BASE_PATH}/fonts/NotoSans-Bold.ttf");
          }
          
          @font-face {
            font-family: "NotoSans-Black";
            font-style: normal;
            font-weight: 900;
            src: url("${BASE_PATH}/fonts/NotoSans-Black.ttf");
          }
          
          @font-face {
            font-family: "Prompt-ExtraLight";
            font-style: normal;
            font-weight: 200;
            src: url("${BASE_PATH}/fonts/Prompt-ExtraLight.ttf");
          }
          
          @font-face {
            font-family: "Prompt-Light";
            font-style: normal;
            font-weight: 300;
            src: url("${BASE_PATH}/fonts/Prompt-Light.ttf");
          }
          
          @font-face {
            font-family: "Prompt-Regular";
            font-style: normal;
            font-weight: 400;
            src: url("${BASE_PATH}/fonts/Prompt-Regular.ttf");
          }
          
          @font-face {
            font-family: "Prompt-Medium";
            font-style: normal;
            font-weight: 500;
            src: url("${BASE_PATH}/fonts/Prompt-Medium.ttf");
          }
          
          @font-face {
            font-family: "Prompt-Bold";
            font-style: normal;
            font-weight: 700;
            src: url("${BASE_PATH}/fonts/Prompt-Bold.ttf");
          }
          
          @font-face {
            font-family: "Prompt-Black";
            font-style: normal;
            font-weight: 900;
            src: url("${BASE_PATH}/fonts/Prompt-Black.ttf");
          }
          
          
          @font-face {
            font-family: "K2D-ExtraLight";
            font-style: normal;
            font-weight: 300;
            src: url("${BASE_PATH}/fonts/K2D-ExtraLight.ttf");
          }
          
          @font-face {
            font-family: "K2D-Light";
            font-style: normal;
            font-weight: 400;
            src: url("${BASE_PATH}/fonts/K2D-Light.ttf");
          }
          
          @font-face {
            font-family: "K2D-Regular";
            font-style: normal;
            font-weight: 500;
            src: url("${BASE_PATH}/fonts/K2D-Regular.ttf");
          }
          
          @font-face {
            font-family: "K2D-Medium";
            font-style: normal;
            font-weight: 700;
            src: url("${BASE_PATH}/fonts/K2D-Medium.ttf");
          }
          
          @font-face {
            font-family: "K2D-Bold";
            font-style: normal;
            font-weight: 900;
            src: url("${BASE_PATH}/fonts/K2D-Bold.ttf");
          }
          `,
        }}
      />

      <title>{title ? `${title} | ${APP_PLATFORM}` : APP_PLATFORM}</title>
    </Head>
  );
};

export default Meta;
