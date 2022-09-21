import React from 'react';
import styled from 'styled-components';

import { SizeSelect } from './SizeSelect';

const StyledPagination = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 16px 16px;
`;

const StyledButtonsWrapper = styled.div`
    padding: 20px 0;
`;

const StyledButton = styled.button`
    margin: 2px 4px;
    background-color: ${({ theme }) => `${theme.colors.palette5}`};
    color: ${({ theme }) => `${theme.colors.white}`};
    box-shadow: ${({ theme }) => `0 2px 8px ${theme.colors.shadow}`};
    border: none;
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
    font-family: ${({ theme }) => theme.fonts.header};
    border-radius: 2px;
    font-size: 1rem;
    line-height: 1.5rem;
    opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
    height: 30px;
    min-width: 40px;
`;

type Props = {
    previousPage: () => void;
    nextPage: () => void;
    gotoPage: (page: number) => void;
    setPageSize: (page: number) => void;
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageCount: number;
    pageIndex: number;
    pageSize: number;
    maxResults: number;
};

const Pagination = ({
    previousPage,
    nextPage,
    gotoPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageIndex,
    pageSize,
    maxResults,
}: Props) => {
    const goToListStart = () => gotoPage(0);

    const goToListEnd = () => gotoPage(pageCount - 1);

    const hideButtons = pageCount === 1;

    return (
        <StyledPagination>
            {!hideButtons ? (
                <>
                    <span>
                        {'page '}
                        <strong>{`${pageIndex + 1} of ${pageCount || 1}`}</strong>
                    </span>

                    <StyledButtonsWrapper>
                        <StyledButton
                            type="button"
                            onClick={goToListStart}
                            disabled={!canPreviousPage}
                        >
                            {'<<'}
                        </StyledButton>
                        <StyledButton
                            type="button"
                            onClick={previousPage}
                            disabled={!canPreviousPage}
                        >
                            {'<'}
                        </StyledButton>
                        <StyledButton type="button" onClick={nextPage} disabled={!canNextPage}>
                            {'>'}
                        </StyledButton>
                        <StyledButton type="button" onClick={goToListEnd} disabled={!canNextPage}>
                            {'>>'}
                        </StyledButton>
                    </StyledButtonsWrapper>
                </>
            ) : null}

            <SizeSelect setPageSize={setPageSize} pageSize={pageSize} maxResults={maxResults} />
        </StyledPagination>
    );
};

export default Pagination;
