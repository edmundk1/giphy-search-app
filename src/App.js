import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core'
import './App.css';
import FlexContainer from "./components/common/FlexContainer";
import GifsContainer from "./components/gifs/GifsContainer";
import SearchContainer from "./components/search/SearchContainer";
import LoadMoreButton from "./components/LoadMoreButton";
import getAPIEndPoint from "./managers/APIManager";

const AppContainer = styled(FlexContainer)`
  min-width: 500px;
  width: 80%;
  align-items: center;  
  //background-image: linear-gradient(white, lightblue);
`

const PaddedTypography = styled(Typography)`
  && {
    padding: 15px;
  }
`

function App() {
  const [displayedGifs, setDiplayedGifs] = useState([])

  useEffect(() => {
    const getTrendingGifs = async () => {
      let baseEndpoint = "http://api.giphy.com/v1/gifs/trending";
      let limit = 6;
      let params = {"limit": limit, "offset": 0};
      let results = await getAPIEndPoint(baseEndpoint, params);
      setDiplayedGifs(results.data);
    };

    getTrendingGifs();
  }, []);

  return (
    <AppContainer column className="App">
      <PaddedTypography variant="h2">
        Giphy Searcher
      </PaddedTypography>
      <SearchContainer />
      <GifsContainer gifArray={displayedGifs}/>
      <LoadMoreButton />
    </AppContainer>
  );
}

export default App;
