import { jsx as _jsx } from "react/jsx-runtime";
import { TextField as MUITextField, } from '@mui/material';
const TextField = ({ errorMessage, ...rest }) => {
    return (_jsx(MUITextField, { fullWidth: true, variant: "outlined", error: !!errorMessage, helperText: errorMessage, ...rest }));
};
export default TextField;
