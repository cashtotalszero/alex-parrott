import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

type ImageProps = {
    maxWidth?: string;
};

const StyledImage = styled.img<ImageProps>`
    width: ${({ width }) => width};
    max-width: ${({ maxWidth }) => maxWidth};
`;

const ImageSubtitle = styled.span`
    padding: 5px;
    text-align: center;
    font-size: 1rem;
    line-height: 1.2rem;
`;

type Props = {
    imageSrc: string;
    alt: string;
    subtitle: string;
    width?: string;
    maxWidth?: string;
};

export const TitledImage = ({
    imageSrc,
    alt,
    subtitle,
    width = '100%',
    maxWidth = '100%',
}: Props) => (
    <ImageContainer>
        <StyledImage src={imageSrc} alt={alt} width={width} maxWidth={maxWidth} />
        <ImageSubtitle>{subtitle}</ImageSubtitle>
    </ImageContainer>
);
