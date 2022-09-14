import styled from 'styled-components';
import PropTypes from 'prop-types';

import TextBlock, { LINK, NAV, EMOJI } from './TextBlock';
import { GRINNING_FACE } from '../constants/emojis';
import {
  AFORZA,
  AFORZA_SERIES_A,
  BJSS,
  LLOYDS_BANK,
  SOMO_GLOBAL,
  RED_7_MOBILE,
  NATS,
  ESA_SUMMER_OF_CODE,
  PERVASIVE_MEDIA,
  VR_DEMO,
  AUDI_BETA,
  AUDI_BETA_BLOG,
} from '../constants/urls';

const CV_ITEM_1 = 1;
const CV_ITEM_2 = 2;
const CV_ITEM_3 = 3;
const CV_ITEM_4 = 4;
const CV_ITEM_5 = 5;
const CV_ITEM_6 = 6;
const CV_ITEM_7 = 7;
const CV_ITEM_8 = 8;
const CV_ITEM_9 = 9;
const CV_ITEM_10 = 10;
const CV_ITEM_11 = 11;
const CV_ITEM_12 = 12;
const CV_ITEM_13 = 13;
const CV_ITEM_14 = 14;
const CV_ITEM_15 = 15;

export const DEFAULT_CV_ITEM = CV_ITEM_5;
export const CV_ITEM_FIRST = CV_ITEM_1;
export const CV_ITEM_LAST = CV_ITEM_15;

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

