/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from 'react-table';
import styled from 'styled-components';

import Autosuggest from './Autosuggest';
import Pagination from './TablePagination';

const TableStyles = styled.div`
  padding: 1rem;

  @media only screen and (max-width: 800px) {
    font-size: 0.75rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    transition: all 0.5 ease;
  }

  th {
    font-family: 'Lexend Tera';
    background-color: ${({ theme }) => `${theme.colors.palette5}`};
    line-height: 1.2rem;
  }

  td,
  th {
    border: ${({ theme }) => `1px solid ${theme.colors.palette2}`};
    text-align: left;
    padding: 8px;
  }
`;

// Define a default UI for filtering
function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  return (
    <span>
      {'Search: '}
      <Autosuggest onChange={(val) => setGlobalFilter(val || undefined)} placeholder="e.g. frontend" />
    </span>
  );
}

const Table = ({ columnDefs, tableData, initialState }) => {
  const columns = useMemo(() => columnDefs, []);
  const data = useMemo(() => tableData, []);

  const filterTypes = useMemo(
    () => ({
      text: (rows, id, filterValue) =>
        rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
            : true;
        }),
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,

    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { ...initialState, pageIndex: 0, pageSize: 10 },
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const tableProps = getTableProps();
  const bodyProps = getTableBodyProps();

  return (
    <>
      <TableStyles>
        <table {...tableProps}>
          <thead>
            <tr>
              <th colSpan={visibleColumns.length}>
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
            </tr>
            {headerGroups.map((headerGroup) => {
              const { getHeaderGroupProps, headers } = headerGroup;

              return (
                <tr {...getHeaderGroupProps()}>
                  {headers.map((column) => {
                    const { render, isSorted, isSortedDesc, getHeaderProps, getSortByToggleProps } = column;
                    const headerProps = getHeaderProps(getSortByToggleProps());

                    let sortIndicator = '';
                    if (isSorted) {
                      sortIndicator = isSortedDesc ? ' 🔽' : ' 🔼';
                    }

                    return (
                      <th {...headerProps}>
                        {render('Header')}
                        <span>{sortIndicator}</span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>

          <tbody {...bodyProps}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}

            {!rows.length && (
              <tr>
                <td colSpan={visibleColumns.length}>Eek! No results found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </TableStyles>

      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        setPageSize={setPageSize}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        maxResults={rows.length}
        description={`${rows.length} results found.`}
      />
    </>
  );
};

export default Table;
