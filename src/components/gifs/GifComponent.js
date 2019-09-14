import styled from 'styled-components';
import React from 'react';
import FlexContainer from '../common/FlexContainer';

const StyledComponentContainer = styled(FlexContainer)`
  width: 350px;
  height: 350px;
  margin: auto;
  margin-top: 10px;
`;

const StyledImg = styled.img`
  object-fit: cover;
  
  width: 350px;
  height: 350px;
`;

export default function GifComponent(props) {
  const handleClick = () => {
    props.handleGifClicked(props.gifSrc);
  };

  return (
    <StyledComponentContainer>
      <StyledImg
        src={props.gifSrc}
        onClick={handleClick}
      />
    </StyledComponentContainer>
  );
}
