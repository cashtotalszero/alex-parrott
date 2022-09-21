import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { getYearInfo } from './itemFactory';

const ImgContainer = styled.div`
    max-width: 80%;
    margin: 20px 0;
`;

const YearContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 750px;

    p {
        text-align: center;
        margin: 10px 0;
    }
`;

type Props = {
    year: number;
};

export const CvItem = ({ year }: Props) => {
    const { title, description, imgUrl, imgAlt } = getYearInfo(year);

    if (!description) return null;

    return (
        <YearContainer>
            <h2>{title}</h2>

            {description}

            {imgUrl ? (
                <ImgContainer>
                    <Image src={imgUrl || ''} alt={imgAlt || ''} style={{ width: '100%' }} />
                </ImgContainer>
            ) : null}
        </YearContainer>
    );
};
