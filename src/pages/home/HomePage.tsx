import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FeatureImage from "../../Assests/images/homeImages/featuredImage.png";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import StoreComponent from "./components/StoreCompoent";
import Mission from "../../Assests/images/homeImages/mission.png";
import Vission from "../../Assests/images/homeImages/vission.png";
import ExpertiseSection from "./components/ExpertiseComponent";
import OilImage from "../../Assests/images/homeImages/industriesImages/oilAndGasImage.jpg";
import WaterImage from "../../Assests/images/homeImages/industriesImages/waterAndWaste.jpg";
import FoodImage from "../../Assests/images/homeImages/industriesImages/food&BeverageImage.jpg";
import PharmaImage from "../../Assests/images/homeImages/industriesImages/pharmaImage.jpg";
import PowerImage from "../../Assests/images/homeImages/industriesImages/powerImage.jpg";
import SteelImage from "../../Assests/images/homeImages/industriesImages/steelImage.jpg";
import ClientSection from "./components/ClientComponent";

const HomePage = () => {
  // For client logo animation
  const [activeClient, setActiveClient] = useState(0);

  // For scroll animations
  const [isVisible, setIsVisible] = useState({
    about: false,
    expertise: false,
    clients: false,
    industries: false,
  });

  // Refs for sections
  const aboutRef = useRef<HTMLElement | null>(null);
  const expertiseRef = useRef<HTMLElement | null>(null);
  const clientsRef = useRef<HTMLElement | null>(null);
  const industriesRef = useRef<HTMLElement | null>(null);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (expertiseRef.current) observer.observe(expertiseRef.current);
    if (clientsRef.current) observer.observe(clientsRef.current);
    if (industriesRef.current) observer.observe(industriesRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (expertiseRef.current) observer.unobserve(expertiseRef.current);
      if (clientsRef.current) observer.unobserve(clientsRef.current);
      if (industriesRef.current) observer.unobserve(industriesRef.current);
    };
  }, []);

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroBackgroundAnimation />
        <HeroContent
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroTitle>
            <GradientSpan>Delivering</GradientSpan> Advanced Automation
            Solutions
          </HeroTitle>
          <HeroSubtitle>
            Premier Instrumentation and Control System Integrator for diverse
            industries
          </HeroSubtitle>
          <HeroButtonGroup>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <HeroButton to="/services">Explore Services</HeroButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <HeroButton to="/contact" secondary={true}>
                Contact Us
              </HeroButton>
            </motion.div>
          </HeroButtonGroup>
        </HeroContent>
        <HeroImageWrapper
          as={motion.div}
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <HeroGeometricShape
            top="10%"
            left="10%"
            size="40px"
            color="#1e90ff"
            delay="0s"
          />
          <HeroGeometricShape
            top="70%"
            left="25%"
            size="25px"
            color="#64b5f6"
            delay="0.3s"
          />
          <HeroGeometricShape
            top="30%"
            left="80%"
            size="30px"
            color="#0a1e2f"
            delay="0.6s"
          />
          <HeroImage src={FeatureImage} alt="Industrial Automation" />
        </HeroImageWrapper>
      </HeroSection>

      {/* About Section */}
      <SectionWrapper id="about" ref={aboutRef}>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About <GradientText>CESCIFT</GradientText>
        </SectionTitle>
        <SectionContent>
          <AboutText
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={isVisible.about ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            CESCIFT is a premier Instrumentation and Control System Integrator
            delivering advanced technical solutions and services across diverse
            industries. We specialize in designing and implementing open,
            non-proprietary systems that ensure seamless integration with
            existing infrastructures and support future scalability, from the
            plant floor to enterprise-level applications.
          </AboutText>
          <AboutCardContainer>
            <AboutCard
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardIconWrapper>
                <CardIcon src={Mission} alt="Mission" />
              </CardIconWrapper>
              <CardTitle>Mission</CardTitle>
              <CardText>
                To deliver expertly engineered Industrial Automation and
                Electrical System Solutions that empower our clients to optimize
                production efficiently, ensuring exceptional customer
                satisfaction.
              </CardText>
            </AboutCard>
            <AboutCard
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardIconWrapper>
                <CardIcon src={Vission} alt="Vision" />
              </CardIconWrapper>
              <CardTitle>Vision</CardTitle>
              <CardText>
                We believe that a well-engineered control system is the backbone
                of a successful, profitable operation. Our automation and
                electrical systems are built on this principle and supported
                throughout the project life cycle with unwavering commitment.
              </CardText>
            </AboutCard>
          </AboutCardContainer>
        </SectionContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible.about ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          style={{ display: "block", margin: "50px auto 0", maxWidth: "250px" }}
        >
          <ExploreButton to="/about">Learn More About Us</ExploreButton>
        </motion.div>
      </SectionWrapper>

      {/* Expertise Section */}
      <ExpertiseSection
        isVisible={isVisible.expertise}
        sectionRef={expertiseRef}
      />

      {/* Store Section */}
      <StoreComponent />

      {/* Industries Section */}
      <SectionWrapper bgColor="#f8fafd" id="industries" ref={industriesRef}>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.industries ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Industries We <GradientText>Serve</GradientText>
        </SectionTitle>
        <IndustriesGrid>
          {[
            { name: "Oil & Gas", icon: OilImage, delay: 0.2 },
            { name: "Water & Wastewater", icon: WaterImage, delay: 0.3 },
            { name: "Food & Beverage", icon: FoodImage, delay: 0.4 },
            { name: "Pharmaceuticals", icon: PharmaImage, delay: 0.5 },
            { name: "Power & Utilities", icon: PowerImage, delay: 0.6 },
            { name: "Steel & Aluminum", icon: SteelImage, delay: 0.7 },
          ].map((industry, index) => (
            <IndustryItem
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.industries ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.1,
                delay: industry.delay,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <IndustryIconContainer bgImage={industry.icon} />
              <IndustryName>{industry.name}</IndustryName>
            </IndustryItem>
          ))}
        </IndustriesGrid>
      </SectionWrapper>

      {/* Clients Section */}
      <ClientSection clientsRef={clientsRef} />

      {/* Call To Action */}
      <CallToAction>
        <CTAContent
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <CTATitle>Ready to optimize your operations?</CTATitle>
          <CTAText>
            Let's discuss how our automation solutions can transform your
            business.
          </CTAText>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            <CTAButton to="/contact">Contact Our Experts</CTAButton>
          </motion.div>
        </CTAContent>
        <CTABackground />
      </CallToAction>

      {/* Location Map */}
      <MapSection>
        <MapTitle
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our <GradientText>Location</GradientText>
        </MapTitle>
        <MapWrapper
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
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
    </HomeContainer>
  );
};

