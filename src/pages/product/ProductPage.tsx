import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import all product images
import ACMotorImage from "../../Assests/images/productImages/ACMotorImage.jpg";
import CNCImage from "../../Assests/images/productImages/CNCImage.jpg";
import controlPanelImage from "../../Assests/images/productImages/controlPanelImage.jpg";
import DCSImage from "../../Assests/images/productImages/DCSImage.jpg";
import drivesImage from "../../Assests/images/productImages/drivesImage.jpg";
import encoderImage from "../../Assests/images/productImages/encoderImage.jpg";
import HMIImage from "../../Assests/images/productImages/HMIImage.jpg";
import IOTImage from "../../Assests/images/productImages/IOTImage.jpg";
import ScadaImage from "../../Assests/images/productImages/scadaSystemsImage.jpg";
import microMotorImages from "../../Assests/images/productImages/microMotorImages.jpg";
import motionImage from "../../Assests/images/productImages/motionImage.jpg";
import plcImage from "../../Assests/images/productImages/plcImage.jpg";
import powerSupplyImage from "../../Assests/images/productImages/powerSupplyImage.jpg";
import sensorImage from "../../Assests/images/productImages/sensorImage.jpg";
import servImage from "../../Assests/images/productImages/servImage.jpg";
import temperatureImage from "../../Assests/images/productImages/temperatureImage.jpg";
import VFDImage from "../../Assests/images/productImages/VFDImage.jpg";

const ProductsPage = () => {
  return (
    <ProductsContainer>
      <HeroSection>
        <HeroTitle>Our Products</HeroTitle>
        <HeroSubtitle>
          Comprehensive Range of Control Systems and Components
        </HeroSubtitle>
      </HeroSection>

      <SectionWrapper>
        <SectionTitle>Control Systems</SectionTitle>
        <ProductsGrid>
          <ProductCard>
            <ProductIcon src={plcImage} alt="PLC Systems" />
            <ProductTitle>PLC Systems</ProductTitle>
            <ProductDescription>
              Programmable Logic Controllers for comprehensive automation
              control in various industrial applications.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={DCSImage} alt="DCS Systems" />
            <ProductTitle>DCS Systems</ProductTitle>
            <ProductDescription>
              Distributed Control Systems for process-oriented applications
              requiring high reliability and scalability.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={ScadaImage} alt="SCADA Systems" />
            <ProductTitle>SCADA Systems</ProductTitle>
            <ProductDescription>
              Supervisory Control and Data Acquisition systems for real-time
              monitoring and control across facilities.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={HMIImage} alt="HMI Systems" />
            <ProductTitle>HMI Systems</ProductTitle>
            <ProductDescription>
              Human-Machine Interface solutions providing intuitive operator
              control panels and visualization.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={IOTImage} alt="IIoT Solutions" />
            <ProductTitle>IoT Solutions</ProductTitle>
            <ProductDescription>
              Industrial Internet of Things technology connecting your equipment
              to cloud-based analytics.
            </ProductDescription>
          </ProductCard>
        </ProductsGrid>
      </SectionWrapper>

      <SectionWrapper bgColor="#f5f7fa">
        <SectionTitle>Drive & Motion</SectionTitle>
        <ProductsGrid>
          <ProductCard>
            <ProductIcon src={VFDImage} alt="VFD Systems" />
            <ProductTitle>Variable Frequency Drives</ProductTitle>
            <ProductDescription>
              Energy-efficient motor control for precise speed and torque
              regulation in various applications.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={servImage} alt="Servo Drives" />
            <ProductTitle>Servo Drives</ProductTitle>
            <ProductDescription>
              High-precision positioning systems for applications requiring
              exact motion control.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={CNCImage} alt="CNC Controllers" />
            <ProductTitle>CNC Controllers</ProductTitle>
            <ProductDescription>
              Computer Numerical Control systems for automated machine tool
              operations.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={motionImage} alt="Motion Controllers" />
            <ProductTitle>Motion Controllers</ProductTitle>
            <ProductDescription>
              Integrated control solutions for synchronizing multiple axes of
              motion with precision.
            </ProductDescription>
          </ProductCard>
        </ProductsGrid>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Field Devices</SectionTitle>
        <ProductsGrid>
          <ProductCard>
            <ProductIcon src={sensorImage} alt="Sensors" />
            <ProductTitle>Sensors</ProductTitle>
            <ProductDescription>
              Wide range of industrial sensors for detecting various physical
              properties and conditions.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={encoderImage} alt="Encoders" />
            <ProductTitle>Encoders</ProductTitle>
            <ProductDescription>
              Precision feedback devices for accurate position and speed
              measurement in motion applications.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={temperatureImage} alt="Temperature Controllers" />
            <ProductTitle>Temperature Controllers</ProductTitle>
            <ProductDescription>
              Precise temperature regulation devices for heating and cooling
              processes in industrial settings.
            </ProductDescription>
          </ProductCard>
        </ProductsGrid>
      </SectionWrapper>

      <SectionWrapper bgColor="#f5f7fa">
        <SectionTitle>Power Components</SectionTitle>
        <ProductsGrid>
          <ProductCard>
            <ProductIcon src={ACMotorImage} alt="Motors" />
            <ProductTitle>AC Motors</ProductTitle>
            <ProductDescription>
              High-efficiency electric motors designed for reliability in
              continuous industrial operation.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={drivesImage} alt="Gear Drives" />
            <ProductTitle>Gear Drives</ProductTitle>
            <ProductDescription>
              Robust power transmission components for converting speed and
              torque in mechanical systems.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={microMotorImages} alt="Micro Motors" />
            <ProductTitle>Micro Motors</ProductTitle>
            <ProductDescription>
              Compact, precision motors for applications requiring small size
              and accurate control.
            </ProductDescription>
          </ProductCard>
        </ProductsGrid>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Control Panels & Distribution</SectionTitle>
        <ProductsGrid>
          <ProductCard>
            <ProductIcon src={controlPanelImage} alt="Control Panels" />
            <ProductTitle>Control Panels</ProductTitle>
            <ProductDescription>
              Custom-designed control panels integrating all necessary
              components for system automation.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductIcon src={powerSupplyImage} alt="Power Supplies" />
            <ProductTitle>Power Supplies</ProductTitle>
            <ProductDescription>
              Reliable DC power sources engineered for industrial environments
              and continuous operation.
            </ProductDescription>
          </ProductCard>
        </ProductsGrid>
      </SectionWrapper>

      <CallToAction>
        <CTAContent>
          <CTATitle>Need custom product solutions?</CTATitle>
          <CTAText>
            Our technical team can help you select the right components for your
            specific application needs.
          </CTAText>
          <CTAButton to="/contact">Request a Consultation</CTAButton>
        </CTAContent>
      </CallToAction>
    </ProductsContainer>
  );
};

export default ProductsPage;

const ProductsContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background-color: #0a1e2f;
  background-image: url("/src/assets/images/products-hero-bg.jpg");
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

const ProductsGrid = styled.div`
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

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductIcon = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
`;

const ProductTitle = styled.h3`
  font-size: 1.4rem;
  margin: 20px 30px 15px 30px;
  color: #0a1e2f;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 30px 30px 30px;
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
