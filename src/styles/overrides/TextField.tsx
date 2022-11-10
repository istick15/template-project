import { alpha, Components, Theme } from "@mui/material/styles";

export default function TextField(theme: Theme) {
  const textfield: Components<Theme>["MuiTextField"] = {
    variants: [
      {
        props: { variant: "outlined" },
        style: ({ theme }: any) => ({
          "& .MuiOutlinedInput-adornedEnd": {
            paddingRight: 8,
          },
          "& .MuiSelect-icon": {
            color: theme.palette.primary.contrastText,
          },
          "& .MuiInputLabel-outlined": {
            color: theme.palette.primary.contrastText,
          },
          "& .MuiOutlinedInput-input": {
            ...theme.typography.Paragraph_Kanit_ExtraLight_14px,
            color: theme.palette.primary.contrastText,

            "&::placeholder": {
              opacity: 1,
            },
            height: "unset",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            background: alpha(theme.palette.glassmorphism.glassmorphism1, 0.3),
            "& fieldset": {
              borderColor: alpha(
                theme.palette.glassmorphism.glassmorphism1,
                0.3
              ),
            },
            "&:hover fieldset": {
              borderColor: alpha(
                theme.palette.glassmorphism.glassmorphism1,
                0.3
              ),
            },
            "&.Mui-focused fieldset": {
              borderColor: alpha(
                theme.palette.glassmorphism.glassmorphism1,
                0.3
              ),
            },
            "&.Mui-error fieldset": {
              color: theme.palette.error.main,
            },
          },
        }),
      },
      {
        props: { variant: "outlined", size: "medium", color: "secondary" },
        style: ({ theme }: any) => ({
          "& .MuiInputBase-input.Mui-disabled": {
            opacity: 0.5,
          },
          "& .MuiOutlinedInput-adornedStart": {
            background: "white",
          },
          "& .MuiOutlinedInput-adornedEnd": {
            background: "white",
          },
          "& .MuiOutlinedInput-multiline": {
            padding: `0.5px 0.5px`,
          },
          "& .MuiAutocomplete-inputRoot": {
            padding: 0,
            background: "white",
          },
          "& .MuiInputLabel-outlined": {
            fontSize: 12,
            fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            color: theme.palette.secondary.main,
          },
          "& .MuiOutlinedInput-input": {
            borderRadius: 4,
            background: "white",
            padding: `7.07px 7.5px`,
            // "&:-webkit-autofill": {
            //   "-webkit-text-fill-color": theme.palette.text.primary,
            // },
            fontSize: 12,
            fontWeight: 300,
            color: theme.palette.text.primary,
            "&::placeholder": {
              opacity: 1,
              fontWeight: 400,
              fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            },
            height: "unset",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            "& fieldset": {
              borderColor: theme.palette.secondary.light,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.secondary.light,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.secondary.light,
            },
            "&.Mui-error fieldset": {
              color: theme.palette.error.main,
            },
          },
        }),
      },
      {
        props: { variant: "outlined", size: "small", color: "secondary" },
        style: ({ theme }: any) => ({
          "& .MuiOutlinedInput-multiline": {
            padding: `0.5px 0.5px`,
          },
          "& .MuiSelect-icon": {
            color: theme.palette.secondary.main,
          },
          "& .MuiInputBase-input.Mui-disabled": {
            opacity: 0.5,
          },
          "& .MuiInputLabel-outlined": {
            fontSize: 12,
            fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            color: theme.palette.secondary.main,
          },
          "& .MuiOutlinedInput-input": {
            borderRadius: 4,
            background: "white",
            padding: `2.9px 7.5px`,
            // "&:-webkit-autofill": {
            //   "-webkit-text-fill-color": theme.palette.text.primary,
            // },
            fontSize: 12,
            fontWeight: 300,
            color: theme.palette.text.primary,
            "&::placeholder": {
              opacity: 1,
              fontWeight: 400,
              fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            },
            height: "unset",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            "& fieldset": {
              borderColor: `#b1bdbe`,
            },
            "&:hover fieldset": {
              borderColor: `#b1bdbe`,
            },
            "&.Mui-focused fieldset": {
              borderColor: `#b1bdbe`,
            },
            "&.Mui-error fieldset": {
              color: theme.palette.error.main,
            },
          },
        }),
      },
      {
        props: {
          variant: "outlined",
          size: "small",
          color: "primary",
        },
        style: ({ theme }: any) => ({
          "& .MuiOutlinedInput-multiline": {
            padding: `0.5px 0.5px`,
          },
          "& .MuiSelect-icon": {
            color: theme.palette.secondary.main,
          },
          "& .MuiInputBase-input.Mui-disabled": {
            opacity: 0.5,
          },
          "& .MuiInputLabel-outlined": {
            fontSize: 12,
            fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            color: theme.palette.secondary.main,
          },
          "& .MuiOutlinedInput-input": {
            borderRadius: 4,
            background: "white",
            padding: `5.8px 7.5px`,
            // "&:-webkit-autofill": {
            //   "-webkit-text-fill-color": theme.palette.text.primary,
            // },
            fontSize: 12,
            fontWeight: 300,
            color: theme.palette.text.primary,
            "&::placeholder": {
              opacity: 1,
              fontWeight: 400,
              fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            },
            height: "unset",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            "& fieldset": {
              borderColor: `#b1bdbe`,
            },
            "&:hover fieldset": {
              borderColor: `#b1bdbe`,
            },
            "&.Mui-focused fieldset": {
              borderColor: `#b1bdbe`,
            },
            "&.Mui-error fieldset": {
              color: theme.palette.error.main,
            },
          },
        }),
      },
    ],
  };
  return {
    MuiTextField: { ...textfield },
  };
}
