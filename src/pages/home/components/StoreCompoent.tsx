import styled, { keyframes } from "styled-components";
import Store from "../../../Assests/icons/Cart.svg";




// Usage in the component
const StoreComponent = () => (
  <StoreSection>
    <StoreContent>
      <ShopNowBadge>SHOP NOW</ShopNowBadge>
      <StoreTitle>Visit Our Online Store</StoreTitle>
      <StoreText>
        Browse our product catalog for industrial automation components, instrumentation, 
        control systems, and more.
      </StoreText>
      <StoreButton href="https://mybillbook.in/store/cescift" target="_blank" rel="noopener noreferrer">
        <StoreButtonText>Explore Store</StoreButtonText>
        <StoreArrow>→</StoreArrow>
      </StoreButton>
    </StoreContent>
    <StoreGraphic>
      <PulsingCircle color="#1e90ff" size="300px" delay="0s" />
      <PulsingCircle color="#0a1e2f" size="200px" delay="0.5s" />
      <PulsingCircle color="#64b5f6" size="140px" delay="1s" />
      <CenteredStoreButton href="https://mybillbook.in/store/cescift" target="_blank" rel="noopener noreferrer">
        <StoreIcon src={Store} alt="Store" />
      </CenteredStoreButton>
    </StoreGraphic>
  </StoreSection>
);

export default StoreComponent;

// Store Section
const StoreSection = styled.section`
  padding: 80px 5%;
  background-color: #0a1e2f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 5%;
    text-align: center;
  }
`;

const StoreContent = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ShopNowBadge = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #1e90ff, #64b5f6);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const StoreTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StoreText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const StoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 14px 30px;
  background: white;
  color: #0a1e2f;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: #f5f5f5;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const StoreButtonText = styled.span`
  margin-right: 10px;
`;

const StoreArrow = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  
  ${StoreButton}:hover & {
    transform: translateX(5px);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(30, 144, 255, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(30, 144, 255, 0);
  }
`;

const StoreGraphic = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 300px;
`;
interface PulsingCircleProps {
    size: string;
    color: string;
    delay: string;
  }
  
  const PulsingCircle = styled.div<PulsingCircleProps>`
    position: absolute;
    width: ${props => props.size || '100px'};
    height: ${props => props.size || '100px'};
    background-color: ${props => props.color || '#1e90ff'};
    border-radius: 50%;
    opacity: 0.2;
    animation: ${pulseAnimation} 3s infinite;
    animation-delay: ${props => props.delay || '0s'};
  `;
  
  const CenteredStoreButton = styled.a`
    position: absolute;
    z-index: 10;
    width: 100px;
    height: 100px;
    background: #4b79a3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.15);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    }
  `;
  
  const StoreIcon = styled.img`
    width: 70px;
    height: 70px;
    object-fit: contain;
  `;