// src/components/common/TextField.tsx
import React from 'react';
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material';

type Props = MUITextFieldProps & {
  errorMessage?: string; // Rename to avoid conflict with MUI's `error` prop
};

const TextField: React.FC<Props> = ({ errorMessage, ...rest }) => {
  return (
    <MUITextField
      fullWidth
      variant="outlined"
      error={!!errorMessage}
      helperText={errorMessage}
      {...rest}
    />
  );
};

export default TextField;
