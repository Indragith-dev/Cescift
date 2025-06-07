import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Automation from '../../../Assests/images/homeImages/automationImage.jpg';
import electrical from '../../../Assests/images/homeImages/electricalImage.jpg';
import embedded from '../../../Assests/images/homeImages/embeddedImage.jpg';
const ExpertiseSection = ({ isVisible, sectionRef }) => {
    const expertiseItems = [
        {
            image: Automation,
            icon: "/src/assets/images/icon-automation.png",
            title: "Industrial Automation Solutions",
            description: "Providing turnkey integrated automation solutions from the shop floor to Manufacturing Information Systems.",
            link: "/services/#automation",
            delay: 0.3
        },
        {
            image: electrical,
            icon: "/src/assets/images/icon-panel.png",
            title: "Electrical & Control Panel Manufacturing",
            description: "Custom design and fabrication of electrical and control panels for seamless integration.",
            link: "/services/#panel",
            delay: 0.5
        },
        {
            image: embedded,
            icon: "/src/assets/images/icon-embedded.png",
            title: "Embedded System Engineering",
            description: "Developing custom hardware and firmware solutions optimized for enhanced performance.",
            link: "/services/#embedded",
            delay: 0.7
        }
    ];
    return (_jsxs(SectionWrapper, { bgColor: "#f8fafd", id: "expertise", ref: sectionRef, children: [_jsxs(SectionTitle, { as: motion.h2, initial: { opacity: 0, y: 30 }, animate: isVisible ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, ease: "easeOut" }, children: ["Our ", _jsx(GradientText, { children: "Expertise" })] }), _jsx(ExpertiseGrid, { children: expertiseItems.map((item, index) => (_jsxs(ExpertiseCard, { as: motion.div, initial: { opacity: 0, y: 50 }, animate: isVisible ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.8, delay: item.delay, ease: "easeOut" }, whileHover: { y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)' }, children: [_jsx(ExpertiseImageContainer, { children: _jsx(ExpertiseImage, { src: item.image, alt: item.title }) }), _jsxs(ExpertiseContentBox, { children: [_jsx(ExpertiseTitle, { children: item.title }), _jsx(ExpertiseDivider, {}), _jsx(ExpertiseText, { children: item.description }), _jsxs(CardLink, { to: item.link, children: ["Learn More", _jsx(CardLinkArrow, { children: "\u2192" })] })] })] }, index))) })] }));
};
export default ExpertiseSection;
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
const GradientText = styled.span `
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ExpertiseGrid = styled.div `
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
const ExpertiseCard = styled.div `
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
`;
const pulseEffect = keyframes `
  0% { box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.6); }
  70% { box-shadow: 0 0 0 10px rgba(30, 144, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(30, 144, 255, 0); }
`;
const ExpertiseImageContainer = styled.div `
  width: 100%;
  height: 200px;
  overflow: hidden;
`;
const ExpertiseImage = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  
  ${ExpertiseCard}:hover & {
    transform: scale(1.05);
  }
`;
const ExpertiseContentBox = styled.div `
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const ExpertiseTitle = styled.h3 `
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #0a1e2f;
  font-weight: 700;
`;
const ExpertiseDivider = styled.div `
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  margin-bottom: 15px;
  border-radius: 2px;
`;
const ExpertiseText = styled.p `
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  flex-grow: 1;
  margin-bottom: 20px;
`;
const CardLink = styled(Link) `
  display: inline-flex;
  align-items: center;
  color: #1e90ff;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
`;
const CardLinkArrow = styled.span `
  margin-left: 5px;
  transition: transform 0.3s ease;
  
  ${CardLink}:hover & {
    transform: translateX(5px);
  }
`;
