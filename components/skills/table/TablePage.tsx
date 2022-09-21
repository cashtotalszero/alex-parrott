/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-key */
import React from 'react';
import type { Row } from 'react-table';

type Props = {
    page: Row<object>[];
    prepareRow: (row: Row<object>) => void;
};

export const TablePage = (props: Props) => {
    const { page, prepareRow } = props;

    return (
        <>
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
        </>
    );
};
