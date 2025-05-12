import { jsx as _jsx } from "react/jsx-runtime";
import { TextField as MUITextField, } from '@mui/material';
import { styled } from '@mui/material/styles';
const CustomTextField = styled(MUITextField, {
    shouldForwardProp: (prop) => prop !== 'isMessageField'
})(({ theme, isMessageField }) => ({
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
const TextField = ({ errorMessage, isMessageField = false, multiline = false, ...rest }) => {
    return (_jsx(CustomTextField, { fullWidth: true, variant: "outlined", error: !!errorMessage, helperText: errorMessage, isMessageField: isMessageField || multiline, multiline: isMessageField || multiline, rows: isMessageField ? 4 : undefined, ...rest }));
};
export default TextField;
