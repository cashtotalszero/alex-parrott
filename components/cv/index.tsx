import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

import { Thumb } from './Thumb';
import { Track } from './Track';
import { CvItem } from './CvItem';
import { DEFAULT_CV_ITEM, CV_ITEM_FIRST, CV_ITEM_LAST } from './itemFactory';

const StyledSliderWrapper = styled.div`
    width: 90%;
    margin: 50px auto 40px auto;
`;

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 35px;
`;

type TrackValue = number | readonly number[];

export const CvSlider = () => {
    const [selectedYear, setSelectedYear] = useState<TrackValue>(DEFAULT_CV_ITEM);

    const handleChange = (value: TrackValue) => setSelectedYear(value);

    return (
        <div>
            <StyledSliderWrapper>
                <StyledSlider
                    max={CV_ITEM_LAST}
                    min={CV_ITEM_FIRST}
                    defaultValue={[DEFAULT_CV_ITEM]}
                    renderTrack={Track}
                    renderThumb={Thumb}
                    onChange={handleChange}
                />
            </StyledSliderWrapper>

            <CvItem year={selectedYear as number} />
        </div>
    );
};
