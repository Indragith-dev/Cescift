import React from 'react';
import styled from 'styled-components';

const ServicesPage = () => {
  return (
    <ServicesContainer>
      <HeroSection>
        <HeroTitle>Our Services</HeroTitle>
        <HeroSubtitle>Comprehensive automation solutions for diverse industries</HeroSubtitle>
      </HeroSection>

      <ServiceSection id="automation">
        <ServiceContent>
          <ServiceInfo>
            <ServiceTitle>Industrial Automation Solutions</ServiceTitle>
            <ServiceDescription>
              <p>
                We provide turnkey integrated automation solutions from the shop floor 
                (PLC/HMI, SCADA) to Manufacturing Information Systems (MIS), maximizing 
                efficiency and minimizing downtime.
              </p>
            </ServiceDescription>
            
            <ServiceSubtitle>Key Services Include:</ServiceSubtitle>
            <ServiceList>
              <ServiceListItem>PLC/SCADA Engineering & Software Development</ServiceListItem>
              <ServiceListItem>Control Panels Assembly & Field Installation</ServiceListItem>
              <ServiceListItem>FAT, Commissioning, Calibration</ServiceListItem>
              <ServiceListItem>Custom Software for Maintenance & Planning</ServiceListItem>
              <ServiceListItem>HMI Screen Design & Data Reporting</ServiceListItem>
            </ServiceList>
            
            <ServiceSubtitle>Supported Industries:</ServiceSubtitle>
            <IndustriesGrid>
              <IndustryItem>
                <IndustryIcon src="/src/assets/images/industry-oil.png" alt="Oil & Gas" />
                <IndustryName>Oil & Gas</IndustryName>
              </IndustryItem>
              <IndustryItem>
                <IndustryIcon src="/src/assets/images/industry-water.png" alt="Water" />
                <IndustryName>Water & Wastewater</IndustryName>
              </IndustryItem>
              <IndustryItem>
                <IndustryIcon src="/src/assets/images/industry-food.png" alt="Food" />
                <IndustryName>Food & Beverage</IndustryName>
              </IndustryItem>
              <IndustryItem>
                <IndustryIcon src="/src/assets/images/industry-pharma.png" alt="Pharma" />
                <IndustryName>Pharmaceuticals</IndustryName>
              </IndustryItem>
              <IndustryItem>
                <IndustryIcon src="/src/assets/images/industry-power.png" alt="Power" />
                <IndustryName>Power & Utilities</IndustryName>
              </IndustryItem>
              <IndustryItem>
                <IndustryIcon src="/src/assets/images/industry-metal.png" alt="Metal" />
                <IndustryName>Steel & Aluminum</IndustryName>
              </IndustryItem>
            </IndustriesGrid>
          </ServiceInfo>
          <ServiceImage src="/src/assets/images/service-automation.jpg" alt="Automation Solutions" />
        </ServiceContent>
      </ServiceSection>

      <ServiceSection id="panel" alternate>
        <ServiceContent reverse>
          <ServiceInfo>
            <ServiceTitle>Electrical & Control Panel Assembly</ServiceTitle>
            <ServiceDescription>
              <p>
                We custom-design and fabricate all types of electrical and control panels, 
                tailored for seamless integration into SCADA and automation systems. These 
                services are available both for internal projects and external clients.
              </p>
            </ServiceDescription>
            
            <ServiceSubtitle>Our Panel Manufacturing Services:</ServiceSubtitle>
            <ServiceList>
              <ServiceListItem>Custom control panel design</ServiceListItem>
              <ServiceListItem>UL/CE certified panel fabrication</ServiceListItem>
              <ServiceListItem>PLC/HMI integration</ServiceListItem>
              <ServiceListItem>Power distribution panels</ServiceListItem>
              <ServiceListItem>Motor control centers</ServiceListItem>
              <ServiceListItem>Factory testing and certification</ServiceListItem>
            </ServiceList>
            
            <FeatureGrid>
              <FeatureCard>
                <FeatureIcon src="/src/assets/images/icon-quality.png" alt="Quality" />
                <FeatureTitle>Quality Assurance</FeatureTitle>
                <FeatureText>
                  Rigorous testing ensures reliability and compliance with international standards
                </FeatureText>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon src="/src/assets/images/icon-customize.png" alt="Customization" />
                <FeatureTitle>Customization</FeatureTitle>
                <FeatureText>
                  Tailored solutions designed to meet your specific requirements
                </FeatureText>
              </FeatureCard>
            </FeatureGrid>
          </ServiceInfo>
          <ServiceImage src="/src/assets/images/service-panel.jpg" alt="Control Panel Assembly" />
        </ServiceContent>
      </ServiceSection>

      <ServiceSection id="embedded">
        <ServiceContent>
          <ServiceInfo>
            <ServiceTitle>Embedded System Engineering</ServiceTitle>
            <ServiceDescription>
              <p>
                Our embedded system engineering team specializes in developing custom 
                hardware and firmware solutions, optimizing control systems for enhanced 
                performance, and integrating smart devices to elevate process automation.
              </p>
            </ServiceDescription>
            
            <ServiceSubtitle>Our Embedded System Services:</ServiceSubtitle>
            <ServiceList>
              <ServiceListItem>Custom hardware design and development</ServiceListItem>
              <ServiceListItem>Firmware and software implementation</ServiceListItem>
              <ServiceListItem>IoT device integration</ServiceListItem>
              <ServiceListItem>Performance optimization</ServiceListItem>
              <ServiceListItem>Legacy system modernization</ServiceListItem>
            </ServiceList>
            
            <TechStack>
              <TechTitle>Technologies We Work With:</TechTitle>
              <TechItems>
                <TechItem>ARM</TechItem>
                <TechItem>ESP32</TechItem>
                <TechItem>Arduino</TechItem>
                <TechItem>Raspberry Pi</TechItem>
                <TechItem>MQTT</TechItem>
                <TechItem>Modbus</TechItem>
                <TechItem>CAN Bus</TechItem>
              </TechItems>
            </TechStack>
          </ServiceInfo>
          <ServiceImage src="/src/assets/images/service-embedded.jpg" alt="Embedded Systems" />
        </ServiceContent>
      </ServiceSection>

      <ApproachSection>
        <SectionTitle>Our Approach</SectionTitle>
        <ApproachProcess>
          <ProcessStep>
            <StepNumber>01</StepNumber>
            <StepContent>
              <StepTitle>Analysis</StepTitle>
              <StepText>Requirements gathering, resource planning, budgeting</StepText>
            </StepContent>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>02</StepNumber>
            <StepContent>
              <StepTitle>Design</StepTitle>
              <StepText>Architecture finalization, interaction for system mapping</StepText>
            </StepContent>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>03</StepNumber>
            <StepContent>
              <StepTitle>Implementation</StepTitle>
              <StepText>Procurement, fabrication, development</StepText>
            </StepContent>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>04</StepNumber>
            <StepContent>
              <StepTitle>Factory Testing</StepTitle>
              <StepText>Pre-delivery FAT to ensure quality compliance</StepText>
            </StepContent>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>05</StepNumber>
            <StepContent>
              <StepTitle>Installation & Commissioning</StepTitle>
              <StepText>On-site installation and real-world deployment</StepText>
            </StepContent>
          </ProcessStep>
        </ApproachProcess>
      </ApproachSection>

      <CallToAction>
        <CTAContent>
          <CTATitle>Ready to automate your operations?</CTATitle>
          <CTAText>
            Let our experts help you design and implement the perfect automation solution.
          </CTAText>
          <CTAButton to="/contact">Request Consultation</CTAButton>
        </CTAContent>
      </CallToAction>
    </ServicesContainer>
  );
};

