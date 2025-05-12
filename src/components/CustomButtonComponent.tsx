// src/components/common/Button.tsx
import React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';

type Props = MUIButtonProps;

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <MUIButton variant="contained" {...rest}>
      {children}
    </MUIButton>
  );
};

export default Button;
