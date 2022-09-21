/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { TableBodyProps, TableProps, Row, HeaderGroup } from 'react-table';

import { SearchBox } from '../search/SearchBox';
import { TableHeaderRow } from './TableHeaderRow';
import { TablePage } from './TablePage';
import { TableStyles } from './TableStyles';

type Props = {
    tableProps: TableProps;
    bodyProps: TableBodyProps;
    page: Row<object>[];
    headerGroups: HeaderGroup<object>[];
    prepareRow: (row: Row<object>) => void;
    setGlobalFilter: (filterValue?: string) => void;
    columnCount: number;
    isEmpty: boolean;
};

export const Table = (props: Props) => {
    const {
        tableProps,
        bodyProps,
        page,
        isEmpty,
        columnCount,
        setGlobalFilter,
        headerGroups,
        prepareRow,
    } = props;

    return (
        <TableStyles>
            <table {...tableProps}>
                <thead>
                    <tr>
                        <th colSpan={columnCount}>
                            <SearchBox setSkillsFilter={setGlobalFilter} />
                        </th>
                    </tr>

                    <TableHeaderRow headerGroups={headerGroups} />
                </thead>

                <tbody {...bodyProps}>
                    <TablePage page={page} prepareRow={prepareRow} />

                    {isEmpty && (
                        <tr>
                            <td colSpan={columnCount}>No results found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </TableStyles>
    );
};
