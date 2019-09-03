import styled from 'styled-components';
import React from 'react';

import FlexContainer from '../common/FlexContainer';
import GifComponent from './GifComponent';

const StyledContainer = styled(FlexContainer)`
  margin: 10px;
  width: 70%;
  min-width: 370px;
`;

export default function GifsContainer(props) {
  return (
    <StyledContainer wrap="wrap">
      {props.gifArray.map((gif) => (
        <GifComponent
          key={gif.id}
          gifSrc={gif.images.downsized.url}
        />
      ))}
    </StyledContainer>
  );
}
