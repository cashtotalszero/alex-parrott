/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spinner from './LoadingSpinner';
import ErrorMessage from './CryptoErrorMessage';

const TableStyles = styled.div`
  @media only screen and (${({ theme }) => `${theme.display.mScreen}`}) {
    font-size: 0.75rem;
  }

  @media only screen and (${({ theme }) => `${theme.display.sScreen}`}) {
    font-size: 0.6rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    font-family: ${({ theme }) => theme.fonts.header};
    background-color: ${({ theme }) => `${theme.colors.greyLightest}`};
    line-height: 1.2rem;
    color: ${({ theme }) => `${theme.colors.greyLighter}`};
    vertical-align: middle;
    border-top: ${({ theme }) => `1px solid ${theme.colors.greyLighter}`};
    height: 25px;
  }

  td,
  th {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.greyLighter}`};
    text-align: left;
    padding: 8px;

    @media only screen and (${({ theme }) => `${theme.display.sScreen}`}) {
      padding: 8px 5px;
    }
  }

  td {
    vertical-align: middle;
    height: 50px;
  }

  tr {
    transition: background-color 0.25s ease-in-out;
    padding: 0 10px;
  }

  /* th:first-child,
  td:first-child {
    padding-left: 200px;

    @media only screen and (${({ theme }) => `${theme.display.lScreen}`}) {
      padding-left: 20px;
    }
  } */

  /* th:last-child,
  td:last-child {
    padding-right: 200px;
    text-align: right;

    @media only screen and (${({ theme }) => `${theme.display.lScreen}`}) {
      padding-right: 20px;
    }
  } */

  tr:hover {
    background-color: blue;
    background-color: ${({ theme }) => `${theme.colors.greyLighter}`};
    cursor: pointer;
  }
`;

const Table = ({ data, columnDefs, isLoading, hasError, onRowClick }) => {
  const columns = useMemo(() => columnDefs, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, visibleColumns } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );
  const tableProps = getTableProps();
  const bodyProps = getTableBodyProps();

  if (hasError) {
    return <ErrorMessage headline="There was a problem loading this table..." />;
  }

  return (
    <>
      <TableStyles>
        <table {...tableProps}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { getHeaderGroupProps, headers } = headerGroup;

              return (
                <tr {...getHeaderGroupProps()}>
                  {headers.map((column) => {
                    const { render, getHeaderProps, isSorted, isSortedDesc, getSortByToggleProps } = column;
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

          {isLoading ? null : (
            <tbody {...bodyProps}>
              {rows.map((row) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()} onClick={() => onRowClick(row)}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}

              {!rows.length && (
                <tr>
                  <td colSpan={visibleColumns.length}>No results found.</td>
                </tr>
              )}
            </tbody>
          )}
        </table>
        {isLoading && <Spinner isLoading />}
      </TableStyles>
    </>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columnDefs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  onRowClick: PropTypes.func.isRequired,
};

export default Table;
