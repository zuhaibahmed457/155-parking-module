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

const InpurField = ({
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
  ...otherProps
}: UiInputProps) => {
  const isError = Boolean(errors?.[name]);

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 0.8 }}
    >
      {/* Label */}
      {label && (
        <Typography
          sx={{
            color: "#C4C4C4",
          }}
          fontWeight={400}
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
                background: "#49545D",
                borderRadius: "10px",
                border: showBorder
                  ? isError
                    ? "1px solid"
                    : "1px solid"
                  : "none",
                borderColor: isError ? "error.main" : "primary.main",
                // py: 1,
                height: "38px",
                px: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {startIcon}

              <InputBase
                {...field}
                {...otherProps}
                fullWidth
                sx={{
                  color: "#fff",
                  fontSize: "16px",
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
            border: showBorder ? (isError ? "1px solid" : "1px solid") : "none",
            borderColor: isError ? "error.main" : "primary.main",
            // py: 1,
            height: "38px",
            px: 1.5,
            display: "flex",
            alignItems: "center",
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

export default InpurField;
