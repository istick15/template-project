export default function Button(theme: any) {
  return {
    MuiButton: {
      variants: [
        {
          props: { variant: "gradient" },
          style: {
            background: theme.palette.gradient.gradient4,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: "4px",
          },
        },
        {
          props: { variant: "gradient", color: "glassmorphism5" },
          style: {
            background: theme.palette.glassmorphism.glassmorphism5,
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
          },
        },
        {
          props: { variant: "gradient", color: "gradient1" },
          style: {
            background: theme.palette.gradient.gradient1,
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
          },
        },
        {
          props: { variant: "maptool" },
          style: {
            ...theme.config.glassmorphism,
            borderRadius: "4px",
            background: theme.palette.glassmorphism.glassmorphism1,
            border: "0.5px solid #E2E3E3",
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
            height: "40px",
            width: "40px",
            padding: "unset",
            minWidth: "40px",
          },
        },
        {
          props: { variant: "icon", color: "gradient" },
          style: {
            ...theme.config.glassmorphism,
            borderRadius: "20px",
            background: `${theme.palette.gradient.gradient2} !important`,

            boxShadow: "unset",
            height: "38px",
            width: "38px",
            padding: "unset",
            minWidth: "38px",
          },
        },
        {
          props: { variant: "icon" },
          style: {
            ...theme.config.glassmorphism,
            borderRadius: "20px",
            background: theme.palette.glassmorphism.glassmorphism1,

            boxShadow: "unset",
            height: "38px",
            width: "38px",
            padding: "unset",
            minWidth: "38px",
          },
        },
        {
          props: { variant: "contained", color: "primary", type: "submit" },
          style: {
            padding: "6px 0px",
            color: theme.palette.common.white,
            boxShadow: "0px 4.15984px 4.15984px rgba(178, 199, 86, 0.25)",
            borderRadius: "20px",
            "&.Mui-disabled": {
              backgroundColor: theme.palette.text.disabled,
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary", type: "submit" },
          style: {
            padding: "6px 0px",
            color: theme.palette.common.white,
            boxShadow: "0px 4.15984px 4.15984px rgba(178, 199, 86, 0.25)",
            borderRadius: "20px",
            "&.Mui-disabled": {
              backgroundColor: theme.palette.text.disabled,
            },
          },
        },

        {
          props: { variant: "containedPrimary", color: "color" },
          style: {
            ...theme.config.btn,
            background: theme.palette.primary.main,
            "&:hover": {
              background: theme.palette.primary.main,
            },
          },
        },
        {
          props: { variant: "containedPrimary", color: "error" },
          style: {
            ...theme.config.btn,
            background: theme.palette.error.main,
            "&:hover": {
              background: theme.palette.error.main,
            },
          },
        },
        {
          props: { variant: "containedPrimary", color: "shadow" },
          style: {
            ...theme.config.btn,
            background: theme.palette.primary.main,
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
            "&:hover": {
              background: theme.palette.primary.main,
            },
          },
        },
        {
          props: { variant: "containedPrimary", color: "neon" },
          style: {
            ...theme.config.btn,
            background: theme.palette.primary.main,
            boxShadow: "1px 1px 10px 4px rgba(180, 206, 86, 0.25)",
            "&:hover": {
              background: theme.palette.primary.main,
            },
          },
        },
        {
          props: { variant: "containedPrimary", color: "borderde" },
          style: {
            ...theme.config.btn,
            border: `1px solid ${theme.palette.primary.main}`,
            boxShadow: "unset",
          },
        },
        {
          props: { variant: "containedPrimary", color: "gradient3" },
          style: {
            ...theme.config.btn,
            background: theme.palette.gradient.gradient3,
            boxShadow: "unset",
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
            "&:hover": {
              ...theme.config.neon,
              backgroundPosition: "0 0",
            },
            transition: "all 0.5s ease-out",
          },
        },
        {
          props: { variant: "containedSecondary1", color: "color" },
          style: {
            ...theme.config.btn,
            background: theme.palette.secondary1.main,
            "&:hover": {
              background: theme.palette.secondary1.main,
            },
          },
        },
        {
          props: { variant: "containedSecondary1", color: "shadow" },
          style: {
            ...theme.config.btn,
            background: theme.palette.secondary1.main,
            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
            "&:hover": {
              background: theme.palette.secondary1.main,
            },
          },
        },
        {
          props: { variant: "containedSecondary1", color: "neon" },
          style: {
            ...theme.config.btn,
            background: theme.palette.secondary1.main,
            boxShadow: "1px 1px 10px 4px rgba(180, 206, 86, 0.25)",
            "&:hover": {
              background: theme.palette.secondary1.main,
            },
          },
        },
        {
          props: { variant: "containedSecondary1", color: "borderde" },
          style: {
            ...theme.config.btn,
            border: `1px solid ${theme.palette.secondary1.main}`,
            boxShadow: "unset",
          },
        },
        {
          props: { variant: "containedSecondary1", color: "gradient7" },
          style: {
            ...theme.config.btn,
            background: theme.palette.gradient.gradient7,
            boxShadow: "unset",
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
            "&:hover": {
              ...theme.config.neonSecondary,
              backgroundPosition: "0 0",
            },
            transition: "all 0.5s ease-out",
          },
        },
      ],
    },
  };
}
