import React from "react";
import { Controller } from "react-hook-form";
import {
  Stack,
  Typography,
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";

const SelectBox = ({
  control,
  name,
  label,
  options = [],
  optionRenderKeys = { label: "label", value: "value" },
  labelProps = {},
  sx = {},
  ...rest
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack my={0.3} direction="column" gap={1} width={1}>
          {label && (
            <Typography fontWeight={500} {...labelProps} variant="body2">
              {label}
            </Typography>
          )}
          <Select
            {...field}
            fullWidth
            size="small"
            error={!!error}
            inputRef={field.ref}
            displayEmpty
            sx={{
              borderRadius: 1,
              color: "white",
              "& .MuiSelect-select": {
                borderRadius: 1,
                border: "1px solid #D5D5D5",
              },
              // ...sx,
            }}
            {...rest}
          >
            {/* <MenuItem value="" disabled>
              Select {label || "Option"}
            </MenuItem> */}
            {options.map((option) => (
              <MenuItem
                key={option[optionRenderKeys.value]}
                value={option[optionRenderKeys.value]}
              >
                {option[optionRenderKeys.label]}
              </MenuItem>
            ))}
          </Select>

          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </Stack>
      )}
    />
  );
};

export default SelectBox;
