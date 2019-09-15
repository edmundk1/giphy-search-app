import { TablePagination } from '@material-ui/core';
import React from 'react';

import { numResultsArray } from '../../managers/APIManager';

export default function PaginationNavComponent(props) {
  const handlePageChange = (e, newPage) => {
    props.handlePageChange(newPage);
  };

  const handleResultsPerPageChange = (e) => {
    const numResultsPerPage = e.target.value;
    props.handleResultsPerPageChange(numResultsPerPage);
  };

  return (
    <table>
      <tbody>
        <tr>
          <TablePagination
            count={props.count}
            labelRowsPerPage="Results per page:"
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleResultsPerPageChange}
            page={props.pageNum}
            rowsPerPage={props.numResultsPerPage}
            rowsPerPageOptions={numResultsArray}
          />
        </tr>
      </tbody>
    </table>
  );
}
