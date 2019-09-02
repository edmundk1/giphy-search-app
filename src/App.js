import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core'
import './App.css';
import FlexContainer from "./components/common/FlexContainer";
import GifsContainer from "./components/gifs/GifsContainer";
import SearchContainer from "./components/search/SearchContainer";
import LoadMoreButton from "./components/LoadMoreButton";
import getTrendingGifs from "./managers/APIManager";

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
`;

function App() {
  const [displayedGifs, setDiplayedGifs] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);

  const incrementOffset = () => {
    let increment = 6;
    let tempOffset = currentOffset + increment;
    setCurrentOffset(tempOffset)
  };

  const handleLoadMore = async () => {
    let additionalGifs = await getTrendingGifs(currentOffset);
    let tempDisplayedGifs = displayedGifs.concat(additionalGifs);
    setDiplayedGifs(tempDisplayedGifs);

    incrementOffset();
  };

  useEffect(() => {
    const getInitialTrendingGifs = async () => {
      const initialTrendingGifs = await getTrendingGifs(0);

      setDiplayedGifs(initialTrendingGifs);

      incrementOffset();
    };

    getInitialTrendingGifs();
  }, []);

  return (
    <AppContainer column className="App">
      <PaddedTypography variant="h2">
        Giphy Searcher
      </PaddedTypography>
      <SearchContainer />
      <GifsContainer gifArray={displayedGifs}/>
      <LoadMoreButton clickHandler={handleLoadMore}/>
    </AppContainer>
  );
}

export default App;
