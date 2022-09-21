import styled from 'styled-components';

export const TableStyles = styled.div`
    padding: 1rem;

    @media only screen and (${({ theme }) => `${theme.display.mScreen}`}) {
        font-size: 0.75rem;
    }

    @media only screen and (${({ theme }) => `${theme.display.sScreen}`}) {
        font-size: 0.6rem;
        padding: 1rem 0;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th {
        font-family: ${({ theme }) => theme.fonts.header};
        background-color: ${({ theme }) => `${theme.colors.palette2}`};
        line-height: 1.2rem;
        color: ${({ theme }) => `${theme.colors.white}`};
        vertical-align: middle;
    }

    td,
    th {
        border: ${({ theme }) => `1px solid ${theme.colors.palette2}`};
        text-align: left;
        padding: 8px;

        @media only screen and (${({ theme }) => `${theme.display.sScreen}`}) {
            padding: 8px 5px;
        }
    }
`;
