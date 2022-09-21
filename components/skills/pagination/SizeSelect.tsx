import React from 'react';
import styled from 'styled-components';

const MAX_SIZE = 5000;
const SIZE_OPTIONS = [5, 10, 20, 30, MAX_SIZE];

const StyledSelect = styled.select`
    width: 250px;
`;
type Props = {
    setPageSize: (page: number) => void;
    pageSize: number;
    maxResults: number;
};

export const SizeSelect = ({ setPageSize, pageSize, maxResults }: Props) => {
    const onPageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(e.target.value));
    };

    const disableAll = maxResults === 0;

    return (
        <StyledSelect value={pageSize} onChange={onPageSizeChange} disabled={disableAll}>
            {SIZE_OPTIONS.map((size) => {
                const disableOption = maxResults < size && size !== MAX_SIZE;

                return (
                    <option key={size} value={size} disabled={disableOption}>
                        {size === MAX_SIZE ? 'Show me everything' : `Show max ${size}`}
                    </option>
                );
            })}
        </StyledSelect>
    );
};
