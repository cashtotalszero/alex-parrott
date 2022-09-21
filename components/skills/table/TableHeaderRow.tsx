/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-key */
import React from 'react';
import type { HeaderGroup } from 'react-table';

type Props = {
    headerGroups: HeaderGroup<object>[];
};

export const TableHeaderRow = (props: Props) => {
    const { headerGroups } = props;

    return (
        <>
            {headerGroups.map((headerGroup) => {
                const { getHeaderGroupProps, headers } = headerGroup;

                return (
                    <tr {...getHeaderGroupProps()}>
                        {headers.map((column) => {
                            const {
                                render,
                                isSorted,
                                isSortedDesc,
                                getHeaderProps,
                                getSortByToggleProps,
                            } = column;

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
        </>
    );
};
