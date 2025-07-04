import React from "react";
import styled from "styled-components";
import logo from "../../Assests/icons/logo.png";
import MissionImage from "../../Assests/images/homeImages/mission.png";
import VisionImage from "../../Assests/images/homeImages/vission.png";
import ObjectiveImage from "../../Assests/images/homeImages/objective.png";
import DeepImage from "../../Assests/images/aboutImages/deepProcess.png";
import AutomationImage from "../../Assests/images/aboutImages/automationKnowledge.png";
import ModularImage from "../../Assests/images/aboutImages/modular.png";
import DocumentImage from "../../Assests/images/aboutImages/documentation.png";
import PlatformImage from "../../Assests/images/aboutImages/platform.png";
import ProjectImage from "../../Assests/images/aboutImages/projectManagement.png";
import EngDrawingImage from "../../Assests/images/aboutImages/engineeringDrawings.jpg";
import HMIImage from "../../Assests/images/aboutImages/HMIGraphics.jpg";
import ComplianceImage from "../../Assests/images/aboutImages/complienace.jpg";
import TestImage from "../../Assests/images/aboutImages/testImage.png";
import QualityImage from "../../Assests/images/aboutImages/qualityImage.png";
import DeliverImage from "../../Assests/images/aboutImages/deliverImage.png";
import ClientImage from "../../Assests/images/aboutImages/clientImage.png";
import WorkshopImages from "../../Assests/images/aboutImages/workshopImage.jpg";

