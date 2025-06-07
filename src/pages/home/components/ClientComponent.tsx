import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Adnoc from '../../../Assests/images/homeImages/clients/adnoc.jpg';
import AEIS from '../../../Assests/images/homeImages/clients/aeis.jpg';
import Apollo from '../../../Assests/images/homeImages/clients/apollo.jpg';
import Dhathri from '../../../Assests/images/homeImages/clients/dhathri.jpg';
import Fluitron from '../../../Assests/images/homeImages/clients/fluitron.jpg';
import Hindustan from '../../../Assests/images/homeImages/clients/hindustan.jpg';
import IndianOil from '../../../Assests/images/homeImages/clients/indianOil.jpg';
import Railways from '../../../Assests/images/homeImages/clients/indianRailway.jpg';
import HindustanUL from '../../../Assests/images/homeImages/clients/hindustanUL.png';


interface ClientSectionProps {
  clientsRef?: React.RefObject<HTMLElement | null>;
}

const ClientSection: React.FC<ClientSectionProps> = ({ clientsRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = clientsRef || useRef<HTMLElement>(null);

  // Updated client logos with full company names
  const defaultClientLogos = [
    { name: 'Abu Dhabi National Oil Company', src: Adnoc },
    { name: 'Advanced Engineering Information Systems', src: AEIS},
    { name: 'Apollo Tyres Limited', src: Apollo},
    { name: 'Dhathri Ayurveda Private Limited', src: Dhathri},
    { name: 'Fluitron Engineering Solutions', src: Fluitron},
    { name: 'Hindustan Petroleum Corporation Limited', src: Hindustan},
    { name: 'Indian Oil Corporation Limited', src: IndianOil},
    { name: 'Indian Railways', src: Railways},
    { name: 'Hindustan Unilever Limited', src: HindustanUL},
  ];

  const logos = defaultClientLogos;

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SectionWrapper id="clients" ref={sectionRef}>
      <SectionTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Trusted <GradientText>Clients</GradientText>
      </SectionTitle>
      
      <ClientsContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <CarouselWrapper>
          <CarouselTrack>
            {/* First set of logos */}
            {logos.map((client, index) => (
              <ClientCard
                key={`first-${client.name}-${index}`}
                as={motion.div}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(30, 144, 255, 0.2)',
                  zIndex: 10
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ClientImage src={client.src} alt={client.name} />
                <ClientName>{client.name}</ClientName>
              </ClientCard>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((client, index) => (
              <ClientCard
                key={`second-${client.name}-${index}`}
                as={motion.div}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(30, 144, 255, 0.2)',
                  zIndex: 10
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ClientImage src={client.src} alt={client.name} />
                <ClientName>{client.name}</ClientName>
              </ClientCard>
            ))}
          </CarouselTrack>
        </CarouselWrapper>
      </ClientsContainer>
    </SectionWrapper>
  );
};

// Styled Components
const SectionWrapper = styled.section`
  padding: 100px 5%;
  background-color: #f8fafd;
  position: relative;
  
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

const GradientText = styled.span`
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ClientsContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 30px;
  animation: ${scrollAnimation} 30s linear infinite;
  width: fit-content;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const ClientCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px 25px;
  min-width: 200px;
  max-width: 250px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(30, 144, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  position: relative;
  
  &:hover {
    border-color: rgba(30, 144, 255, 0.3);
    transform: translateY(-5px);
  }
`;

const ClientImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: contain;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  border-radius: 8px;
`;

const ClientName = styled.h4`
  font-size: 0.9rem;
  color: #0a1e2f;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.5px;
  line-height: 1.3;
  min-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default ClientSection;