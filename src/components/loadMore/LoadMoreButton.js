import { Button } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';

const StyledButton = styled(Button)`
  && {
    width: 30%;
    height: 75px;
    min-width: fit-content;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export default function LoadMoreButton(props) {
  return (
    <StyledButton variant="contained" color="primary" onClick={props.clickHandler}>
      Load More...
    </StyledButton>
  );
}
