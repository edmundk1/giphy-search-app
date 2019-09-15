import React, { lazy, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import {Divider, Modal, Typography} from '@material-ui/core';

import FlexContainer from './components/common/FlexContainer';
import GifsContainer from './components/gifs/GifsContainer';
import SearchContainer from './components/search/SearchContainer';
import { getTrendingGifs, getSearchGifs, defaultNumResults } from './managers/APIManager';
import LoadIndicatorComponent from './components/loadMore/LoadIndicatorComponent';
import PaginationNavComponent from './components/loadMore/PaginationNavComponent';

const GifModalComponent = lazy(() => import('./components/gifs/gifModal/GifModalComponent'));

const AppContainer = styled(FlexContainer)`
  min-width: 500px;
  width: 100%;
  align-items: center;  
`;

const FallbackModalContainer = styled(FlexContainer)`
  flex: auto;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const LoadIndicatorContainer = styled(FlexContainer)`
  height: 100px;
  width: 100px;
  border-radius: 4px;
  align-items: center;
  background-color: white;
`;

const PaddedTypography = styled(Typography)`
  && {
    padding: 15px;
  }
`;

const BottomGutterDivider = styled(Divider)`
  && {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const GifModalFallback = () => (
  <Modal open>
    <FallbackModalContainer>
      <LoadIndicatorContainer>
        <LoadIndicatorComponent />
      </LoadIndicatorContainer>
    </FallbackModalContainer>
  </Modal>
);

function App() {
  const initialPage = 0;
  const initialTotalResults = 0;
  const [displayedGifs, setDiplayedGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentSearch, setCurrentSearch] = useState('');
  const [totalResults, setTotalResults] = useState(initialTotalResults);
  const [isSearching, setIsSearching] = useState(false);
  const [gifModalSrc, setGifModalSrc] = useState('');
  const [numResultsPerPage, setNumResultsPerPage] = useState(defaultNumResults);

  const handleSearch = async (search) => {
    if (search.length > 0) {
      if (search !== currentSearch) {
        setTotalResults(initialTotalResults);
        setCurrentPage(initialPage);
        setCurrentSearch(search);
      }
      const searchGifsResponse = await getSearchGifs(currentPage * numResultsPerPage, numResultsPerPage, search);
      const searchGifsData = await searchGifsResponse.data;
      const searchGifsPagination = await searchGifsResponse.pagination;

      setTotalResults(searchGifsPagination.total_count);
      setDiplayedGifs(searchGifsData);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleResultsPerPageChange = (newNumResultsPerPage) => {
    setCurrentPage(initialPage);
    setNumResultsPerPage(newNumResultsPerPage);
  };

  const handleGifClicked = (gifSrc) => {
    setGifModalSrc(gifSrc);
  };

  const handleModalClosed = () => {
    setGifModalSrc('');
  };

  const GifModal = gifModalSrc !== ''
    ? (
      <GifModalComponent
        gifSrc={gifModalSrc}
        handleModalClosed={handleModalClosed}
      />
    ) : null;

  const PaginationComponent = (currentSearch) ? (
    <PaginationNavComponent
      count={totalResults}
      from={currentPage * defaultNumResults}
      to={(currentPage + 1) * defaultNumResults}
      handlePageChange={handlePageChange}
      handleResultsPerPageChange={handleResultsPerPageChange}
      pageNum={currentPage}
      numResultsPerPage={numResultsPerPage}
    />
    ) : null;

  const LoadIndicator = isSearching ? (<LoadIndicatorComponent />) : null;

  useEffect(() => {
    const getInitialTrendingGifs = async () => {
      const initialTrendingGifs = await getTrendingGifs(initialPage);

      setDiplayedGifs(initialTrendingGifs);
    };

    getInitialTrendingGifs();
  }, []);

  useEffect(() => {
    handleSearch(currentSearch);
  }, [numResultsPerPage, currentPage]);

  return (
    <AppContainer column>
      <PaddedTypography variant="h2">
        Giphy Searcher
      </PaddedTypography>
      <BottomGutterDivider />
      <SearchContainer handleSearch={handleSearch} />
      <GifsContainer
        gifArray={displayedGifs}
        handleGifClicked={handleGifClicked}
      />
      <Suspense fallback={<GifModalFallback />}>
        { GifModal }
      </Suspense>
      { PaginationComponent }
      { LoadIndicator }
      <PaddedTypography variant="h6">
        Footer
      </PaddedTypography>
    </AppContainer>
  );
}

export default App;
