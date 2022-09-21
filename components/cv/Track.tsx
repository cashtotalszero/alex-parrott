/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

type TrackProps = {
    index: number;
};

const StyledTrack = styled.div<TrackProps>`
    top: 0;
    bottom: 0;
    background: ${({ index, theme }) => {
        if (index === 1) {
            return theme.colors.palette1;
        }
        return theme.colors.palette6;
    }};
    border-radius: 99px;
    box-shadow: ${({ theme }) => `0 0px 8px ${theme.colors.shadow}`};
`;

export const Track = (props: any, state: any) => {
    const { index } = state;

    return <StyledTrack {...props} index={index} />;
};
