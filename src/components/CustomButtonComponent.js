import { jsx as _jsx } from "react/jsx-runtime";
import { Button as MUIButton, } from '@mui/material';
const Button = ({ children, ...rest }) => {
    return (_jsx(MUIButton, { variant: "contained", ...rest, children: children }));
};
export default Button;
