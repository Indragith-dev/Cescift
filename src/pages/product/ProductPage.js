import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ProductsPage = () => {
    return (_jsxs(ProductsContainer, { children: [_jsxs(HeroSection, { children: [_jsx(HeroTitle, { children: "Our Products" }), _jsx(HeroSubtitle, { children: "Comprehensive Range of Control Systems and Components" })] }), _jsxs(SectionWrapper, { children: [_jsx(SectionTitle, { children: "Control Systems" }), _jsxs(ProductsGrid, { children: [_jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-plc.png", alt: "PLC Systems" }), _jsx(ProductTitle, { children: "PLC Systems" }), _jsx(ProductDescription, { children: "Programmable Logic Controllers for comprehensive automation control in various industrial applications." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-dcs.png", alt: "DCS Systems" }), _jsx(ProductTitle, { children: "DCS Systems" }), _jsx(ProductDescription, { children: "Distributed Control Systems for process-oriented applications requiring high reliability and scalability." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-scada.png", alt: "SCADA Systems" }), _jsx(ProductTitle, { children: "SCADA Systems" }), _jsx(ProductDescription, { children: "Supervisory Control and Data Acquisition systems for real-time monitoring and control across facilities." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-hmi.png", alt: "HMI Systems" }), _jsx(ProductTitle, { children: "HMI Systems" }), _jsx(ProductDescription, { children: "Human-Machine Interface solutions providing intuitive operator control panels and visualization." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-iiot.png", alt: "IIoT Solutions" }), _jsx(ProductTitle, { children: "IIoT Solutions" }), _jsx(ProductDescription, { children: "Industrial Internet of Things technology connecting your equipment to cloud-based analytics." })] })] })] }), _jsxs(SectionWrapper, { bgColor: "#f5f7fa", children: [_jsx(SectionTitle, { children: "Drive & Motion" }), _jsxs(ProductsGrid, { children: [_jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-vfd.png", alt: "VFD Systems" }), _jsx(ProductTitle, { children: "Variable Frequency Drives" }), _jsx(ProductDescription, { children: "Energy-efficient motor control for precise speed and torque regulation in various applications." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-servo.png", alt: "Servo Drives" }), _jsx(ProductTitle, { children: "Servo Drives" }), _jsx(ProductDescription, { children: "High-precision positioning systems for applications requiring exact motion control." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-cnc.png", alt: "CNC Controllers" }), _jsx(ProductTitle, { children: "CNC Controllers" }), _jsx(ProductDescription, { children: "Computer Numerical Control systems for automated machine tool operations." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-motion.png", alt: "Motion Controllers" }), _jsx(ProductTitle, { children: "Motion Controllers" }), _jsx(ProductDescription, { children: "Integrated control solutions for synchronizing multiple axes of motion with precision." })] })] })] }), _jsxs(SectionWrapper, { children: [_jsx(SectionTitle, { children: "Field Devices" }), _jsxs(ProductsGrid, { children: [_jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-sensors.png", alt: "Sensors" }), _jsx(ProductTitle, { children: "Sensors" }), _jsx(ProductDescription, { children: "Wide range of industrial sensors for detecting various physical properties and conditions." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-encoders.png", alt: "Encoders" }), _jsx(ProductTitle, { children: "Encoders" }), _jsx(ProductDescription, { children: "Precision feedback devices for accurate position and speed measurement in motion applications." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-temp.png", alt: "Temperature Controllers" }), _jsx(ProductTitle, { children: "Temperature Controllers" }), _jsx(ProductDescription, { children: "Precise temperature regulation devices for heating and cooling processes in industrial settings." })] })] })] }), _jsxs(SectionWrapper, { bgColor: "#f5f7fa", children: [_jsx(SectionTitle, { children: "Power Components" }), _jsxs(ProductsGrid, { children: [_jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-motors.png", alt: "Motors" }), _jsx(ProductTitle, { children: "AC Motors" }), _jsx(ProductDescription, { children: "High-efficiency electric motors designed for reliability in continuous industrial operation." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-gear.png", alt: "Gear Drives" }), _jsx(ProductTitle, { children: "Gear Drives" }), _jsx(ProductDescription, { children: "Robust power transmission components for converting speed and torque in mechanical systems." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-micro.png", alt: "Micro Motors" }), _jsx(ProductTitle, { children: "Micro Motors" }), _jsx(ProductDescription, { children: "Compact, precision motors for applications requiring small size and accurate control." })] })] })] }), _jsxs(SectionWrapper, { children: [_jsx(SectionTitle, { children: "Control Panels & Distribution" }), _jsxs(ProductsGrid, { children: [_jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-panel.png", alt: "Control Panels" }), _jsx(ProductTitle, { children: "Control Panels" }), _jsx(ProductDescription, { children: "Custom-designed control panels integrating all necessary components for system automation." })] }), _jsxs(ProductCard, { children: [_jsx(ProductIcon, { src: "/src/assets/images/product-power.png", alt: "Power Supplies" }), _jsx(ProductTitle, { children: "Power Supplies" }), _jsx(ProductDescription, { children: "Reliable DC power sources engineered for industrial environments and continuous operation." })] })] })] }), _jsx(CallToAction, { children: _jsxs(CTAContent, { children: [_jsx(CTATitle, { children: "Need custom product solutions?" }), _jsx(CTAText, { children: "Our technical team can help you select the right components for your specific application needs." }), _jsx(CTAButton, { to: "/contact", children: "Request a Consultation" })] }) })] }));
};
export default ProductsPage;
const ProductsContainer = styled.div `
  padding-top: 80px;
`;
const HeroSection = styled.section `
  background-color: #0a1e2f;
  background-image: url('/src/assets/images/products-hero-bg.jpg');
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
const HeroTitle = styled.h1 `
  font-size: 3.5rem;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const HeroSubtitle = styled.p `
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const SectionWrapper = styled.section `
  padding: 80px 5%;
  background-color: ${props => props.bgColor || 'white'};
  
  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;
const SectionTitle = styled.h2 `
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
const ProductsGrid = styled.div `
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
const ProductCard = styled.div `
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
const ProductIcon = styled.img `
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;
const ProductTitle = styled.h3 `
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #0a1e2f;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const ProductDescription = styled.p `
  font-size: 1rem;
  line-height: 1.6;
`;
const CallToAction = styled.section `
  background-color: #0a1e2f;
  padding: 80px 5%;
  color: white;
  
  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;
const CTAContent = styled.div `
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;
const CTATitle = styled.h2 `
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const CTAText = styled.p `
  font-size: 1.2rem;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const CTAButton = styled(Link) `
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