const getYearInfo = (year) => {
  switch (year) {
    case CV_ITEM_1:
      return {
        title: '2004',
        text: <p>I graduated from the University of the West of England with a BA (hons) degree in Sociology.</p>,
        imgUrl: '/UWE_logo.jpg',
        imgAlt: 'UWE',
      };
    case CV_ITEM_2:
      return {
        title: '2005-2007',
        text: <p>I co-founded and ran music promotion company Monkey! Knife! Fight!</p>,
        imgUrl: '/mkf.jpg',
        imageAlt: 'Monkey Knife Fight poster',
      };
    case CV_ITEM_3:
      return {
        title: '2006-08',
        text: (
          <>
            <TextBlock contents={[{ text: 'I went travelling and worked abroad. A lot. ' }]} />
            <TextBlock
              contents={[
                { text: 'Here I am at Mount Everest ' },
                { type: EMOJI, unicode: GRINNING_FACE, label: 'Grinning face' },
              ]}
            />
          </>
        ),
        imgUrl: '/alex_everest.jpg',
        imgAlt: 'Me at Mt Everest',
      };
    case CV_ITEM_4:
      return {
        title: '2009-2012',
        text: (
          <TextBlock
            contents={[
              { text: 'I returned to the UK and joined ' },
              { type: LINK, text: 'Lloyds', href: LLOYDS_BANK },
              { text: ' as an ATM analyst.' },
            ]}
          />
        ),
        imgUrl: '/LBG_logo.png',
        imgAlt: 'Lloyds Banking Group',
      };
    case CV_ITEM_5:
      return {
        title: '2012',
        text: <p>I started learning JavaScript.</p>,
        imgUrl: '/JavaScript-logo.png',
        imgAlt: 'JS logo',
      };
    case CV_ITEM_6:
      return {
        title: '2013',
        text: (
          <TextBlock
            contents={[
              { text: 'I obtained funding from ' },
              { type: LINK, text: 'ESA', href: ESA_SUMMER_OF_CODE },
              { text: ' to build mission control software in Unity 3D for a Bristol start-up at the Pervasive Media ' },
              { type: LINK, text: 'Studio', href: PERVASIVE_MEDIA },
              { text: '.' },
            ]}
          />
        ),
        imgUrl: '/esa-logo.png',
        imgAlt: 'European Space Agency',
      };
    case CV_ITEM_7:
      return {
        title: '2014',
        text: <p>I graduated from the University of Bristol with a MSc Masters Degree in Computer Science.</p>,
        imgUrl: '/UOB_logo.png',
        imgAlt: 'University of Bristol',
      };
    case CV_ITEM_8:
      return {
        title: 'Late 2014',
        text: (
          <TextBlock
            contents={[
              { text: 'I joined ' },
              { type: LINK, text: 'Red7Mobile', href: RED_7_MOBILE },
              { text: ' as a JavaScript games developer. We converted Flash games to HTML5.' },
            ]}
          />
        ),
        imgUrl: '/Red7Mobile-logo.jpg',
        imgAlt: 'Red7Mobile',
      };
    case CV_ITEM_9:
      return {
        title: '2015',
        text: (
          <TextBlock
            contents={[
              { text: 'I joined the digital agency ' },
              { type: LINK, text: 'Somo', href: SOMO_GLOBAL },
              { text: ' and started coding in React and Vue.' },
            ]}
          />
        ),
        imgUrl: '/Somo_logo.png',
        imgAlt: 'Somo',
      };
    case CV_ITEM_10:
      return {
        title: '2016',
        text: (
          <TextBlock
            contents={[
              {
                text:
                  'I was lead developer on the Audi VR virtual showroom app, built in Unity. The work was nominated for a DADI Award. Find out more ',
              },
              { type: NAV, href: VR_DEMO, text: 'here' },
              { text: '.' },
            ]}
          />
        ),
        imgUrl: '/alex_in_vr.jpg',
        imgAlt: 'Me working in VR',
      };
    case CV_ITEM_11:
      return {
        title: '2017',
        text: <p>I went freelance. I decided to specialise in building React and Node apps.</p>,
        imgUrl: '/react_logo.png',
        imgAlt: 'React logo',
      };
    case CV_ITEM_12:
      return {
        title: '2018',
        text: (
          <TextBlock
            contents={[
              { text: 'The Audi Beta Website was nominated for the Best Automotive Website DADI ' },
              { type: LINK, text: 'Award', href: AUDI_BETA },
              {
                text:
                  '. I worked extensively on this project as a senior developer at Somo. Find out more about this project ',
              },
              { type: LINK, text: 'here', href: AUDI_BETA_BLOG },
              { text: '.' },
            ]}
          />
        ),
        imgUrl: '/audi_beta_dadi_awards.png',
        imgAlt: 'Audi Beta Website',
      };
    case CV_ITEM_13:
      return {
        title: '2019',
        text: (
          <TextBlock
            contents={[
              { text: 'I worked closely with tech consultancy ' },
              { type: LINK, text: 'BJSS', href: BJSS },
              { text: ' and assisted in delivering the massive ' },
              { type: LINK, text: 'NATS', href: NATS },
              { text: ' aerospace project. Full stack JavaScript, of course.' },
            ]}
          />
        ),
        imgUrl: '/BJSS_logo.png',
        imgAlt: 'BJSS logo',
      };
    case CV_ITEM_14:
      return {
        title: 'Since 2020',
        text: (
          <TextBlock
            contents={[
              { text: 'I have been working with ' },
              { type: LINK, text: 'Aforza', href: AFORZA },
              { text: ' as Lead React Native Developer in recent years. We won $22 million of ' },
              { type: LINK, text: 'series A', href: AFORZA_SERIES_A },
              { text: ' investment in summer 2021.' },
            ]}
          />
        ),
        imgUrl: '/aforzaLogo.png',
        imgAlt: 'Aforza logo',
      };
    case CV_ITEM_15:
      return {
        title: 'The future...',
        text: (
          <TextBlock
            contents={[
              { text: "I'm still coding and currently based in Bristol. Let's work together... " },
              { type: EMOJI, unicode: GRINNING_FACE, label: 'Grinning face' },
            ]}
          />
        ),
        imgUrl: '/bristol.jpg',
        imgAlt: 'Bristol',
      };
    default:
      return {
        text: '',
      };
  }
};

const CvItem = ({ year }) => {
  const { title, text, imgUrl, imgAlt } = getYearInfo(year);

  if (!text) return null;

  return (
    <YearContainer>
      <h2>{title}</h2>
      {text}

      <ImgContainer>
        <img src={imgUrl || ''} alt={imgAlt || ''} style={{ width: '100%' }} />
      </ImgContainer>
    </YearContainer>
  );
};

CvItem.propTypes = {
  year: PropTypes.number.isRequired,
};

export default CvItem;
