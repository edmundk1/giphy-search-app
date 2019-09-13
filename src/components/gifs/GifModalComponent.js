import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

import FlexContainer from '../common/FlexContainer';

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

const GutteredImg = styled.img`
  width: 600px;
  margin: 50px 20px 70px 20px;
`;

export default function GifModalComponent(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsOpen(false);
      props.handleModalClosed();
    }
  };

  return (
    <Modal open={isOpen} onKeyPress={handleKeyPress}>
      <ModalContainer>
        <ImgContainer column>
          <GutteredImg src={props.gifSrc} />
        </ImgContainer>
      </ModalContainer>
    </Modal>
  );
}
