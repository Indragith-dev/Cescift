import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import styled from "styled-components";
import logo from "../Assests/icons/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBackground />

      <FooterWrapper>
        <FooterTop>
          {/* Logo Section */}
          <LogoSection>
            <LogoBox>
              <CompanyLogo src={logo} alt="CESCIFT Logo" />
            </LogoBox>
            <CompanyName>CeScift Technologies LLP</CompanyName>
            <TagLine>Empowering Industry with Smart Automation</TagLine>

            {/* Social Links */}
            {/* <SocialLinks>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
            </SocialLinks> */}
          </LogoSection>

          {/* Navigation Links */}
          <FooterLinks>
            <FooterColumn>
              <ColumnTitle>Company</ColumnTitle>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
              <FooterLink to="/expertise">Expertise</FooterLink>
            </FooterColumn>

            {/* Contact Information */}
            <ContactColumn>
              <ColumnTitle>Contact Us</ColumnTitle>
              <ContactInfo>
                <ContactItem>
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <div>
                    <ContactText>CeScift Technologies LLP</ContactText>
                    <ContactText>
                      C/O Abraham T P, Thottappallil Puthenpurayil (H),
                    </ContactText>
                    <ContactText>Lakkattoor P. O, Kottayam,</ContactText>
                    <ContactText>Kerala, 686502</ContactText>
                  </div>
                </ContactItem>
                <ContactLink href="mailto:sales@cescift.in">
                  <ContactIcon>
                    <FaEnvelope />
                  </ContactIcon>
                  <ContactText>sales@cescift.in</ContactText>
                </ContactLink>
                <ContactLink href="tel:+918848513468">
                  <ContactIcon>
                    <FaPhone />
                  </ContactIcon>
                  <ContactText>+91 8848513468</ContactText>
                </ContactLink>
              </ContactInfo>
            </ContactColumn>
          </FooterLinks>
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            &copy; {new Date().getFullYear()} CESCIFT Technologies LLP. All
            rights reserved.
          </Copyright>
          <DesignedBy>Designed by CESCIFT Technologies</DesignedBy>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
  background-color: #0a1e2f;
  color: #fff;
  padding: 80px 0 30px;
  position: relative;
  overflow: hidden;
  margin-top: 0;
`;

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 10% 10%,
      rgba(30, 144, 255, 0.05) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(100, 181, 246, 0.05) 0%,
      transparent 25%
    );
  z-index: 0;
`;

const FooterWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
  position: relative;
  z-index: 1;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoSection = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 300px;
`;

const LogoBox = styled.div`
  height: 60px;
  width: fit-content;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 8px;
`;

const CompanyLogo = styled.img`
  height: 60px;
  width: 60px;
`;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
`;

const TagLine = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: #1e90ff;
    transform: translateY(-3px);
  }

  svg {
    font-size: 16px;
  }
`;

const FooterLinks = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;

  @media (max-width: 992px) {
    gap: 40px;
  }
`;

const FooterColumn = styled.div`
  min-width: 150px;
`;

const ColumnTitle = styled.h4`
  color: #1e90ff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #1e90ff, #64b5f6);
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 15px;

  &:before {
    content: "›";
    position: absolute;
    left: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #1e90ff;
    transform: translateX(5px);

    &:before {
      transform: translateX(3px);
    }
  }
`;

const ContactColumn = styled(FooterColumn)`
  min-width: 250px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;

  &:hover {
    color: #1e90ff;
  }
`;

const ContactText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ContactIcon = styled.span`
  color: #1e90ff;
  font-size: 16px;
  margin-top: 3px;
  display: flex;
`;

const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 40px 0 20px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const DesignedBy = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;
