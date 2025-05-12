import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../../components/TextFieldComponent';
import Button from '../../components/CustomButtonComponent';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.phone.trim() && !/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate submit
      console.log('Form Submitted', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroTitle>Contact Us</HeroTitle>
        <HeroSubtitle>We’d love to hear from you. Get in touch with us below.</HeroSubtitle>
      </HeroSection>

      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <TextField
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            errorMessage={errors.name}
          />
          <TextField
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            errorMessage={errors.email}
          />
          <TextField
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            errorMessage={errors.phone}
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}

          <Button 
          type="submit" 
          title="Send Message"
          style={{ minHeight: '40px'}} />

          {submitSuccess && <SuccessText>Thank you! Your message has been sent.</SuccessText>}
        </Form>
      </FormWrapper>
    </ContactContainer>
  );
};

export default ContactPage;
const ContactContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
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

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FormWrapper = styled.section`
  padding: 80px 5%;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const SuccessText = styled.p`
  color: green;
  font-size: 1rem;
  margin-top: 10px;
`;
