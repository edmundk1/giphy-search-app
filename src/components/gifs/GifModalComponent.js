import { IconButton, Modal, TextField, Typography } from '@material-ui/core';
import { Close, FileCopy } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
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

const LinkContainer = styled(FlexContainer)`
  flex: auto;
  //width: 80%;
  width: fit-content;
  height: fit-content;
  align-items: center;
`;

const TypographyContainer = styled(FlexContainer)`
  flex: auto;
  width: 10%;
  min-width: fit-content;
`;

const GutteredTypography = styled(Typography)`
  && {
    margin: 0 20px;
  }
`;

const SetWidthTextField = styled(TextField)`
  && {
    //width: 60%;
    width: 250px;
    margin: 10px 0;
  }
`;

const LeftGutteredIconButton = styled(IconButton)`
  && {
    margin-left: 10px;
  }
`;

export default function GifModalComponent(props) {
  const [isOpen, setIsOpen] = useState(true);
  const linkRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
    props.handleModalClosed();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClose();
    }
  };

  const handleCopy = () => {
    linkRef.current.select();
    document.execCommand('copy');
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
          <LinkContainer>
            <TypographyContainer>
              <GutteredTypography>
                Link:
              </GutteredTypography>
            </TypographyContainer>
            <SetWidthTextField
              defaultValue={props.gifSrc}
              variant="outlined"
              InputProps={{ readOnly: true }}
              inputRef={linkRef}
            />
            <LeftGutteredIconButton onClick={handleCopy}>
              <FileCopy />
            </LeftGutteredIconButton>
          </LinkContainer>
        </ImgContainer>
      </ModalContainer>
    </ScrollableModal>
  );
}