export default HomePage;

// Styled Components
const HomeContainer = styled.div`
  padding-top: 80px;
  overflow-x: hidden;
`;

// Hero Section Styling
const HeroSection = styled.section`
  display: flex;
  min-height: 600px;
  background-color: #0a1e2f;
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const particleAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-15px) translateX(15px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
`;

const HeroBackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 10% 10%,
      rgba(30, 144, 255, 0.1) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(100, 181, 246, 0.1) 0%,
      transparent 25%
    ),
    radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.05) 0%, transparent 15%);
  opacity: 1;
  z-index: 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(30, 144, 255, 0.03);
    z-index: 0;
  }

  &:before {
    top: 10%;
    left: 15%;
    animation: ${particleAnimation} 15s infinite ease-in-out;
  }

  &:after {
    bottom: 20%;
    right: 10%;
    width: 150px;
    height: 150px;
    animation: ${particleAnimation} 18s infinite ease-in-out reverse;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding: 80px 5%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
    text-align: center;
  }
`;

const textGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientSpan = styled.span`
  background: linear-gradient(90deg, #1e90ff, #64b5f6, #1e90ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textGradient} 3s linear infinite;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 25px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.5px;

  @media (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.85);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButtonGroup = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

interface HeroButtonProps {
  secondary?: boolean;
}

const HeroButton = styled(Link)<HeroButtonProps>`
  cursor: pointer;
  padding: 16px 32px;
  background-color: ${(props) => (props.secondary ? "transparent" : "#1e90ff")};
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
  border: 2px solid ${(props) => (props.secondary ? "white" : "#1e90ff")};
  box-shadow: ${(props) =>
    props.secondary ? "none" : "0 10px 20px rgba(30, 144, 255, 0.3)"};

  &:hover {
    background-color: ${(props) =>
      props.secondary ? "rgba(255, 255, 255, 0.1)" : "#0b78e5"};
    box-shadow: ${(props) =>
      props.secondary
        ? "0 5px 15px rgba(255, 255, 255, 0.1)"
        : "0 15px 25px rgba(30, 144, 255, 0.4)"};
  }

  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

interface GeoMetricProps {
  size: string;
  color: string;
  delay: string;
  top: string;
  left: string;
}

const HeroGeometricShape = styled.div<GeoMetricProps>`
  position: absolute;
  width: ${(props) => props.size || "30px"};
  height: ${(props) => props.size || "30px"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  background-color: ${(props) => props.color || "#1e90ff"};
  opacity: 0.7;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 0;
  animation: ${floatAnimation} 6s infinite ease-in-out;
  animation-delay: ${(props) => props.delay || "0s"};

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroImage = styled.img`
  max-width: 90%;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  }
`;

// Section Styling

interface SectionWrapperProps {
  bgColor?: string;
}

const SectionWrapper = styled.section<SectionWrapperProps>`
  padding: 100px 5%;
  background-color: ${(props) => props.bgColor || "white"};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 70px 5%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 60px;
  color: #0a1e2f;
  position: relative;
  font-weight: 800;

  &:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #1e90ff, #64b5f6);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 50px;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// About Section
const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 50px;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const AboutCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(30, 144, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(30, 144, 255, 0.8); }
  100% { box-shadow: 0 0 5px rgba(30, 144, 255, 0.5); }
`;

const CardIconWrapper = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #ffffff, #ffffff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  animation: ${glowAnimation} 3s infinite ease-in-out;
`;

const CardIcon = styled.img`
  width: 115px;
  height: 115px;
  object-fit: cover;
  border-radius: 50%;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #0a1e2f;
  font-weight: 700;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const ExploreButton = styled(Link)`
  cursor: pointer;
  display: block;
  padding: 14px 30px;
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(30, 144, 255, 0.2);
`;

// Industries Section
const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const IndustryItem = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const IndustryIconContainer = styled.div<{ bgImage: string }>`
  background: ${({ bgImage }) => `url(${bgImage}) center/cover no-repeat`};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 20px;
  animation: ${glowAnimation} 3s infinite ease-in-out;
`;

const IndustryName = styled.h4`
  font-size: 1.2rem;
  color: #0a1e2f;
  font-weight: 600;
`;

interface PulsingCircleProps {
  size: string;
  color: string;
  delay: string;
}

// Map Section
const MapSection = styled.section`
  padding: 80px 5%;
  background-color: white;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

const MapTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #0a1e2f;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MapWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

  iframe {
    display: block;
  }
`;

// Call To Action
const CallToAction = styled.section`
  padding: 100px 5%;
  background: linear-gradient(135deg, #0a1e2f, #1e3a5f);
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 5%;
  }
`;

const CTABackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 20%,
      rgba(30, 144, 255, 0.15) 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(100, 181, 246, 0.1) 0%,
      transparent 20%
    );
  z-index: 0;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(Link)`
  cursor: pointer;
  display: inline-block;
  padding: 18px 40px;
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;
