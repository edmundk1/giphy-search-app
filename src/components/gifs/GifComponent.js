import styled from 'styled-components';
import React, { useState } from 'react';

import FlexContainer from '../common/FlexContainer';
import LoadIndicatorComponent from '../loadMore/LoadIndicatorComponent';

const StyledComponentContainer = styled(FlexContainer)`
  min-width: 350px;
  width: 350px;
  min-height: 350px;
  height: 350px;
  margin: auto;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  object-fit: cover;
  width: 350px;
  height: 350px;
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
`;

export default function GifComponent(props) {
  const [isLoading, setIsLoading] = useState(true);

  const LoadIndicator = isLoading ? <LoadIndicatorComponent /> : null;

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const handleClick = () => {
    props.handleGifClicked(props.gifSrc);
  };

  return (
    <StyledComponentContainer>
      { LoadIndicator }
      <StyledImg
        src={props.gifSrc}
        onLoad={handleImageLoaded}
        onClick={handleClick}
        hidden={isLoading}
      />
    </StyledComponentContainer>
  );
}
