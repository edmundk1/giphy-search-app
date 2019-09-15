import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

import FlexContainer from '../../common/FlexContainer';
import GifModalContentComponent from './GifModalContentComponent';

const ScrollableModal = styled(Modal)`
  overflow: scroll;
`;

const ModalContainer = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: transparent;
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
        <GifModalContentComponent
          handleClose={handleClose}
          gifSrc={props.gifSrc}
        />
      </ModalContainer>
    </ScrollableModal>
  );
}
