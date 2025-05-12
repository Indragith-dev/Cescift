import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FeatureImage from '../../Assests/images/homeImages/featuredImage.png';
// import BannerImage from '../../Assests/images/homeImages/bannerimage.png';

const HomePage = () => {
  return (
    <HomeContainer>
      {/* Banner */}
      {/* <Banner>
        <BannerImg src={"../../Assests/images/homeImages/bannerimage.png"} alt="Company Banner" />
      </Banner> */}

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Delivering Advanced Automation Solutions</HeroTitle>
          <HeroSubtitle>
            Premier Instrumentation and Control System Integrator for diverse industries
          </HeroSubtitle>
          <HeroButtonGroup>
            <HeroButton to="/services">Explore Services</HeroButton>
            <HeroButton to="/contact" secondary>Contact Us</HeroButton>
          </HeroButtonGroup>
        </HeroContent>
        <HeroImage src={FeatureImage} alt="Industrial Automation" />
      </HeroSection>

      {/* About Section */}
      <SectionWrapper>
        <SectionTitle>About CESCIFT</SectionTitle>
        <SectionContent>
          <AboutText>
            CESCIFT is a premier Instrumentation and Control System Integrator delivering
            advanced technical solutions and services across diverse industries. We specialize in
            designing and implementing open, non-proprietary systems that ensure seamless
            integration with existing infrastructures and support future scalability, from the plant
            floor to enterprise-level applications.
          </AboutText>
          <AboutCard>
            <CardIcon src="/src/assets/images/icon-mission.png" alt="Mission" />
            <CardTitle>Mission</CardTitle>
            <CardText>
              To deliver expertly engineered Industrial Automation and Electrical System
              Solutions that empower our clients to optimize production efficiently, ensuring
              exceptional customer satisfaction.
            </CardText>
          </AboutCard>
          <AboutCard>
            <CardIcon src="/src/assets/images/icon-vision.png" alt="Vision" />
            <CardTitle>Vision</CardTitle>
            <CardText>
              We believe that a well-engineered control system is the backbone of a successful,
              profitable operation. Our automation and electrical systems are built on this principle and
              supported throughout the project life cycle with unwavering commitment.
            </CardText>
          </AboutCard>
        </SectionContent>
        <ExploreButton to="/about">Learn More About Us</ExploreButton>
      </SectionWrapper>

      {/* Expertise Section */}
      <SectionWrapper bgColor="#f5f7fa">
        <SectionTitle>Our Expertise</SectionTitle>
        <ExpertiseGrid>
          <ExpertiseCard>
            <ExpertiseIcon src="/src/assets/images/icon-automation.png" alt="Automation" />
            <ExpertiseTitle>Industrial Automation Solutions</ExpertiseTitle>
            <ExpertiseText>
              Providing turnkey integrated automation solutions from the shop floor to Manufacturing Information Systems.
            </ExpertiseText>
            <ExpertiseLink to="/services/#automation">Learn More</ExpertiseLink>
          </ExpertiseCard>
          <ExpertiseCard>
            <ExpertiseIcon src="/src/assets/images/icon-panel.png" alt="Control Panel" />
            <ExpertiseTitle>Electrical & Control Panel Manufacturing</ExpertiseTitle>
            <ExpertiseText>
              Custom design and fabrication of electrical and control panels for seamless integration.
            </ExpertiseText>
            <ExpertiseLink to="/services/#panel">Learn More</ExpertiseLink>
          </ExpertiseCard>
          <ExpertiseCard>
            <ExpertiseIcon src="/src/assets/images/icon-embedded.png" alt="Embedded Systems" />
            <ExpertiseTitle>Embedded System Engineering</ExpertiseTitle>
            <ExpertiseText>
              Developing custom hardware and firmware solutions optimized for enhanced performance.
            </ExpertiseText>
            <ExpertiseLink to="/services/#embedded">Learn More</ExpertiseLink>
          </ExpertiseCard>
        </ExpertiseGrid>
      </SectionWrapper>

      {/* Industries Section */}
      <SectionWrapper>
        <SectionTitle>Industries We Serve</SectionTitle>
        <IndustriesGrid>
          <IndustryItem>
            <IndustryIcon src="/src/assets/images/industry-oil.png" alt="Oil & Gas" />
            <IndustryName>Oil & Gas</IndustryName>
          </IndustryItem>
          <IndustryItem>
            <IndustryIcon src="/src/assets/images/industry-water.png" alt="Water & Wastewater" />
            <IndustryName>Water & Wastewater</IndustryName>
          </IndustryItem>
          <IndustryItem>
            <IndustryIcon src="/src/assets/images/industry-food.png" alt="Food & Beverage" />
            <IndustryName>Food & Beverage</IndustryName>
          </IndustryItem>
          <IndustryItem>
            <IndustryIcon src="/src/assets/images/industry-pharma.png" alt="Pharmaceuticals" />
            <IndustryName>Pharmaceuticals</IndustryName>
          </IndustryItem>
          <IndustryItem>
            <IndustryIcon src="/src/assets/images/industry-power.png" alt="Power & Utilities" />
            <IndustryName>Power & Utilities</IndustryName>
          </IndustryItem>
          <IndustryItem>
            <IndustryIcon src="/src/assets/images/industry-metal.png" alt="Steel & Aluminum" />
            <IndustryName>Steel & Aluminum</IndustryName>
          </IndustryItem>
        </IndustriesGrid>
      </SectionWrapper>

       {/* Location Map */}
       <MapSection>
        <MapTitle>Our Location</MapTitle>
        <MapWrapper>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.131345672354!2d76.62821917504728!3d9.601602980459917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d1a165aee5d%3A0x9e1609a887c211f5!2sCeScift%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1715514313641!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </MapWrapper>
      </MapSection>

      {/* Call To Action */}
      <CallToAction>
        <CTAContent>
          <CTATitle>Ready to optimize your operations?</CTATitle>
          <CTAText>
            Let's discuss how our automation solutions can transform your business.
          </CTAText>
          <CTAButton to="/contact">Contact Our Experts</CTAButton>
        </CTAContent>
      </CallToAction>

     
    </HomeContainer>
  );
};

