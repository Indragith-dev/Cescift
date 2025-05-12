// src/components/common/TextField.tsx
import React from 'react';
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

type Props = MUITextFieldProps & {
  errorMessage?: string; // Rename to avoid conflict with MUI's `error` prop
  isMessageField?: boolean;
};

const CustomTextField = styled(MUITextField, { 
  shouldForwardProp: (prop) => prop !== 'isMessageField' 
})<{ isMessageField?: boolean }>(({ theme, isMessageField }) => ({
  ...(isMessageField && {
    '& .MuiInputBase-root': {
      minHeight: '120px', // Explicitly set height for message field
      alignItems: 'flex-start',
      padding: '8px 14px',
    },
    '& textarea': {
      height: '100% !important',
      overflow: 'auto !important',
    },
  }),
  '& .MuiFormHelperText-root': {
    position: 'absolute',
    bottom: '-20px',
    left: 0,
    margin: 0,
    fontSize: '0.75rem',
  },
  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },
}));

const TextField: React.FC<Props> = ({ 
  errorMessage, 
  isMessageField = false, 
  multiline = false,
  ...rest 
}) => {
  return (
    <CustomTextField
      fullWidth
      variant="outlined"
      error={!!errorMessage}
      helperText={errorMessage}
      isMessageField={isMessageField || multiline}
      multiline={isMessageField || multiline}
      rows={isMessageField ? 4 : undefined}
      {...rest}
    />
  );
};

export default TextField;