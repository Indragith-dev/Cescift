import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Assests/icons/logo.png';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <NavContainer scrolled={true}>
      <NavWrapper>
        <LogoContainer to="/" onClick={closeMenu}>
          <Logo src={logo} alt="CESCIFT Logo" />
          <CompanyName>CESCIFT</CompanyName>
        </LogoContainer>

        <MobileMenuButton onClick={toggleMenu}>
          <Hamburger open={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </MobileMenuButton>

        <MenuContainer open={isMenuOpen}>
          <MenuItems>
            {menuItems.map((item) => (
              <MenuItem key={item.path} active={location.pathname === item.path}>
                <MenuLink to={item.path} onClick={closeMenu}>
                  {item.label}
                </MenuLink>
              </MenuItem>
            ))}
          </MenuItems>
        </MenuContainer>
      </NavWrapper>
    </NavContainer>
  );
};

export default NavBar;

// Styled Components
const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props) => (props.scrolled ? '#ffffff' : 'transparent')};
  box-shadow: ${(props) => (props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: all 0.3s ease;
  height: 80px;
  
  @media (max-width: 768px) {
    height: 70px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 5px;
  
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const CompanyName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #0B3C5D;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Hamburger = styled.div<{ open: boolean }>`
  width: 30px;
  height: 24px;
  position: relative;
  
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #0B3C5D;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    
    &:nth-child(1) {
      top: ${(props) => (props.open ? '10px' : '0px')};
      transform: ${(props) => (props.open ? 'rotate(135deg)' : 'rotate(0deg)')};
    }
    
    &:nth-child(2) {
      top: 10px;
      opacity: ${(props) => (props.open ? '0' : '1')};
      left: ${(props) => (props.open ? '-60px' : '0px')};
    }
    
    &:nth-child(3) {
      top: ${(props) => (props.open ? '10px' : '20px')};
      transform: ${(props) => (props.open ? 'rotate(-135deg)' : 'rotate(0deg)')};
    }
  }
`;

const MenuContainer = styled.div<{ open: boolean }>`
  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: ${(props) => (props.open ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

const MenuItem = styled.li<{ active: boolean }>`
  margin: 0 15px;
  
  @media (max-width: 768px) {
    margin: 0;
  }
  
  &:after {
    content: '';
    display: block;
    height: 3px;
    width: ${(props) => (props.active ? '100%' : '0')};
    background-color: #1D7EAA;
    transition: width 0.3s;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    &:after {
      display: none;
    }
  }
`;

const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 0;
  display: block;
  transition: color 0.3s;
  
  &:hover {
    color: #1D7EAA;
  }
  
  @media (max-width: 768px) {
    padding: 15px 20px;
    
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;