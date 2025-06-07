import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProcessImage from "../../Assests/images/expertiseImages/processControl.jpg";
import ScadaImage from "../../Assests/images/expertiseImages/scada.jpg";
import NetworkImage from "../../Assests/images/expertiseImages/networks.jpg";
import SafetyImage from "../../Assests/images/expertiseImages/safety.jpg";
import SystemImage from "../../Assests/images/expertiseImages/migration.jpg";
import DataImage from "../../Assests/images/expertiseImages/dataAnalysis.jpg";
import OilImage from "../../Assests/images/homeImages/industriesImages/oilAndGasImage.jpg";
import WaterImage from "../../Assests/images/homeImages/industriesImages/waterAndWaste.jpg";
import FoodImage from "../../Assests/images/homeImages/industriesImages/food&BeverageImage.jpg";
import PharmaImage from "../../Assests/images/homeImages/industriesImages/pharmaImage.jpg";
import PowerImage from "../../Assests/images/homeImages/industriesImages/powerImage.jpg";
import SteelImage from "../../Assests/images/homeImages/industriesImages/steelImage.jpg";
import GEImage from "../../Assests/images/expertiseImages/GELogo.png";
import IgnitionImage from "../../Assests/images/expertiseImages/ignitionLogo.png";
import AvevaImage from "../../Assests/images/expertiseImages/avevaLogo.png";
import SiemensLogo from "../../Assests/images/expertiseImages/siemensLogo.jpg";
import AllenLogo from "../../Assests/images/expertiseImages/allenLogo.png";
import SchneiderLogo from "../../Assests/images/expertiseImages/schneiderLogo.png";
import ABBLogo from "../../Assests/images/expertiseImages/ABBLogo.png";

