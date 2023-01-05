import { alpha, Components, Theme } from "@mui/material/styles";

export default function Select(theme: any) {
  const select: Components<Theme>["MuiSelect"] = {
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          margin: `0px 0px`,
          "& .MuiAutocomplete-inputRoot": {
            padding: "0px",
            background: "white",
          },
          "& .MuiOutlinedInput-multiline": {
            padding: `0.5px 0.5px`,
          },
          "& .MuiInputBase-input": {
            borderRadius: "10px",
            background: "white",
            backdropFilter: `blur(4px)`,
            color: theme.palette.text.primary,
            paddingRight: 4,
            "& fieldset": {
              border: "unset",
            },
            "&:hover fieldset": {
              border: `1px solid ${alpha(theme.palette.primary.main, 1)}`,
            },
            "&.Mui-focused fieldset": {
              border: `1px solid ${alpha(theme.palette.primary.main, 1)}`,
            },
          },
          "& .MuiOutlinedInput-input": {
            fontSize: 14,
            fontFamily: ["NotoSans-Regular", "Prompt-Regular"].join(","),
            padding: "10px 12px",
            color: theme.palette.text.primary,
            "&.Mui-disabled": {
              fontSize: 14,
              fontFamily: ["NotoSans-Regular", "Prompt-Regular"].join(","),
              color: theme.palette.text.secondary,
              WebkitTextFillColor: theme.palette.text.secondary,
            },
            "&:-webkit-autofill": {
              WebkitTextFillColor: theme.palette.text.primary,
            },
            "&::placeholder": {
              fontSize: 14,
              fontFamily: ["NotoSans-Bold", "Prompt-Bold"].join(","),
              color: theme.palette.text.secondary,
            },
          },
          "& .MuiSelect-icon": {
            color: theme.palette.text.primary,
          },
          "& .MuiInputLabel-outlined": {
            fontSize: 14,
            fontFamily: ["NotoSans-Regular", "Prompt-Regular"].join(","),
            color: theme.palette.text.secondary,
            transform: `translate(14px, 10px) scale(1)`,
          },
          "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
            transform: `translate(14px, -8px) scale(0.75)`,
          },
          "& .MuiFormHelperText-root": {
            margin: 0,
            marginTop: "4px",
          },
        },
      },
    ],
  };
  return {
    MuiSelect: { ...select },
  };
}
