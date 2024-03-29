import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Box, useTheme } from "@mui/material";
import SvgIcon from "../icons/svgIcon";

const TransitionPage: FC<{ loading: boolean; children: ReactNode }> = ({
  loading,
  children,
}) => {
  const theme = useTheme();

  return (
    <motion.div style={{}}>
      {loading && (
        <motion.div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(111, 126, 140, 0.2)",
            backdropFilter: "blur(4px)",

            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 90, 180, 180, 0],
                borderRadius: ["4%", "4%", "50%", "50%", "4%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              style={{
                width: 60,
                height: 60,
                ...theme.config.jusCenter,
                background: theme.palette.gradient.gradient3,
                backgroundClip: "padding-box",
                border: `solid 5px transparent`,
              }}
            >
              <SvgIcon
                icon={"/images/logo.svg"}
                size={{
                  width: "36px",
                  height: "36px",
                  transform: `rotate(0deg)`,
                }}
                color={"white"}
              />
            </motion.div>
          </Box>
        </motion.div>
      )}

      <motion.div
        style={{
          zIndex: 0,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TransitionPage;
