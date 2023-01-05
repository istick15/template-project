import { Box } from "@mui/material";
import React from "react";
import { BASE_PATH } from "../../config";

interface SvgProps {
  icon: any;
  color?: string;
  size?: any;
}

const SvgIcon = ({ icon, color, size }: SvgProps) => {
  return (
    <Box
      component="div"
      sx={{
        ...(size ? size : { width: "60px", height: "60px" }),
        mask: `url(${BASE_PATH}${icon}) no-repeat`,
        maskSize: "cover",
        maskRepeat: "round",
        display: "inline-block",
        background: color ? color : "white",
      }}
    ></Box>
  );
};

export default SvgIcon;
