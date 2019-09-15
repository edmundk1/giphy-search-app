import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

import FlexContainer from '../../common/FlexContainer';
import GifModalLinkComponent from './GifModalLinkComponent';

const ModalContentContainer = styled(FlexContainer)`
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  align-items: center;
`;

const ButtonContainer = styled(FlexContainer)`
  flex: auto;
  width: 100%;
  height: fit-content;
`;

const GutteredIconButton = styled(IconButton)`
  margin: 5px;
`;

const GutteredImg = styled.img`
  max-width: 600px;
  max-height: 600px;
  width: auto;
  height: auto;
  margin: 0 20px;
`;

export default function GifModalContentComponent(props) {
  return (
    <ModalContentContainer column>
      <ButtonContainer>
        <GutteredIconButton onClick={props.handleClose}>
          <Close />
        </GutteredIconButton>
      </ButtonContainer>
      <GutteredImg src={props.gifSrc} />
      <GifModalLinkComponent gifSrc={props.gifSrc} />
    </ModalContentContainer>
  );
}
