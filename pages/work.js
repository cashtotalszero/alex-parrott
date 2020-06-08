import { useState } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

import Page from '../components/Page';
import TextBlock, { LINK } from '../components/TextBlock';
import Emoji from '../components/Emoji';
import CV, { DEFAULT_CV_ITEM, CV_ITEM_FIRST, CV_ITEM_LAST } from '../components/CV';
import { ROCKET } from '../constants/emojis';

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 35px;
`;

const StyledThumb = styled.div`
  height: 45px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: #fff;
  cursor: grab;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>
    <Emoji unicode={ROCKET} label="Rocket" />
  </StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${({ index, theme }) => (index === 1 ? theme.colors.palette1 : theme.colors.palette6)};
  border-radius: 99px;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.26);
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const WorkPage = () => {
  const [selectedYear, setSelectedYear] = useState(DEFAULT_CV_ITEM);

  const handleChange = (val) => {
    setSelectedYear(val);
  };

  return (
    <Page>
      <h1>My Career History</h1>
      <TextBlock
        contents={[
          {
            text:
              "Here's my CV / résumé in slider form! Drag the handle to see my employment and education history. If you prefer to look at a more conventional list of jobs then you can find me on ",
          },
          { type: LINK, href: '', text: 'LinkedIn' },
          {
            text: '.',
          },
        ]}
      />

      <div style={{ width: '90%', margin: '40px auto' }}>
        <StyledSlider
          max={CV_ITEM_LAST}
          min={CV_ITEM_FIRST}
          defaultValue={[DEFAULT_CV_ITEM]}
          renderTrack={Track}
          renderThumb={Thumb}
          onChange={handleChange}
        />
      </div>

      <CV year={selectedYear} />
    </Page>
  );
};

export default WorkPage;
