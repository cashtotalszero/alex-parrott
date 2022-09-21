/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

import { Emoji } from '../Emoji';
import { ROCKET } from '../../constants/emojis';

const StyledThumb = styled.div`
    height: 45px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    cursor: grab;
    box-shadow: ${({ theme }) => `0 2px 8px ${theme.colors.shadow}`};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

export const Thumb = (props: any) => (
    <StyledThumb {...props}>
        <Emoji unicode={ROCKET} label="Rocket" />
    </StyledThumb>
);
