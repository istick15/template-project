import { alpha, Components, Theme } from "@mui/material/styles";

export default function TextField(theme: any) {
  const textfield: Components<Theme>["MuiTextField"] = {
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
          "& .MuiOutlinedInput-root": {
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
      {
        props: { variant: "outlined", color: "gray" },
        style: {
          margin: `0px 0px`,
          "& .MuiAutocomplete-inputRoot": {
            padding: "0px",
            background: theme.palette.background.gray,
          },
          "& .MuiOutlinedInput-multiline": {
            padding: `0.5px 0.5px`,
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            background: theme.palette.background.gray,
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
      {
        props: { variant: "outlined", size: "medium", color: "secondary" },
        style: {
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
            padding: "0px",
            background: "white",
          },
          "& .MuiInputLabel-outlined": {
            fontSize: 12,
            fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            color: theme.palette.secondary1.main,
          },
          "& .MuiOutlinedInput-input": {
            borderRadius: 4,
            background: "white",
            padding: `7.07px 7.5px`,
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
              borderColor: theme.palette.secondary1.light,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.secondary1.light,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.secondary1.light,
            },
            "&.Mui-error fieldset": {
              color: theme.palette.error.main,
            },
          },
        },
      },
      {
        props: { variant: "outlined", size: "small", color: "secondary" },
        style: {
          "& .MuiOutlinedInput-multiline": {
            padding: `0.5px 0.5px`,
          },
          "& .MuiSelect-icon": {
            color: theme.palette.secondary1.main,
          },
          "& .MuiInputBase-input.Mui-disabled": {
            opacity: 0.5,
          },
          "& .MuiInputLabel-outlined": {
            fontSize: 12,
            fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            color: theme.palette.secondary1.main,
          },
          "& .MuiOutlinedInput-input": {
            borderRadius: 4,
            background: "white",
            padding: `2.9px 7.5px`,

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
        },
      },
      {
        props: {
          variant: "outlined",
          size: "small",
          color: "primary",
        },
        style: {
          "& .MuiOutlinedInput-multiline": {
            padding: `0.5px 0.5px`,
          },
          "& .MuiSelect-icon": {
            color: theme.palette.secondary1.main,
          },
          "& .MuiInputBase-input.Mui-disabled": {
            opacity: 0.5,
          },
          "& .MuiInputLabel-outlined": {
            fontSize: 12,
            fontFamily: ["NotoSans-Light", "Prompt-ExtraLight"].join(","),
            color: theme.palette.secondary1.main,
          },
          "& .MuiOutlinedInput-input": {
            borderRadius: 4,
            background: "white",
            padding: `5.8px 7.5px`,

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
        },
      },
    ],
  };
  return {
    MuiTextField: { ...textfield },
  };
}