export default ServicesPage;

import { Link } from 'react-router-dom';

const ServicesContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background-color: #0a1e2f;
  background-image: url('/src/assets/images/services-hero-bg.jpg');
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
  
  @media (max-width: 768px) {
    padding: 80px 5%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServiceSection = styled.section<{ alternate?: boolean }>`
  padding: 100px 5%;
  background-color: ${props => props.alternate ? '#f5f7fa' : 'white'};
  
  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

const ServiceContent = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  direction: ${props => props.reverse ? 'rtl' : 'ltr'};
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    direction: ltr;
  }
`;

const ServiceInfo = styled.div`
  direction: ltr;
`;

const ServiceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: #0a1e2f;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: #1e90ff;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServiceDescription = styled.div`
  margin-bottom: 30px;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ServiceSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #0a1e2f;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ServiceList = styled.ul`
  margin-bottom: 30px;
  padding-left: 20px;
`;

const ServiceListItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  
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
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const IndustryName = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;

const ServiceImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  direction: ltr;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #0a1e2f;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  margin-top: 30px;
`;

const TechTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #0a1e2f;
`;

const TechItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechItem = styled.span`
  background-color: #e6f2ff;
  color: #1e90ff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ApproachSection = styled.section`
  padding: 100px 5%;
  background-color: #0a1e2f;
  color: white;
  
  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: white;
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

const ApproachProcess = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ProcessStep = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const StepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e90ff;
  flex: 0 0 80px;
  
  @media (max-width: 768px) {
    flex: 0;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const StepText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CallToAction = styled.section`
  background-color: #f5f7fa;
  padding: 80px 5%;
  
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
  color: #0a1e2f;
  
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