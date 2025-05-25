import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface ReactPhoneInputProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string, countryData: any, event: any, formattedValue: string) => void;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
}

const ReactPhoneInputComponent: React.FC<ReactPhoneInputProps> = ({
  name,
  placeholder = "Phone Number",
  value,
  onChange,
  errorMessage,
  className,
  disabled
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (phone: string, countryData: any, event: any, formattedValue: string) => {
    onChange(phone, countryData, event, formattedValue);
  };

  return (
    <PhoneInputWrapper className={className} hasError={!!errorMessage} isFocused={isFocused}>
      <PhoneInput
        country={'in'}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        enableSearch={true}
        searchPlaceholder="Search countries"
        preferredCountries={['in', 'us', 'gb', 'ca', 'au']}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        inputProps={{
          name: name,
          required: true,
          autoFocus: false
        }}
        specialLabel=""
        countryCodeEditable={false}
        enableAreaCodes={false}
        enableLongNumbers={false}
        disableCountryCode={false}
        disableDropdown={false}
        disableSearchIcon
        disabled={disabled}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </PhoneInputWrapper>
  );
};

export default ReactPhoneInputComponent;

interface PhoneInputWrapperProps {
  hasError: boolean;
  isFocused: boolean;
}

const PhoneInputWrapper = styled.div<PhoneInputWrapperProps>`
  position: relative;
  width: 100%;

  /* Override react-phone-input-2 styles to match MUI TextField */
  .react-tel-input {
    .form-control {
      width: 100% !important;
      min-height: 56px !important;
      height: 56px !important;
      padding: 16.5px 14px !important;
      padding-left: 60px !important;
      font-size: 16px !important;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
      font-weight: 400 !important;
      line-height: 1.4375em !important;
      letter-spacing: 0.00938em !important;
      color: rgba(0, 0, 0, 0.87) !important;
      border: 1px solid ${props => 
        props.hasError ? '#d32f2f' : 
        props.isFocused ? '#1976d2' : 
        'rgba(0, 0, 0, 0.23)'
      } !important;
      border-radius: 8px !important;
      background-color: transparent !important;
      transition: border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms !important;
      box-shadow: none !important;

      &:hover {
        border-color: ${props => 
          props.hasError ? '#d32f2f' : 
          props.isFocused ? '#1976d2' : 
          'rgba(0, 0, 0, 0.87)'
        } !important;
      }

      &:focus {
        outline: none !important;
        border-color: ${props => props.hasError ? '#d32f2f' : '#1976d2'} !important;
        border-width: 2px !important;
        padding: 15.5px 13px !important;
        padding-left: 60px !important;
      }

      &::placeholder {
        color: rgba(0, 0, 0, 0.6) !important;
        opacity: 1 !important;
        font-size: 16px !important;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
        font-weight: 400 !important;
        line-height: 1.4375em !important;
        letter-spacing: 0.00938em !important;
      }
    }

    .flag-dropdown {
      min-height: 56px !important;
      height: 56px !important;
      border: none !important;
      background-color: transparent !important;

      .selected-flag {
        height: 100% !important;
        padding: 0 12px !important;
        background-color: transparent !important;
        display: flex !important;
        align-items: center !important;

        &:hover, &:focus {
          background-color: transparent !important;
        }

        .arrow {
          border-top: 4px solid rgba(0, 0, 0, 0.54) !important;
          border-left: 3px solid transparent !important;
          border-right: 3px solid transparent !important;
          margin-left: 8px !important;
        }
      }
    }

    /* Ensure form-control has proper focus states */
    &.open .form-control,
    &:focus-within .form-control {
      border-color: ${props => props.hasError ? '#d32f2f' : '#1976d2'} !important;
      border-width: 2px !important;
      padding: 15.5px 13px !important;
      padding-left: 60px !important;
    }

    /* Hover state for form-control */
    &:hover .form-control {
      border-color: ${props => 
        props.hasError ? '#d32f2f' : 
        props.isFocused ? '#1976d2' : 
        'rgba(0, 0, 0, 0.87)'
      } !important;
    }

    .country-list {
      border-radius: 4px !important;
      box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12) !important;
      border: none !important;
      z-index: 1300 !important;
      max-height: 280px !important;
      overflow-y: auto !important;
      margin-top: 4px !important;
      background-color: #ffffff !important;

      /* Custom scrollbar styling */
      &::-webkit-scrollbar {
        width: 8px !important;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1 !important;
        border-radius: 4px !important;
      }

      &::-webkit-scrollbar-thumb {
        background: #c1c1c1 !important;
        border-radius: 4px !important;
        transition: background-color 0.2s ease !important;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8 !important;
      }

      /* Firefox scrollbar */
      scrollbar-width: thin !important;
      scrollbar-color: #c1c1c1 #f1f1f1 !important;

      .search {
        padding: 12px !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
        
        .search-box {
          width: 100% !important;
          padding: 10px 12px !important;
          min-height: 40px !important;
          border: 1px solid rgba(0, 0, 0, 0.23) !important;
          border-radius: 4px !important;
          font-size: 14px !important;
          font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
          outline: none !important;
          background-color: transparent !important;
          transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
          color: rgba(0, 0, 0, 0.87) !important;

          &:focus {
            border-color: #1976d2 !important;
            border-width: 2px !important;
            padding: 9px 11px !important;
          }

          &:hover {
            border-color: rgba(0, 0, 0, 0.87) !important;
          }

          &::placeholder {
            color: rgba(0, 0, 0, 0.6) !important;
            opacity: 1 !important;
          }
        }
      }

      .country {
        padding: 14px 16px !important;
        font-size: 14px !important;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
        font-weight: 400 !important;
        line-height: 1.43 !important;
        letter-spacing: 0.01071em !important;
        cursor: pointer !important;
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
        background-color: transparent !important;
        color: rgba(0, 0, 0, 0.87) !important;
        border: none !important;

        &:hover {
          background-color: rgba(0, 0, 0, 0.04) !important;
        }

        &.highlight {
          background-color: #1976d2 !important;
          color: #ffffff !important;
        }

        .dial-code {
          color: rgba(0, 0, 0, 0.6) !important;
          font-weight: 400 !important;
        }

        &.highlight .dial-code {
          color: rgba(255, 255, 255, 0.7) !important;
        }

        .country-name {
          font-weight: 400 !important;
        }

        &.highlight .country-name {
          color: #ffffff !important;
        }
      }
    }
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  bottom: -20px;
  left: 0;
  margin: 0;
  font-size: 0.75rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  color: #d32f2f;
`;