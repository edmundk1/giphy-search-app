import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { Typography } from '@material-ui/core'
import './App.css';
import FlexContainer from "./components/common/FlexContainer";
import GifsContainer from "./components/gifs/GifsContainer";
import SearchContainer from "./components/search/SearchContainer";

const AppContainer = styled(FlexContainer)`
  min-width: 500px;
  width: 80%;
  //background-image: linear-gradient(white, lightblue);
`

const PaddedTypography = styled(Typography)`
  && {
    padding: 15px;
  }
`

function App() {
  return (
    <AppContainer column className="App">
      <PaddedTypography variant="h2">
        Giphy Searcher
      </PaddedTypography>
      <SearchContainer />
      <GifsContainer />
    </AppContainer>
  );
}

export default App;
