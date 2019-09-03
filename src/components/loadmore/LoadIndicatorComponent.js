import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';

const PaddedCircularProgress = styled(CircularProgress)`
  && {
    padding: 120px;
  }
`;

const LoadIndicatorComponent = () => (
  <PaddedCircularProgress
    variant="indeterminate"
    size={75}
    thickness={7}
  />
);

export default LoadIndicatorComponent;
