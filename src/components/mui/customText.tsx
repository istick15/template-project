import { forwardRef, ReactNode, useMemo, useState } from "react";
// @mui
import { Typography, TypographyProps } from "@mui/material";
// utils

// ----------------------------------------------------------------------

type IProps = TypographyProps;

interface Props extends IProps {
  children: ReactNode;
  type?: "extraLight" | "light" | "medium" | "regular" | "bold" | "black";
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
  color?: TypographyProps["color"];
}

const Text = forwardRef<HTMLAnchorElement, Props>(
  ({ color, type, size, children, sx, ...other }, ref) => {
    const [fontType, setFontType] = useState<any>("");
    const [fontSize, setFontSize] = useState<any>(0);
    useMemo(() => {
      setFontType(() => {
        switch (type) {
          case "extraLight":
            return ["NotoSans-ExtraLight", "Prompt-ExtraLight"].join(",");
          case "light":
            return ["NotoSans-Light", "Prompt-Light"].join(",");
          case "medium":
            return ["NotoSans-Medium", "Prompt-Medium"].join(",");
          case "regular":
            return ["NotoSans-Regular", "Prompt-Regular"].join(",");
          case "bold":
            return ["NotoSans-Bold", "Prompt-Bold"].join(",");
          case "black":
            return ["NotoSans-Black", "Prompt-Black"].join(",");
          default:
            return ["NotoSans-Regular", "Prompt-Regular"].join(",");
        }
      });

      setFontSize(() => {
        switch (size) {
          case "overline":
            return 10;
          case "caption":
            return 12;
          case "subtitle2":
            return 14;
          case "subtitle1":
            return 16;
          case "body2":
            return 18;
          case "body1":
            return 20;
          case "h6":
            return 20;
          case "h5":
            return 23;
          case "h4":
            return 32;
          case "h3":
            return 48;
          case "h2":
            return 60;
          case "h1":
            return 96;
          default:
            return 16;
        }
      });
    }, []);

    return (
      <Typography
        ref={ref}
        sx={{
          fontFamily: fontType,
          fontSize: fontSize,
          ...sx,
        }}
        color={color}
        {...other}
      >
        {children}
      </Typography>
    );
  }
);

export default Text;
