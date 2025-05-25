import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../components/CustomButtonComponent';
import TextField from '../../components/TextFieldComponent';
import ReactPhoneInputComponent from './components/intl-phone-input';
const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [phoneCountryData, setPhoneCountryData] = useState(null);
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }
        else if (!phoneCountryData) {
            newErrors.phone = 'Please select a country for your phone number';
        }
        else if (!isValidPhone(formData.phone, phoneCountryData)) {
            const countryName = phoneCountryData.name || 'selected country';
            newErrors.phone = `Please enter a valid phone number for ${countryName}`;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const isValidPhone = (phone, countryData) => {
        if (!phone || !countryData)
            return false;
        // Remove all non-digit characters except the leading +
        const cleanPhone = phone.replace(/[^\d+]/g, '');
        // Remove country code for validation
        const dialCode = countryData.dialCode || '';
        const phoneWithoutCountry = cleanPhone.startsWith('+')
            ? cleanPhone.slice(dialCode.length + 1)
            : cleanPhone.slice(dialCode.length);
        // Country-specific validation rules
        switch (countryData.countryCode?.toLowerCase()) {
            case 'in':
                // India: 10 digits, mobile numbers start with 6-9
                return /^[6-9]\d{9}$/.test(phoneWithoutCountry);
            case 'us':
            case 'ca':
                // US/Canada: 10 digits, area code can't start with 0 or 1
                return /^[2-9]\d{2}[2-9]\d{6}$/.test(phoneWithoutCountry);
            case 'gb':
                // UK: 10-11 digits, various formats
                return /^(\d{10}|\d{11})$/.test(phoneWithoutCountry) && phoneWithoutCountry.length >= 10;
            case 'au':
                // Australia: 9 digits for mobile (starting with 4), 8 digits for landline
                return /^([4]\d{8}|[2378]\d{7})$/.test(phoneWithoutCountry);
            case 'de':
                // Germany: 10-12 digits
                return /^\d{10,12}$/.test(phoneWithoutCountry);
            case 'fr':
                // France: 9 digits (without leading 0)
                return /^[1-9]\d{8}$/.test(phoneWithoutCountry);
            case 'it':
                // Italy: 9-10 digits
                return /^\d{9,10}$/.test(phoneWithoutCountry);
            case 'es':
                // Spain: 9 digits
                return /^[6-9]\d{8}$/.test(phoneWithoutCountry);
            case 'br':
                // Brazil: 10-11 digits
                return /^\d{10,11}$/.test(phoneWithoutCountry);
            case 'mx':
                // Mexico: 10 digits
                return /^\d{10}$/.test(phoneWithoutCountry);
            case 'jp':
                // Japan: 10-11 digits
                return /^\d{10,11}$/.test(phoneWithoutCountry);
            case 'kr':
                // South Korea: 9-11 digits
                return /^\d{9,11}$/.test(phoneWithoutCountry);
            case 'cn':
                // China: 11 digits, mobile starts with 1
                return /^1[3-9]\d{9}$/.test(phoneWithoutCountry);
            case 'sg':
                // Singapore: 8 digits
                return /^[689]\d{7}$/.test(phoneWithoutCountry);
            case 'my':
                // Malaysia: 9-10 digits
                return /^\d{9,10}$/.test(phoneWithoutCountry);
            case 'th':
                // Thailand: 9 digits
                return /^[689]\d{8}$/.test(phoneWithoutCountry);
            case 'id':
                // Indonesia: 9-13 digits
                return /^\d{9,13}$/.test(phoneWithoutCountry);
            case 'ph':
                // Philippines: 10 digits
                return /^9\d{9}$/.test(phoneWithoutCountry);
            case 'vn':
                // Vietnam: 9-10 digits
                return /^\d{9,10}$/.test(phoneWithoutCountry);
            case 'za':
                // South Africa: 9 digits
                return /^\d{9}$/.test(phoneWithoutCountry);
            case 'eg':
                // Egypt: 10 digits
                return /^1[0-2,5]\d{8}$/.test(phoneWithoutCountry);
            case 'ng':
                // Nigeria: 10 digits
                return /^[7-9]\d{9}$/.test(phoneWithoutCountry);
            case 'ke':
                // Kenya: 9 digits
                return /^[7]\d{8}$/.test(phoneWithoutCountry);
            case 'ae':
                // UAE: 9 digits
                return /^[2-9]\d{8}$/.test(phoneWithoutCountry);
            case 'sa':
                // Saudi Arabia: 9 digits
                return /^[5]\d{8}$/.test(phoneWithoutCountry);
            case 'tr':
                // Turkey: 10 digits
                return /^[5]\d{9}$/.test(phoneWithoutCountry);
            case 'ru':
                // Russia: 10 digits
                return /^9\d{9}$/.test(phoneWithoutCountry);
            case 'pl':
                // Poland: 9 digits
                return /^\d{9}$/.test(phoneWithoutCountry);
            case 'nl':
                // Netherlands: 9 digits
                return /^[1-9]\d{8}$/.test(phoneWithoutCountry);
            case 'be':
                // Belgium: 8-9 digits
                return /^\d{8,9}$/.test(phoneWithoutCountry);
            case 'ch':
                // Switzerland: 9 digits
                return /^[1-9]\d{8}$/.test(phoneWithoutCountry);
            case 'at':
                // Austria: 10-11 digits
                return /^\d{10,11}$/.test(phoneWithoutCountry);
            case 'se':
                // Sweden: 9 digits
                return /^[1-9]\d{8}$/.test(phoneWithoutCountry);
            case 'no':
                // Norway: 8 digits
                return /^[2-9]\d{7}$/.test(phoneWithoutCountry);
            case 'dk':
                // Denmark: 8 digits
                return /^[2-9]\d{7}$/.test(phoneWithoutCountry);
            case 'fi':
                // Finland: 9 digits
                return /^[1-9]\d{8}$/.test(phoneWithoutCountry);
            default:
                // General validation: 7-15 digits for unknown countries
                return /^\d{7,15}$/.test(phoneWithoutCountry) && phoneWithoutCountry.length >= 7;
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;
        // Auto-capitalize first letter of name as user types
        if (name === 'name' && value.length > 0) {
            formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
        }
        setFormData({ ...formData, [name]: formattedValue });
        setErrors({ ...errors, [name]: undefined });
        setSubmitError(''); // Clear any previous submit errors
    };
    const handlePhoneChange = (phone, countryData, event, formattedValue) => {
        console.log('Phone changed:', { phone, countryData, formattedValue });
        setFormData({ ...formData, phone: phone });
        setPhoneCountryData(countryData);
        // Clear phone error if the number becomes valid
        if (isValidPhone(phone, countryData) && errors.phone) {
            setErrors({ ...errors, phone: undefined });
        }
        setSubmitError(''); // Clear any previous submit errors
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
        // Clear previous states
        setSubmitSuccess(false);
        setSubmitError('');
        if (validateForm()) {
            setIsLoading(true);
            try {
                const response = await fetch('https://cesciftbackend.onrender.com/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    setSubmitSuccess(true);
                    setFormData({ name: '', email: '', phone: '+91', message: '' });
                    // Reset to India as default country
                    setPhoneCountryData({
                        name: 'India',
                        countryCode: 'in',
                        dialCode: '+91'
                    });
                    setSubmitError('');
                }
                else {
                    const data = await response.json();
                    console.error('Error sending email:', data.message);
                    setSubmitError(data.message || 'Failed to send message. Please try again.');
                    setSubmitSuccess(false);
                }
            }
            catch (error) {
                console.error('Error submitting form:', error);
                setSubmitError('Network error. Please check your connection and try again.');
                setSubmitSuccess(false);
            }
            finally {
                setIsLoading(false);
            }
        }
    };
    return (_jsxs(ContactContainer, { children: [_jsxs(HeroSection, { children: [_jsx(HeroTitle, { children: "Contact Us" }), _jsx(HeroSubtitle, { children: "We'd love to hear from you. Get in touch with us below." })] }), _jsx(FormWrapper, { children: _jsxs(Form, { onSubmit: handleSubmit, children: [_jsx(TextField, { name: "name", placeholder: "Name", value: formData.name, onChange: handleChange, errorMessage: errors.name, disabled: isLoading }), _jsx(TextField, { name: "email", placeholder: "Email", value: formData.email, onChange: handleChange, errorMessage: errors.email, disabled: isLoading }), _jsx(ReactPhoneInputComponent, { name: "phone", placeholder: "Phone Number", value: formData.phone, onChange: handlePhoneChange, errorMessage: errors.phone, disabled: isLoading }), _jsx(TextField, { name: "message", placeholder: "Your Message", value: formData.message, onChange: handleChange, errorMessage: errors.message, isMessageField: true, className: 'text', disabled: isLoading }), _jsx(ButtonWrapper, { children: _jsx(Button, { type: "submit", style: {
                                    minHeight: '40px',
                                    opacity: isLoading ? 0.7 : 1,
                                    cursor: isLoading ? 'not-allowed' : 'pointer'
                                }, disabled: isLoading, children: isLoading ? (_jsxs(ButtonContent, { children: [_jsx(Spinner, {}), _jsx("span", { children: "Sending..." })] })) : (_jsx("label", { children: "Send Message" })) }) }), isLoading && (_jsx(LoadingOverlay, { children: _jsxs(LoadingContent, { children: [_jsx(LoadingSpinner, {}), _jsx(LoadingText, { children: "Sending your message..." })] }) })), submitSuccess && (_jsx(SuccessText, { children: "Thank you! Your message has been sent successfully." })), submitError && (_jsx(ErrorText, { children: submitError }))] }) })] }));
};
export default ContactPage;
// Animations
const spin = keyframes `
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const pulse = keyframes `
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;
// Styled Components
const ContactContainer = styled.div `
  padding-top: 80px;
`;
const HeroSection = styled.section `
  background-color: #0a1e2f;
  background-image: url('/src/assets/images/about-hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  text-align: center;
  padding: 100px 5%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 30, 47, 0.7);
  }

  z-index: 1;
`;
const HeroTitle = styled.h1 `
  font-size: 3.5rem;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;
const HeroSubtitle = styled.p `
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
const FormWrapper = styled.section `
  padding: 80px 5%;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
`;
const Form = styled.form `
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
`;
const ButtonWrapper = styled.div `
  position: relative;
`;
const ButtonContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Spinner = styled.div `
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
const LoadingOverlay = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(245, 247, 250, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  z-index: 10;
`;
const LoadingContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;
const LoadingSpinner = styled.div `
  width: 40px;
  height: 40px;
  border: 3px solid #e2e8f0;
  border-top: 3px solid #0a1e2f;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
const LoadingText = styled.p `
  color: #0a1e2f;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  animation: ${pulse} 2s ease-in-out infinite;
`;
const SuccessText = styled.p `
  color: #22c55e;
  font-size: 1rem;
  margin-top: 10px;
  padding: 12px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 6px;
  text-align: center;
`;
const ErrorText = styled.p `
  color: #ef4444;
  font-size: 1rem;
  margin-top: 10px;
  padding: 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  text-align: center;
`;