const ExpertisePage = () => {
  return (
    <ExpertiseContainer>
      <HeroSection>
        <HeroTitle>Our Expertise</HeroTitle>
        <HeroSubtitle>
          Industry-Leading Technical Knowledge and Experience
        </HeroSubtitle>
      </HeroSection>

      <SectionWrapper>
        <SectionTitle>Technical Specializations</SectionTitle>
        <SpecializationsGrid>
          <SpecializationCard>
            <SpecIcon src={ProcessImage} alt="Process Control" />
            <CardContent>
              <SpecTitle>Process Control</SpecTitle>
              <SpecDescription>
                Advanced expertise in designing and implementing process control
                systems for continuous, batch, and discrete manufacturing
                processes with optimized performance.
              </SpecDescription>
            </CardContent>
          </SpecializationCard>

          <SpecializationCard>
            <SpecIcon src={ScadaImage} alt="SCADA Systems" />
            <CardContent>
              <SpecTitle>SCADA Integration</SpecTitle>
              <SpecDescription>
                Specialized knowledge in developing supervisory control systems
                that provide real-time monitoring, data acquisition, and control
                capabilities across entire facilities.
              </SpecDescription>
            </CardContent>
          </SpecializationCard>

          <SpecializationCard>
            <SpecIcon src={NetworkImage} alt="Industrial Networks" />
            <CardContent>
              <SpecTitle>Industrial Networks</SpecTitle>
              <SpecDescription>
                Proficiency in designing robust industrial communication
                networks including Ethernet/IP, Profinet, Modbus, DeviceNet, and
                other major protocols.
              </SpecDescription>
            </CardContent>
          </SpecializationCard>

          <SpecializationCard>
            <SpecIcon src={SafetyImage} alt="Safety Systems" />
            <CardContent>
              <SpecTitle>Safety Instrumented Systems</SpecTitle>
              <SpecDescription>
                Expertise in designing and implementing safety instrumented
                systems compliant with IEC 61508/61511 standards to ensure
                operational safety.
              </SpecDescription>
            </CardContent>
          </SpecializationCard>

          <SpecializationCard>
            <SpecIcon src={SystemImage} alt="System Migration" />
            <CardContent>
              <SpecTitle>System Migration</SpecTitle>
              <SpecDescription>
                Specialized methodology for upgrading legacy control systems to
                modern platforms with minimal operational disruption and maximum
                data preservation.
              </SpecDescription>
            </CardContent>
          </SpecializationCard>

          <SpecializationCard>
            <SpecIcon src={DataImage} alt="Data Analytics" />
            <CardContent>
              <SpecTitle>Industrial Data Analytics</SpecTitle>
              <SpecDescription>
                Advanced capabilities in implementing data collection,
                historization, and analytics solutions that transform
                operational data into actionable insights.
              </SpecDescription>
            </CardContent>
          </SpecializationCard>
        </SpecializationsGrid>
      </SectionWrapper>

      <SectionWrapper bgColor="#f5f7fa">
        <SectionTitle>Platform Expertise</SectionTitle>
        <PlatformsContainer>
          <PlatformCategory>
            <CategoryTitle>PLC/DCS Platforms</CategoryTitle>
            <PlatformsList>
              <PlatformItem>
                <PlatformIcon src={SiemensLogo} alt="Siemens" />
                <PlatformName>Siemens</PlatformName>
                <PlatformDetails>S7 Series, TIA Portal, WinCC</PlatformDetails>
              </PlatformItem>

              <PlatformItem>
                <PlatformIcon src={AllenLogo} alt="Allen-Bradley" />
                <PlatformName>Allen-Bradley</PlatformName>
                <PlatformDetails>
                  ControlLogix, CompactLogix, FactoryTalk
                </PlatformDetails>
              </PlatformItem>

              <PlatformItem>
                <PlatformIcon src={SchneiderLogo} alt="Schneider" />
                <PlatformName>Schneider Electric</PlatformName>
                <PlatformDetails>
                  Modicon, Unity Pro, Citect SCADA
                </PlatformDetails>
              </PlatformItem>

              <PlatformItem>
                <PlatformIcon src={ABBLogo} alt="ABB" />
                <PlatformName>ABB</PlatformName>
                <PlatformDetails>AC800M, 800xA, Symphony Plus</PlatformDetails>
              </PlatformItem>
            </PlatformsList>
          </PlatformCategory>

          <PlatformCategory>
            <CategoryTitle>SCADA/HMI Software</CategoryTitle>
            <PlatformsList>
              <PlatformItem>
                <PlatformIcon src={AvevaImage} alt="Wonderware" />
                <PlatformName>AVEVA (Wonderware)</PlatformName>
                <PlatformDetails>
                  InTouch, System Platform, Historian
                </PlatformDetails>
              </PlatformItem>

              <PlatformItem>
                <PlatformIcon src={IgnitionImage} alt="Ignition" />
                <PlatformName>Inductive Automation</PlatformName>
                <PlatformDetails>Ignition SCADA</PlatformDetails>
              </PlatformItem>

              <PlatformItem>
                <PlatformIcon className="ge-image" src={GEImage} alt="GE" />
                <PlatformName>GE Digital</PlatformName>
                <PlatformDetails>
                  iFIX, Historian, Plant Applications
                </PlatformDetails>
              </PlatformItem>
            </PlatformsList>
          </PlatformCategory>
        </PlatformsContainer>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Industry Knowledge</SectionTitle>
        <IndustriesGrid>
          <IndustryCard>
            <IndustryIcon src={OilImage} alt="Oil & Gas" />
            <CardContent>
              <IndustryTitle>Oil & Gas</IndustryTitle>
              <IndustryDescription>
                Specialized expertise in upstream, midstream, and downstream
                operations including production systems, pipeline SCADA, and
                refinery automation.
              </IndustryDescription>
            </CardContent>
          </IndustryCard>

          <IndustryCard>
            <IndustryIcon src={WaterImage} alt="Water Treatment" />
            <CardContent>
              <IndustryTitle>Water & Wastewater</IndustryTitle>
              <IndustryDescription>
                Extensive experience in treatment plant automation, pump station
                control, and distributed monitoring networks for municipal
                utilities.
              </IndustryDescription>
            </CardContent>
          </IndustryCard>

          <IndustryCard>
            <IndustryIcon src={FoodImage} alt="Food & Beverage" />
            <CardContent>
              <IndustryTitle>Food & Beverage</IndustryTitle>
              <IndustryDescription>
                Specialized knowledge of batch processing, clean-in-place
                systems, recipe management, and compliance with food safety
                regulations.
              </IndustryDescription>
            </CardContent>
          </IndustryCard>

          <IndustryCard>
            <IndustryIcon src={PharmaImage} alt="Pharmaceuticals" />
            <CardContent>
              <IndustryTitle>Pharmaceuticals</IndustryTitle>
              <IndustryDescription>
                Expert implementation of validated control systems compliant
                with GMP, 21 CFR Part 11, and other regulatory requirements for
                pharmaceutical manufacturing.
              </IndustryDescription>
            </CardContent>
          </IndustryCard>

          <IndustryCard>
            <IndustryIcon src={PowerImage} alt="Power & Utilities" />
            <CardContent>
              <IndustryTitle>Power Generation</IndustryTitle>
              <IndustryDescription>
                Advanced expertise in power plant automation, including turbine
                control, boiler management systems, and balance-of-plant
                integration.
              </IndustryDescription>
            </CardContent>
          </IndustryCard>

          <IndustryCard>
            <IndustryIcon src={SteelImage} alt="Metals" />
            <CardContent>
              <IndustryTitle>Metals & Mining</IndustryTitle>
              <IndustryDescription>
                Specialized process control knowledge for metal processing
                operations, including rolling mills, furnaces, and material
                handling systems.
              </IndustryDescription>
            </CardContent>
          </IndustryCard>
        </IndustriesGrid>
      </SectionWrapper>

      <SectionWrapper bgColor="#0a1e2f">
        <ApproachSectionTitle>Our Approach</ApproachSectionTitle>
        <ApproachContent>
          <ApproachPhases>
            <PhaseItem>
              <PhaseNumber>01</PhaseNumber>
              <PhaseContent>
                <PhaseTitle>Analysis</PhaseTitle>
                <PhaseDescription>
                  Comprehensive requirements gathering, resource planning, and
                  budgeting to establish clear project parameters.
                </PhaseDescription>
              </PhaseContent>
            </PhaseItem>

            <PhaseItem>
              <PhaseNumber>02</PhaseNumber>
              <PhaseContent>
                <PhaseTitle>Design</PhaseTitle>
                <PhaseDescription>
                  Detailed architecture finalization and interaction mapping to
                  create optimal system designs.
                </PhaseDescription>
              </PhaseContent>
            </PhaseItem>

            <PhaseItem>
              <PhaseNumber>03</PhaseNumber>
              <PhaseContent>
                <PhaseTitle>Implementation</PhaseTitle>
                <PhaseDescription>
                  Expert procurement, fabrication, and development according to
                  design specifications.
                </PhaseDescription>
              </PhaseContent>
            </PhaseItem>

            <PhaseItem>
              <PhaseNumber>04</PhaseNumber>
              <PhaseContent>
                <PhaseTitle>Testing</PhaseTitle>
                <PhaseDescription>
                  Rigorous pre-delivery factory acceptance testing to ensure
                  quality compliance before deployment.
                </PhaseDescription>
              </PhaseContent>
            </PhaseItem>

            <PhaseItem>
              <PhaseNumber>05</PhaseNumber>
              <PhaseContent>
                <PhaseTitle>Commissioning</PhaseTitle>
                <PhaseDescription>
                  Professional on-site installation and real-world deployment
                  with comprehensive validation.
                </PhaseDescription>
              </PhaseContent>
            </PhaseItem>
          </ApproachPhases>
        </ApproachContent>
      </SectionWrapper>

      <CallToAction>
        <CTAContent>
          <CTATitle>Ready to leverage our expertise?</CTATitle>
          <CTAText>
            Let our team of specialists help you tackle your most challenging
            automation projects.
          </CTAText>
          <CTAButton to="/contact">Schedule a Consultation</CTAButton>
        </CTAContent>
      </CallToAction>
    </ExpertiseContainer>
  );
};

