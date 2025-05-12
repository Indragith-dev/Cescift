import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FeatureImage from '../../Assests/images/homeImages/featuredImage.png';
import Adnoc from '../../Assests/images/clients/hindustanUL.png';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import StoreComponent from './components/StoreCompoent';
import Mission from '../../Assests/images/homeImages/mission.png';
import Vission from '../../Assests/images/homeImages/vission.png';
import ExpertiseSection from './components/ExpertiseComponent';
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
    const aboutRef = useRef(null);
    const expertiseRef = useRef(null);
    const clientsRef = useRef(null);
    const industriesRef = useRef(null);
    // Client logos from the folder structure
    const clientLogos = [
        { name: 'ADNOC', src: Adnoc },
        { name: 'AEIS', src: Adnoc },
        { name: 'Apollo', src: Adnoc },
        { name: 'Dhathri', src: Adnoc },
        { name: 'Fluitron', src: Adnoc },
        { name: 'Hindustan', src: Adnoc },
        { name: 'Hindustan UL', src: Adnoc },
        { name: 'Indian Oil', src: Adnoc },
        { name: 'Indian Railway', src: Adnoc }
    ];
    // Auto rotate clients
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveClient((prev) => (prev + 1) % clientLogos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [clientLogos.length]);
    // Intersection observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (aboutRef.current)
            observer.observe(aboutRef.current);
        if (expertiseRef.current)
            observer.observe(expertiseRef.current);
        if (clientsRef.current)
            observer.observe(clientsRef.current);
        if (industriesRef.current)
            observer.observe(industriesRef.current);
        return () => {
            if (aboutRef.current)
                observer.unobserve(aboutRef.current);
            if (expertiseRef.current)
                observer.unobserve(expertiseRef.current);
            if (clientsRef.current)
                observer.unobserve(clientsRef.current);
            if (industriesRef.current)
                observer.unobserve(industriesRef.current);
        };
    }, []);
    return (_jsxs(HomeContainer, { children: [_jsxs(HeroSection, { children: [_jsx(HeroBackgroundAnimation, {}), _jsxs(HeroContent, { as: motion.div, initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, ease: "easeOut" }, children: [_jsxs(HeroTitle, { children: [_jsx(GradientSpan, { children: "Delivering" }), " Advanced Automation Solutions"] }), _jsx(HeroSubtitle, { children: "Premier Instrumentation and Control System Integrator for diverse industries" }), _jsxs(HeroButtonGroup, { children: [_jsx(HeroButton, { to: "/services", as: motion.a, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Explore Services" }), _jsx(HeroButton, { to: "/contact", secondary: true, as: motion.a, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Contact Us" })] })] }), _jsxs(HeroImageWrapper, { as: motion.div, initial: { opacity: 0, x: 50, rotateY: 15 }, animate: { opacity: 1, x: 0, rotateY: 0 }, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }, children: [_jsx(HeroGeometricShape, { top: "10%", left: "10%", size: "40px", color: "#1e90ff", delay: "0s" }), _jsx(HeroGeometricShape, { top: "70%", left: "25%", size: "25px", color: "#64b5f6", delay: "0.3s" }), _jsx(HeroGeometricShape, { top: "30%", left: "80%", size: "30px", color: "#0a1e2f", delay: "0.6s" }), _jsx(HeroImage, { src: FeatureImage, alt: "Industrial Automation" })] })] }), _jsxs(SectionWrapper, { id: "about", ref: aboutRef, children: [_jsxs(SectionTitle, { as: motion.h2, initial: { opacity: 0, y: 30 }, animate: isVisible.about ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, ease: "easeOut" }, children: ["About ", _jsx(GradientText, { children: "CESCIFT" })] }), _jsxs(SectionContent, { children: [_jsx(AboutText, { as: motion.p, initial: { opacity: 0 }, animate: isVisible.about ? { opacity: 1 } : {}, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }, children: "CESCIFT is a premier Instrumentation and Control System Integrator delivering advanced technical solutions and services across diverse industries. We specialize in designing and implementing open, non-proprietary systems that ensure seamless integration with existing infrastructures and support future scalability, from the plant floor to enterprise-level applications." }), _jsxs(AboutCardContainer, { children: [_jsxs(AboutCard, { as: motion.div, initial: { opacity: 0, y: 50 }, animate: isVisible.about ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, whileHover: { y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)' }, children: [_jsx(CardIconWrapper, { children: _jsx(CardIcon, { src: Mission, alt: "Mission" }) }), _jsx(CardTitle, { children: "Mission" }), _jsx(CardText, { children: "To deliver expertly engineered Industrial Automation and Electrical System Solutions that empower our clients to optimize production efficiently, ensuring exceptional customer satisfaction." })] }), _jsxs(AboutCard, { as: motion.div, initial: { opacity: 0, y: 50 }, animate: isVisible.about ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" }, whileHover: { y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)' }, children: [_jsx(CardIconWrapper, { children: _jsx(CardIcon, { src: Vission, alt: "Vision" }) }), _jsx(CardTitle, { children: "Vision" }), _jsx(CardText, { children: "We believe that a well-engineered control system is the backbone of a successful, profitable operation. Our automation and electrical systems are built on this principle and supported throughout the project life cycle with unwavering commitment." })] })] })] }), _jsx(ExploreButton, { to: "/about", as: motion.a, initial: { opacity: 0 }, animate: isVisible.about ? { opacity: 1 } : {}, transition: { duration: 0.8, delay: 0.8, ease: "easeOut" }, whileHover: { scale: 1.05, boxShadow: '0 10px 25px rgba(30, 144, 255, 0.3)' }, whileTap: { scale: 0.95 }, children: "Learn More About Us" })] }), _jsx(ExpertiseSection, { isVisible: isVisible.expertise, sectionRef: expertiseRef }), _jsx(StoreComponent, {}), _jsxs(SectionWrapper, { bgColor: "#f8fafd", id: "industries", ref: industriesRef, children: [_jsxs(SectionTitle, { as: motion.h2, initial: { opacity: 0, y: 30 }, animate: isVisible.industries ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, ease: "easeOut" }, children: ["Industries We ", _jsx(GradientText, { children: "Serve" })] }), _jsx(IndustriesGrid, { children: [
                            { name: "Oil & Gas", icon: "/src/assets/images/industry-oil.png", delay: 0.2 },
                            { name: "Water & Wastewater", icon: "/src/assets/images/industry-water.png", delay: 0.3 },
                            { name: "Food & Beverage", icon: "/src/assets/images/industry-food.png", delay: 0.4 },
                            { name: "Pharmaceuticals", icon: "/src/assets/images/industry-pharma.png", delay: 0.5 },
                            { name: "Power & Utilities", icon: "/src/assets/images/industry-power.png", delay: 0.6 },
                            { name: "Steel & Aluminum", icon: "/src/assets/images/industry-metal.png", delay: 0.7 }
                        ].map((industry, index) => (_jsxs(IndustryItem, { as: motion.div, initial: { opacity: 0, y: 30 }, animate: isVisible.industries ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.1, delay: industry.delay, ease: "easeOut" }, whileHover: { y: -10, scale: 1.05 }, children: [_jsx(IndustryIconContainer, { children: _jsx(IndustryIcon, { src: industry.icon, alt: industry.name }) }), _jsx(IndustryName, { children: industry.name })] }, index))) })] }), _jsxs(SectionWrapper, { id: "clients", ref: clientsRef, children: [_jsxs(SectionTitle, { as: motion.h2, initial: { opacity: 0, y: 30 }, animate: isVisible.clients ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, ease: "easeOut" }, children: ["Our Trusted ", _jsx(GradientText, { children: "Clients" })] }), _jsxs(ClientsContainer, { as: motion.div, initial: { opacity: 0 }, animate: isVisible.clients ? { opacity: 1 } : {}, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }, children: [_jsx(ClientsCarousel, { children: clientLogos.map((client, index) => (_jsx(ClientLogo, { src: client.src, alt: client.name, active: index === activeClient, onClick: () => setActiveClient(index), as: motion.img, whileHover: { scale: 1.1, filter: 'grayscale(0)', opacity: 1 } }, client.name))) }), _jsx(ClientNavigation, { children: clientLogos.map((_, index) => (_jsx(ClientDot, { active: index === activeClient, onClick: () => setActiveClient(index), as: motion.div, whileHover: { scale: 1.2 }, whileTap: { scale: 0.9 } }, index))) })] })] }), _jsxs(CallToAction, { children: [_jsxs(CTAContent, { as: motion.div, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, viewport: { once: true, amount: 0.5 }, children: [_jsx(CTATitle, { children: "Ready to optimize your operations?" }), _jsx(CTAText, { children: "Let's discuss how our automation solutions can transform your business." }), _jsx(CTAButton, { to: "/contact", as: motion.a, whileHover: { scale: 1.05, boxShadow: '0 10px 20px rgba(30, 144, 255, 0.4)' }, whileTap: { scale: 0.95 }, children: "Contact Our Experts" })] }), _jsx(CTABackground, {})] }), _jsxs(MapSection, { children: [_jsxs(MapTitle, { as: motion.h2, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, viewport: { once: true, amount: 0.5 }, children: ["Our ", _jsx(GradientText, { children: "Location" })] }), _jsx(MapWrapper, { as: motion.div, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }, viewport: { once: true, amount: 0.5 }, children: _jsx("iframe", { title: "Company Location", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.131345672354!2d76.62821917504728!3d9.601602980459917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d1a165aee5d%3A0x9e1609a887c211f5!2sCeScift%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1715514313641!5m2!1sen!2sin", width: "100%", height: "400", frameBorder: "0", style: { border: 0 }, allowFullScreen: true, loading: "lazy" }) })] })] }));
};
export default HomePage;
// Styled Components
const HomeContainer = styled.div `
  padding-top: 80px;
  overflow-x: hidden;
`;
// Hero Section Styling
const HeroSection = styled.section `
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
const particleAnimation = keyframes `
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
const HeroBackgroundAnimation = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 10% 10%, rgba(30, 144, 255, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 90%, rgba(100, 181, 246, 0.1) 0%, transparent 25%),
    radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.05) 0%, transparent 15%);
  opacity: 1;
  z-index: 0;
  
  &:before, &:after {
    content: '';
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
const HeroContent = styled.div `
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
const textGradient = keyframes `
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
const GradientSpan = styled.span `
  background: linear-gradient(90deg, #1e90ff, #64b5f6, #1e90ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textGradient} 3s linear infinite;
`;
const GradientText = styled.span `
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const HeroTitle = styled.h1 `
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
const HeroSubtitle = styled.p `
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
const HeroButtonGroup = styled.div `
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const HeroButton = styled(Link) `
  padding: 16px 32px;
  background-color: ${props => props.secondary ? 'transparent' : '#1e90ff'};
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.secondary ? 'white' : '#1e90ff'};
  box-shadow: ${props => props.secondary ? 'none' : '0 10px 20px rgba(30, 144, 255, 0.3)'};
  
  &:hover {
    background-color: ${props => props.secondary ? 'rgba(255, 255, 255, 0.1)' : '#0b78e5'};
    box-shadow: ${props => props.secondary ? '0 5px 15px rgba(255, 255, 255, 0.1)' : '0 15px 25px rgba(30, 144, 255, 0.4)'};
  }
  
  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;
const HeroImageWrapper = styled.div `
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;
const floatAnimation = keyframes `
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
const HeroGeometricShape = styled.div `
  position: absolute;
  width: ${props => props.size || "30px"};
  height: ${props => props.size || "30px"};
  top: ${props => props.top || "0"};
  left: ${props => props.left || "0"};
  background-color: ${props => props.color || "#1e90ff"};
  opacity: 0.7;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 0;
  animation: ${floatAnimation} 6s infinite ease-in-out;
  animation-delay: ${props => props.delay || "0s"};
  
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeroImage = styled.img `
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
const SectionWrapper = styled.section `
  padding: 100px 5%;
  background-color: ${props => props.bgColor || 'white'};
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 70px 5%;
  }
`;
const SectionTitle = styled.h2 `
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 60px;
  color: #0a1e2f;
  position: relative;
  font-weight: 800;
  
  &:after {
    content: '';
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
const SectionContent = styled.div `
  max-width: 1200px;
  margin: 0 auto;
`;
// About Section
const AboutText = styled.p `
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
const AboutCardContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const AboutCard = styled.div `
  background-color: white;
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
`;
const glowAnimation = keyframes `
  0% { box-shadow: 0 0 5px rgba(30, 144, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(30, 144, 255, 0.8); }
  100% { box-shadow: 0 0 5px rgba(30, 144, 255, 0.5); }
`;
const CardIconWrapper = styled.div `
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
const CardIcon = styled.img `
  width: 115px;
  height: 115px;
  object-fit: cover;
  border-radius: 50%;
`;
const CardTitle = styled.h3 `
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #0a1e2f;
  font-weight: 700;
`;
const CardText = styled.p `
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;
const ExploreButton = styled(Link) `
  display: block;
  margin: 50px auto 0;
  padding: 14px 30px;
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  max-width: 250px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(30, 144, 255, 0.2);
`;
// Clients Section
const ClientsContainer = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`;
const ClientsCarousel = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
`;
const ClientLogo = styled.img `
  height: 60px;
  object-fit: contain;
  filter: ${props => props.active ? 'grayscale(0)' : 'grayscale(100%)'};
  opacity: ${props => props.active ? '1' : '0.5'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;
const ClientNavigation = styled.div `
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
const ClientDot = styled.div `
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#1e90ff' : '#ccc'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#1e90ff' : '#999'};
  }
`;
// Industries Section
const IndustriesGrid = styled.div `
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
const IndustryItem = styled.div `
  background: white;
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;
const IndustryIconContainer = styled.div `
  background: linear-gradient(135deg, #1e90ff, #64b5f6);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`;
const IndustryIcon = styled.img `
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(0) invert(1);
`;
const IndustryName = styled.h4 `
  font-size: 1.2rem;
  color: #0a1e2f;
  font-weight: 600;
`;
// Map Section
const MapSection = styled.section `
  padding: 80px 5%;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;
const MapTitle = styled.h2 `
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #0a1e2f;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const MapWrapper = styled.div `
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
const CallToAction = styled.section `
  padding: 100px 5%;
  background: linear-gradient(135deg, #0a1e2f, #1e3a5f);
  color: white;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 80px 5%;
  }
`;
const CTABackground = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(30, 144, 255, 0.15) 0%, transparent 30%),
    radial-gradient(circle at 80% 80%, rgba(100, 181, 246, 0.1) 0%, transparent 20%);
  z-index: 0;
`;
const CTAContent = styled.div `
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;
const CTATitle = styled.h2 `
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;
const CTAText = styled.p `
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const CTAButton = styled(Link) `
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
