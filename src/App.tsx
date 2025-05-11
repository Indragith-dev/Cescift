// src/App.tsx - Original source code (not compiled)
import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <div className="App">
      <TextWrapper>Welcome to My React App</TextWrapper>
      <StyledParagraph className="poppins-medium">
        This is a clean setup for your project!
      </StyledParagraph>
    </div>
  );
};

export default App;

// Styled components definition
const TextWrapper = styled.h1`
  font-size: 32px;
  font-family: 'Poppins';
  font-weight: 600;
  color: red;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  font-family: 'Poppins';
  color: red;
`;