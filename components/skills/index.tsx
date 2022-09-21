import React from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import type { Column } from 'react-table';

import Pagination from './pagination/Pagination';
import { Table } from './table/Table';
import { SkillLevelCell } from './table/SkillLevelCell';

import { skills as tableData } from './data';

const columnDefs: Column<object>[] = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Type',
        accessor: 'type',
    },
    {
        Header: 'Language',
        accessor: 'lang',
    },
    {
        Header: 'Skill level',
        accessor: 'level',
        Cell: SkillLevelCell,
    },
];

const SkillsTable = () => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
        // Filtering props
        setGlobalFilter,
        // Pagination props
        page,
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
            columns: columnDefs,
            data: tableData,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
    );

    const tableProps = getTableProps();
    const bodyProps = getTableBodyProps();

    return (
        <div>
            <Table
                tableProps={tableProps}
                bodyProps={bodyProps}
                page={page}
                isEmpty={!rows.length}
                columnCount={visibleColumns.length}
                setGlobalFilter={setGlobalFilter}
                headerGroups={headerGroups}
                prepareRow={prepareRow}
            />

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
            />
        </div>
    );
};

export default SkillsTable;
