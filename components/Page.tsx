import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.main`
    display: flex;
    justify-content: center;
    margin: 20px;

    @media only screen and (${({ theme }) => `${theme.display.xsScreen}`}) {
        margin: 10px 0px;
    }
`;

const Card = styled.div`
    padding: 1rem;
    border-radius: 5px;
    box-shadow: ${({ theme }) => `0 2px 8px ${theme.colors.shadow}`};
    max-width: 1020px;
    background-color: ${({ theme }) => theme.colors.white};

    @media only screen and (${({ theme }) => `${theme.display.xsScreen}`}) {
        padding: 1rem;
        border-radius: 0;
    }
`;

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const Page = ({ children }: Props) => (
    <StyledPage>
        <Card>{children}</Card>
    </StyledPage>
);
