import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/CustomButtonComponent';
import TextField from '../../components/TextFieldComponent';

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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if(formData.phone.trim() && !/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Form Submitted', formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
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
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          const data = await response.json();
          console.error('Error sending email:', data.message);
          setSubmitSuccess(false);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitSuccess(false);
      }
    }
    
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroTitle>Contact Us</HeroTitle>
        <HeroSubtitle>We'd love to hear from you. Get in touch with us below.</HeroSubtitle>
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
          <TextField
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            errorMessage={errors.message}
            isMessageField
            className='text'
          />

          <Button 
            type="submit" 
            style={{ minHeight: '40px'}}
            children={<label>Send Message</label>} 
          />

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
  position: relative;
`;

const SuccessText = styled.p`
  color: green;
  font-size: 1rem;
  margin-top: 10px;
`;