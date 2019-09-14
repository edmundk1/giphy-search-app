import { IconButton, Modal } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

import FlexContainer from '../common/FlexContainer';

const ScrollableModal = styled(Modal)`
  overflow: scroll;
`;

const ModalContainer = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: transparent;
`;

const ImgContainer = styled(FlexContainer)`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
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
  width: 600px;
  margin: 0 20px 70px 20px;
`;

export default function GifModalComponent(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    props.handleModalClosed();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClose();
    }
  };

  return (
    <ScrollableModal open={isOpen} onKeyPress={handleKeyPress}>
      <ModalContainer>
        <ImgContainer column>
          <ButtonContainer>
            <GutteredIconButton onClick={handleClose}>
              <Close />
            </GutteredIconButton>
          </ButtonContainer>
          <GutteredImg src={props.gifSrc} />
        </ImgContainer>
      </ModalContainer>
    </ScrollableModal>
  );
}
