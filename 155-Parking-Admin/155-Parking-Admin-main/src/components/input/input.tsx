import React from "react";
import { Box, InputBase, SxProps, Theme, Typography } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";

export interface UiInputProps {
  variant?: "outlined" | "standard" | "filled";
  icon?: React.ReactNode;
  startIcon?: React.ReactNode;
  control?: Control<any> | null;
  label?: string;
  errorMessage?: string;
  name: string;
  errors?: FieldErrors;
  InputProps?: object;
  containerSx?: SxProps<Theme>;
  inputSx?: SxProps<Theme>;
  placeholder?: string;
  [key: string]: any;
}

const InputField = ({
  variant = "outlined",
  icon = null,
  startIcon = null,
  control = null,
  label = "",
  errorMessage = "",
  name = "",
  errors = {},
  InputProps = {},
  showBorder = true,
  containerSx = {},
  ...otherProps
}: UiInputProps) => {
  const isError = Boolean(errors?.[name]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 0.8,
        ...containerSx,
        // minWidth: { xs: 320, md: "unset" },
      }}
    >
      {/* Label */}
      {label && (
        <Typography
          sx={
            {
              // color: "#C4C4C4",
            }
          }
          fontWeight={500}
          variant="body2"
        >
          {label}
        </Typography>
      )}

      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Box
              sx={{
                background: "#F2F2F2",
                borderRadius: "10px",
                // border: showBorder
                //   ? isError
                //     ? "1px solid"
                //     : "1px solid"
                //   : "none",
                borderColor: isError ? "error.main" : "primary.main",
                // py: 1,
                height: { xs: "38px", md: "42px" },
                px: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontFamily: "sans-serif",
              }}
            >
              {startIcon}

              <InputBase
                {...field}
                {...otherProps}
                fullWidth
                sx={{
                  fontSize: "16px",
                  fontFamily: "inherit",
                }}
                placeholder={otherProps.placeholder}
                {...InputProps}
              />

              {icon}
            </Box>
          )}
        />
      ) : (
        <Box
          sx={{
            background: "#49545D",
            borderRadius: "10px",
            // border: showBorder ? (isError ? "1px solid" : "1px solid") : "none",
            borderColor: isError ? "error.main" : "primary.main",
            // py: 1,
            height: { xs: "38px", md: "40px" },
            px: 1.5,
            display: "flex",
            alignItems: "center",
            fontFamily: "sans-serif",
            gap: 1,
          }}
        >
          {startIcon}

          <InputBase
            {...otherProps}
            fullWidth
            sx={{
              color: "#fff",
              fontSize: "16px",
              fontFamily: "inherit",
            }}
            placeholder={otherProps.placeholder}
            {...InputProps}
          />

          {icon}
        </Box>
      )}

      {/* Error Message */}
      {isError && (
        <Typography sx={{ color: "#ff5f5f", fontSize: "12px" }}>
          {errors?.[name]?.message?.toString() || errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default InputField;

// import React from "react";
// import TextField from "@mui/material/TextField";
// import { Controller } from "react-hook-form";
// import { Stack, Typography } from "@mui/material";

// const Input = ({ control, name, label, ...rest }) => {
//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field, fieldState: { error } }) => (
//         <Stack my={0.3} direction="column" gap={1}>
//           {label && <Typography fontWeight={600}>{label}</Typography>}
//           <TextField
//             {...field}
//             placeholder={label}
//             fullWidth
//             error={!!error}
//             helperText={error ? error.message : ""}
//             size="small"
//             sx={{
//               "& .MuiInputBase-input": {
//                 // border: "1px solid #F2F2F2",
//                 borderRadius: 1,
//                 bgcolor: "#F2F2F2",
//                 color: "text.white",
//               },
//             }}
//             {...rest}
//           />
//         </Stack>
//       )}
//     />
//   );
// };

// export default Input;
