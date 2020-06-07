import { useState } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

import CustomHead from '../components/CustomHead';
import Card from '../components/Card';
import TextBlock, { LINK, EMOJI } from '../components/TextBlock';
import Emoji from '../components/Emoji';

import { ROCKET, INDIA, JAPAN, CHINA, NEPAL, CANADA, USA, MEXICO, GRINNING_FACE } from '../constants/emojis';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  position: relative;
`;

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 35px;
  /* box-shadow: 0 0px 8px rgba(0, 0, 0, 0.26); */
`;

const StyledThumb = styled.div`
  height: 45px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};

  color: #fff;
  /* border-radius: 50%; */
  cursor: grab;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  /* border: solid 1px red; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /* margin-bottom: -5px; */
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>
    <Emoji unicode={ROCKET} label="Rocket" />
  </StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${({ index, theme, isCoding }) => (index === 1 ? theme.colors.palette1 : theme.colors.palette6)};
  border-radius: 99px;
  /* border: solid 1px red; */
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.26);
`;

// background-color: ${({ theme }) => theme.colors.white};

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const CURRENT_YEAR = new Date().getFullYear();
const DEFAULT_YEAR = 2012;

const getYearInfo = (year) => {
  switch (year) {
    case 2004:
      return {
        text: <p>I graduate from the University of the West of England with a BA (hons) degree in Sociology.</p>,
        imgUrl: '/UWE_logo.jpg',
      };
    case 2005:
      return {
        text: <p>I co-found music promotion company Monkey! Knife! Fight!</p>,
        imgUrl: '/monkey.jpg',
      };
    case 2006:
      return {
        // text: 'Alex goes travelling. A lot.',
        imgUrl: '/Everest.jpg',
        text: (
          <>
            <TextBlock
              contents={[
                { text: 'I go traveling. A lot. ' },
                { type: EMOJI, unicode: INDIA, label: 'India' },
                { type: EMOJI, unicode: JAPAN, label: 'Japan' },
                { type: EMOJI, unicode: CHINA, label: 'China' },
                { type: EMOJI, unicode: NEPAL, label: 'Nepal' },
                { type: EMOJI, unicode: USA, label: 'Usa' },
                { type: EMOJI, unicode: MEXICO, label: 'Mexico' },
              ]}
            />
            <TextBlock
              contents={[
                { text: 'Here I am at Mount Everest ' },
                { type: EMOJI, unicode: GRINNING_FACE, label: 'Grinning face' },
              ]}
            />
          </>
        ),
      };
    case 2007:
      return {
        text: (
          <TextBlock
            contents={[{ text: 'I move to Vancouver, Canada. ' }, { type: EMOJI, unicode: CANADA, label: 'Canada' }]}
          />
        ),
        imgUrl: '/travel.png',
      };
    case 2009:
      return {
        text: <p>I return to the UK and join Lloyds Banking Group as an ATM analyst.</p>,
        imgUrl: '/LBG_logo.png',
      };
    case 2012:
      return {
        text: <p>I learn JavaScript.</p>,
        imgUrl: '/JavaScript-logo.png',
      };
    case 2013:
      return {
        text: <p>I start working on Unity 3D projects for a Bristol start-up company at the Pervasive Media Studio.</p>,
        imgUrl: '/unity_logo.png',
      };
    case 2014:
      return {
        text: (
          <p>
            I graduate from the University of Bristol with a MSc Masters Degree in Computer Science. I immediately join
            Red7Mobile as a JavaScript games developer.
          </p>
        ),
        imgUrl: '/UOB_logo.png',
      };
    case 2015:
      return {
        text: <p>I join the digital agency Somo Global and start coding in React and Vue.</p>,
        imgUrl: '/Somo_logo.png',
      };
    case 2016:
      return {
        text: (
          <p>
            I am lead developer on the Audi VR virtual showroom app, built in Unity. The work is nominated for a Dadi
            Award.
          </p>
        ),
        imgUrl: '/alex_vr.jpg',
      };
    case 2017:
      return {
        text: <p>I go freelance and decide to specialise in building React and React Native apps.</p>,
        imgUrl: '/react_logo.png',
      };
    case 2018:
      return {
        text: (
          <TextBlock
            contents={[
              { text: 'The Audi Beta Website is nominated for the Best Automotive Website ' },
              {
                type: LINK,
                text: 'DADI Award.',
                href:
                  'https://www.dadiawards.com/dadi-awards-2018/automotive-website-app-or-campaign/audi-beta-audi-online-re-imagined',
              },
              {
                text: ' I worked extensively on this project as a senior developer. Find out more about this project ',
              },
              { type: LINK, text: 'here', href: 'https://content.somoglobal.com/audi_online_re-imagined' },
              {
                text: '.',
              },
            ]}
          />
        ),
        imgUrl: '/audi_beta_dadi_awards.png',
      };
    case 2019:
      return {
        text: (
          <TextBlock
            contents={[
              { text: 'I work closely with tech consultancy BJSS and assist in delivering the massive ' },
              {
                type: LINK,
                text: 'NATS aerospace',
                href: 'https://www.nats.aero/',
              },
              {
                text: ' project. Full stack JavaScript, of course.',
              },
            ]}
          />
        ),
        imgUrl: '/BJSS_logo.png',
      };
    case CURRENT_YEAR:
      return {
        text: (
          <TextBlock
            contents={[
              { text: "Still coding! Let's work together... " },
              { type: EMOJI, unicode: GRINNING_FACE, label: 'Grinning face' },
            ]}
          />
        ),
      };
    default:
      return {
        text: '',
        imgUrl: null,
      };
  }
};

const ImgContainer = styled.div`
  max-width: 80%;
`;

const YearContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
    margin: 10px 0;
  }
`;

const WorkPage = () => {
  const [selectedYear, setSelectedYear] = useState(DEFAULT_YEAR);
  const [isCoding, setIsCoding] = useState(true);

  const handleChange = (val) => {
    setSelectedYear(val);
  };

  const { text, imgUrl } = getYearInfo(selectedYear);

  return (
    <Container>
      <CustomHead />

      <Card maxWidth="950px">
        <h1>My Career History</h1>
        <TextBlock
          contents={[
            { text: "I'm a full stack web developer based in Bristol, UK " },
            { type: LINK, href: '', text: 'LinkedIn' },
            {
              text:
                '. I have been making websites since 2012 after a chance meeting on a Thai beach inspired me to go back to university to study computer science.',
            },
          ]}
        />
        <StyledSlider
          max={CURRENT_YEAR}
          min={2004}
          defaultValue={[DEFAULT_YEAR]}
          renderTrack={Track}
          renderThumb={Thumb}
          onChange={handleChange}
        />
        <YearContainer>
          <h2>{selectedYear}</h2>
          {text}

          <ImgContainer>
            <img src={imgUrl || ''} alt="plop" style={{ width: '100%' }} />
          </ImgContainer>
        </YearContainer>
      </Card>
    </Container>
  );
};

export default WorkPage;