export default HomePage;


const HomeContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  display: flex;
  min-height: 500px;
  background-color: #0a1e2f;
  color: white;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding: 60px 5%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 40px 5%;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroButton = styled(Link)<{ secondary?: boolean }>`
  padding: 12px 24px;
  background-color: ${props => props.secondary ? 'transparent' : '#1e90ff'};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  display: inline-block;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.secondary ? 'white' : '#1e90ff'};
  
  &:hover {
    background-color: ${props => props.secondary ? 'rgba(255, 255, 255, 0.1)' : '#0b78e5'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;

const HeroImage = styled.img`
  flex: 1;
  object-fit: cover;
  height: 100%;
  max-height: 500px;
  
  @media (max-width: 768px) {
    width: 100%;
    min-height: 250px;
  }
`;

const SectionWrapper = styled.section<{ bgColor?: string }>`
  padding: 80px 5%;
  background-color: ${props => props.bgColor || 'white'};
  
  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #0a1e2f;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #1e90ff;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.p`
  grid-column: 1 / -1;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #0a1e2f;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const ExploreButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 50px auto 0;
  padding: 12px 30px;
  background-color: #1e90ff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0b78e5;
    transform: translateY(-2px);
  }
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ExpertiseIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
`;

const ExpertiseTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #0a1e2f;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const ExpertiseText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ExpertiseLink = styled(Link)`
  color: #1e90ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #0b78e5;
    text-decoration: underline;
  }
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IndustryItem = styled.div`
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IndustryIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const IndustryName = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const CallToAction = styled.section`
  background-color: #0a1e2f;
  padding: 80px 5%;
  color: white;
  
  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  padding: 14px 30px;
  background-color: #1e90ff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0b78e5;
    transform: translateY(-2px);
  }
`;

const Banner = styled.div`
  width: 100%;
  height: auto;
`;

const BannerImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const MapSection = styled.section`
  padding: 60px 5%;
  background-color: #f9f9f9;
`;

const MapTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #0a1e2f;
`;

const MapWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;
