import { IconButton, TextField, Typography } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import React, { useRef } from 'react';
import styled from 'styled-components';

import FlexContainer from '../../common/FlexContainer';

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

const LeftRightGutteredIconButton = styled(IconButton)`
  && {
    margin: 0 10px;
  }
`;

export default function GifModalLinkComponent(props) {
  const linkRef = useRef(null);

  const handleCopy = () => {
    linkRef.current.select();
    document.execCommand('copy');
  };

  return (
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
      <LeftRightGutteredIconButton onClick={handleCopy}>
        <FileCopy />
      </LeftRightGutteredIconButton>
    </LinkContainer>
  );
}