const AboutPage = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle>About CESCIFT</HeroTitle>
        <HeroSubtitle>
          Premier Instrumentation and Control System Integrator
        </HeroSubtitle>
      </HeroSection>

      <SectionWrapper>
        <SectionTitle>Who We Are</SectionTitle>
        <AboutContent>
          <AboutImage src={logo} alt="CESCIFT Company" />
          <AboutText>
            <p>
              CESCIFT is a premier Instrumentation and Control System Integrator
              delivering advanced technical solutions and services across
              diverse industries. We specialize in designing and implementing
              open, non-proprietary systems that ensure seamless integration
              with existing infrastructures and support future scalability, from
              the plant floor to enterprise-level applications.
            </p>
            <p>
              Our capabilities extend beyond automation; we design and
              manufacture electrical and control panels in-house, enhancing the
              flexibility and quality of our solutions.
            </p>
          </AboutText>
        </AboutContent>
      </SectionWrapper>

      <SectionWrapper bgColor="#f5f7fa">
        <SectionTitle>Our Mission, Vision & Objectives</SectionTitle>
        <ValuesGrid>
          <ValueCard>
            <ValueIcon src={MissionImage} alt="Mission" />
            <ValueTitle>Mission</ValueTitle>
            <ValueText>
              To deliver expertly engineered Industrial Automation and
              Electrical System Solutions that empower our clients to optimize
              production efficiently, ensuring exceptional customer
              satisfaction.
            </ValueText>
          </ValueCard>

          <ValueCard>
            <ValueIcon src={VisionImage} alt="Vision" />
            <ValueTitle>Vision</ValueTitle>
            <ValueText>
              We believe that a well-engineered control system is the backbone
              of a successful, profitable operation. Our automation and
              electrical systems are built on this principle and supported
              throughout the project life cycle with unwavering commitment.
            </ValueText>
          </ValueCard>

          <ValueCard>
            <ValueIcon src={ObjectiveImage} alt="Objectives" />
            <ValueTitle>Objective</ValueTitle>
            <ValueText>
              To establish CESCIFT as the preferred provider of Industrial
              Automation Solutions worldwide by delivering optimal, customized
              systems and unmatched pre- and post-sales support.
            </ValueText>
          </ValueCard>
        </ValuesGrid>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Core Competencies</SectionTitle>
        <CompetenciesContainer>
          <CompetencyItem>
            <CompetencyIcon>
              <img src={DeepImage} alt="Process Understanding" />
            </CompetencyIcon>
            <CompetencyContent>
              <CompetencyTitle>Deep Process Understanding</CompetencyTitle>
              <CompetencyText>
                Enables custom-fit automation solutions tailored to specific
                industry requirements
              </CompetencyText>
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem>
            <CompetencyIcon>
              <img src={AutomationImage} alt="Knowledge" />
            </CompetencyIcon>
            <CompetencyContent>
              <CompetencyTitle>Extensive Automation Knowledge</CompetencyTitle>
              <CompetencyText>
                Comprehensive understanding of industrial automation systems and
                protocols
              </CompetencyText>
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem>
            <CompetencyIcon>
              <img src={PlatformImage} alt="Platforms" />
            </CompetencyIcon>
            <CompetencyContent>
              <CompetencyTitle>Platform Expertise</CompetencyTitle>
              <CompetencyText>
                Proficiency with leading platforms: Schneider, Siemens, ABB,
                Rockwell, and more
              </CompetencyText>
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem>
            <CompetencyIcon>
              <img src={ModularImage} alt="Modular Design" />
            </CompetencyIcon>
            <CompetencyContent>
              <CompetencyTitle>Modular Software Design</CompetencyTitle>
              <CompetencyText>
                Creating scalable and maintainable systems adaptable to future
                requirements
              </CompetencyText>
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem>
            <CompetencyIcon>
              <img src={DocumentImage} alt="Documentation" />
            </CompetencyIcon>
            <CompetencyContent>
              <CompetencyTitle>Quality Documentation</CompetencyTitle>
              <CompetencyText>
                Commitment to comprehensive documentation and customer-focused
                engineering
              </CompetencyText>
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem>
            <CompetencyIcon>
              <img src={ProjectImage} alt="Project Management" />
            </CompetencyIcon>
            <CompetencyContent>
              <CompetencyTitle>Project Management</CompetencyTitle>
              <CompetencyText>
                Proven project management capabilities ensuring timely delivery
                and customer support
              </CompetencyText>
            </CompetencyContent>
          </CompetencyItem>
        </CompetenciesContainer>
      </SectionWrapper>

      <SectionWrapper bgColor="#f5f7fa">
        <SectionTitle>Design Capabilities</SectionTitle>
        <DesignGrid>
          <DesignCard>
            <DesignIcon src={EngDrawingImage} alt="Engineering Drawings" />
            <CardContent>
              <DesignTitle>Detailed Engineering Drawings</DesignTitle>
              <DesignText>P&ID, FDS, GA, I/O Wiring, and more</DesignText>
            </CardContent>
          </DesignCard>

          <DesignCard>
            <DesignIcon src={HMIImage} alt="SCADA Graphics" />
            <CardContent>
              <DesignTitle>Custom SCADA/HMI Graphics</DesignTitle>
              <DesignText>
                Intuitive user interfaces for ease of operation
              </DesignText>
            </CardContent>
          </DesignCard>

          <DesignCard>
            <DesignIcon src={ComplianceImage} alt="Standards" />
            <CardContent>
              <DesignTitle>Industrial Standards Compliance</DesignTitle>
              <DesignText>
                Full adherence to industry standards and client specifications
              </DesignText>
            </CardContent>
          </DesignCard>
        </DesignGrid>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Workshop Facility</SectionTitle>
        <WorkshopContent>
          <WorkshopImage src={WorkshopImages} alt="CESCIFT Workshop" />
          <WorkshopFeatures>
            <WorkshopFeature>
              <FeatureIcon src={TestImage} alt="Testing" />
              <FeatureText>
                Full FAT capability with signal simulation boards
              </FeatureText>
            </WorkshopFeature>

            <WorkshopFeature>
              <FeatureIcon src={QualityImage} alt="Quality Control" />
              <FeatureText>
                Rigorous quality control and component tracking
              </FeatureText>
            </WorkshopFeature>

            <WorkshopFeature>
              <FeatureIcon src={DeliverImage} alt="Delivery" />
              <FeatureText>
                On-time procurement, assembly, and delivery
              </FeatureText>
            </WorkshopFeature>

            <WorkshopFeature>
              <FeatureIcon src={ClientImage} alt="Satisfaction" />
              <FeatureText>
                Commitment to timeline and client satisfaction
              </FeatureText>
            </WorkshopFeature>
          </WorkshopFeatures>
        </WorkshopContent>
      </SectionWrapper>
    </AboutContainer>
  );
};

export default AboutPage;

const AboutContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background-color: #0a1e2f;
  background-image: url("/src/assets/images/about-hero-bg.jpg");
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: white;
  text-align: center;
  padding: 100px 5%;
  position: relative;

  &:before {
    content: "";
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

const SectionWrapper = styled.section<{ bgColor?: string }>`
  padding: 80px 5%;
  background-color: ${(props) => props.bgColor || "white"};

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
    content: "";
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ValuesGrid = styled.div`
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

const ValueCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ValueIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 25px;
`;

const ValueTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #0a1e2f;
`;

const ValueText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CompetenciesContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const CompetencyItem = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const CompetencyIcon = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 80px;
  margin-right: 30px;

  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const CompetencyContent = styled.div`
  flex: 1;
`;

const CompetencyTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #0a1e2f;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CompetencyText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DesignGrid = styled.div`
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

const DesignCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
  }
`;

const DesignIcon = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

const CardContent = styled.div`
  padding: 30px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const DesignTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #0a1e2f;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const DesignText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const WorkshopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const WorkshopImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const WorkshopFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
`;

const WorkshopFeature = styled.div`
  display: flex;
  align-items: center;
`;

const FeatureIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
`;

const FeatureText = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
