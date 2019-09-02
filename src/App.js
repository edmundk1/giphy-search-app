import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core'
import './App.css';
import FlexContainer from "./components/common/FlexContainer";
import GifsContainer from "./components/gifs/GifsContainer";
import SearchContainer from "./components/search/SearchContainer";
import LoadMoreButton from "./components/LoadMoreButton";
import { getTrendingGifs, getSearchGifs } from "./managers/APIManager";

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
  const initialOffset = 0;
  const [displayedGifs, setDiplayedGifs] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentSearch, setCurrentSearch] = useState("");

  const incrementOffset = () => {
    let increment = 6;
    let tempOffset = currentOffset + increment;
    setCurrentOffset(tempOffset)
  };

  const handleSearch = async (search) => {
    setCurrentOffset(initialOffset);
    setCurrentSearch(search);
    let searchGifs = await getSearchGifs(initialOffset, search);

    setDiplayedGifs(searchGifs);

    incrementOffset();
  };

  const handleLoadMore = async () => {
    let additionalGifs = await getSearchGifs(currentOffset, currentSearch);
    let tempDisplayedGifs = displayedGifs.concat(additionalGifs);
    setDiplayedGifs(tempDisplayedGifs);

    incrementOffset();
  };

  const MoreButton = currentSearch ? (<LoadMoreButton clickHandler={handleLoadMore} />) : null;

  useEffect(() => {
    const getInitialTrendingGifs = async () => {
      const initialTrendingGifs = await getTrendingGifs(initialOffset);

      setDiplayedGifs(initialTrendingGifs);
    };

    getInitialTrendingGifs();
  }, []);

  return (
    <AppContainer column className="App">
      <PaddedTypography variant="h2">
        Giphy Searcher
      </PaddedTypography>
      <SearchContainer handleSearch={handleSearch} />
      <GifsContainer gifArray={displayedGifs}/>
      {MoreButton}
    </AppContainer>
  );
}

export default App;