export default ExpertisePage;

const ExpertiseContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background-color: #0a1e2f;
  background-image: url("/src/assets/images/expertise-hero-bg.jpg");
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

const ApproachSectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #ffffff;
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

const SpecializationsGrid = styled.div`
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

const SpecializationCard = styled.div`
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

const SpecIcon = styled.img`
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

const SpecTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #0a1e2f;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SpecDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const PlatformsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PlatformCategory = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #0a1e2f;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PlatformsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlatformItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PlatformIcon = styled.img`
  width: 100px;
  height: 70px;
  margin-bottom: 15px;
  object-fit: contain;
  &.ge-image {
    width: 150px;
  }
`;

const PlatformName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #0a1e2f;
`;

const PlatformDetails = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const IndustriesGrid = styled.div`
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

const IndustryCard = styled.div`
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

const IndustryIcon = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

const IndustryTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #0a1e2f;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const IndustryDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const ApproachContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ApproachPhases = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PhaseItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PhaseNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #1e90ff;
  margin-right: 30px;
  line-height: 1;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const PhaseContent = styled.div`
  flex: 1;
`;

const PhaseTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 15px;
  color: #0a1e2f;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const PhaseDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CallToAction = styled.section`
  background-color: #f5f7fa;
  background-image: url("/src/assets/images/cta-bg.jpg");
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  color: #0a1e2f;
  padding: 80px 5%;
  text-align: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
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
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #1e90ff;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077ea;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
`;
