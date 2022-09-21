import React from 'react';

import UweLogo from '../../public/UWE_logo.jpg';
import MkfPoster from '../../public/mkf.jpg';
import Everest from '../../public/alex_everest.jpg';
import LloydsLogo from '../../public/LBG_logo.png';
import JavascriptLogo from '../../public/JavaScript-logo.png';
import EsaLogo from '../../public/esa-logo.png';
import BristolUniLogo from '../../public/UOB_logo.png';
import Red7Logo from '../../public/Red7Mobile-logo.jpg';
import SomoLogo from '../../public/Somo_logo.png';
import AlexInVr from '../../public/alex_in_vr.jpg';
import ReactLogo from '../../public/react_logo.png';
import AudiBeta from '../../public/audi_beta_dadi_awards.png';
import BjssLogo from '../../public/BJSS_logo.png';
import AforzaLogo from '../../public/aforzaLogo.png';
import AforzaSeriesA from '../../public/aforzaComputer.jpeg';
import Bristol from '../../public/bristol.jpg';

import { AppLink } from '../ui/AppLink';
import { Emoji } from '../Emoji';
import { GRINNING_FACE } from '../../constants/emojis';
import {
    AFORZA_SITE,
    AFORZA_SERIES_A,
    BJSS_SITE,
    LLOYDS_BANK_SITE,
    SOMO_GLOBAL_SITE,
    RED_7_MOBILE_SITE,
    NATS,
    ESA_SUMMER_OF_CODE,
    PERVASIVE_MEDIA,
    VR_DEMO,
    DADI_AWARD,
    AUDI_BETA_BLOG,
} from '../../constants/urls';

const UWE = 1;
const MKF = 2;
const TRAVEL = 3;
const LLOYDS = 4;
const LEARNT_JS = 5;
const ESA_INTERNSHIP = 6;
const BRISTOL_UNI = 7;
const RED7 = 8;
const SOMO = 9;
const AUDIO_VR = 10;
const REACT_FREELANCE = 12;
const AUDI_BETA = 11;
const BJSS = 13;
const AFORZA = 14;
const AFORZA_FUNDING = 15;
const NOW = 16;

export const DEFAULT_CV_ITEM = AFORZA;
export const CV_ITEM_FIRST = UWE;
export const CV_ITEM_LAST = NOW;

export const getYearInfo = (year: number) => {
    switch (year) {
        case UWE:
            return {
                title: '2004',
                description: (
                    <p>
                        I graduated from the University of the West of England with a BA (hons)
                        degree in Sociology.
                    </p>
                ),
                imgUrl: UweLogo,
                imgAlt: 'UWE',
            };
        case MKF:
            return {
                title: '2005-2007',
                description: (
                    <p>I co-founded and ran music promotion company Monkey! Knife! Fight!</p>
                ),
                imgUrl: MkfPoster,
                imageAlt: 'Monkey Knife Fight poster',
            };
        case TRAVEL:
            return {
                title: '2006-08',
                description: (
                    <>
                        <p>I went travelling and worked abroad. A lot.</p>
                        <p>
                            Here I am at Mount Everest in 2007{' '}
                            <Emoji label="grin" unicode={GRINNING_FACE} />
                        </p>
                    </>
                ),
                imgUrl: Everest,
                imgAlt: 'Me at Mt Everest',
            };
        case LLOYDS:
            return {
                title: '2009-2012',
                description: (
                    <p>
                        I returned to the UK and joined{' '}
                        <AppLink label="Lloyds Bank" href={LLOYDS_BANK_SITE} shadowWidth={200} /> as
                        an ATM analyst.
                    </p>
                ),
                imgUrl: LloydsLogo,
                imgAlt: 'Lloyds Banking Group',
            };
        case LEARNT_JS:
            return {
                title: '2012',
                description: <p>I started learning JavaScript.</p>,
                imgUrl: JavascriptLogo,
                imgAlt: 'JS logo',
            };
        case ESA_INTERNSHIP:
            return {
                title: '2013',
                description: (
                    <p>
                        I successfully obtained funding from{' '}
                        <AppLink label="ESA" href={ESA_SUMMER_OF_CODE} /> to build mission control
                        software in Unity 3D for a Bristol start-up at the{' '}
                        <AppLink
                            label="Pervasive Media Studio"
                            href={PERVASIVE_MEDIA}
                            shadowWidth={300}
                        />
                        .
                    </p>
                ),
                imgUrl: EsaLogo,
                imgAlt: 'European Space Agency',
            };
        case BRISTOL_UNI:
            return {
                title: '2014',
                description: (
                    <p>
                        I graduated from the University of Bristol with a MSc Masters Degree in
                        Computer Science.
                    </p>
                ),
                imgUrl: BristolUniLogo,
                imgAlt: 'University of Bristol',
            };
        case RED7:
            return {
                title: 'Late 2014',
                description: (
                    <p>
                        I joined{' '}
                        <AppLink label="Red7Mobile" href={RED_7_MOBILE_SITE} shadowWidth={155} /> as
                        a JavaScript games developer. We converted Flash games to HTML5.
                    </p>
                ),
                imgUrl: Red7Logo,
                imgAlt: 'Red7Mobile',
            };
        case SOMO:
            return {
                title: '2015',
                description: (
                    <p>
                        I joined the digital agency <AppLink label="Somo" href={SOMO_GLOBAL_SITE} />{' '}
                        and started coding in React and Node.
                    </p>
                ),
                imgUrl: SomoLogo,
                imgAlt: 'Somo',
            };
        case AUDIO_VR:
            return {
                title: '2016',
                description: (
                    <p>
                        I was lead developer on the Audi VR virtual showroom app, built in Unity.
                        The work was nominated for a DADI Award. Find out more{' '}
                        <AppLink label="here" href={VR_DEMO} />.
                    </p>
                ),
                imgUrl: AlexInVr,
                imgAlt: 'Me working in VR',
            };
        case REACT_FREELANCE:
            return {
                title: '2017-2019',
                description: (
                    <p>
                        I worked as a freelance contractor, specialising in building React and Node
                        apps. I had clients in Bristol, London and New York City.
                    </p>
                ),
                imgUrl: ReactLogo,
                imgAlt: 'React logo',
            };
        case AUDI_BETA:
            return {
                title: '2018',
                description: (
                    <p>
                        The Audi Beta Website was nominated for the Best Automotive Website{' '}
                        <AppLink label="DADI Award" href={DADI_AWARD} shadowWidth={160} />. I worked
                        extensively on this project as a senior developer at Somo. Find out more
                        about this project <AppLink label="here" href={AUDI_BETA_BLOG} />.
                    </p>
                ),
                imgUrl: AudiBeta,
                imgAlt: 'Audi Beta Website',
            };
        case BJSS:
            return {
                title: '2019',
                description: (
                    <p>
                        I worked closely with tech consultancy{' '}
                        <AppLink label="BJSS" href={BJSS_SITE} /> and assisted in delivering the
                        massive <AppLink label="NATS" href={NATS} /> aerospace project. Full stack
                        JavaScript, of course.
                    </p>
                ),
                imgUrl: BjssLogo,
                imgAlt: 'BJSS logo',
            };
        case AFORZA:
            return {
                title: 'Since 2020',
                description: (
                    <p>
                        I am currently Lead Developer at start-up company{' '}
                        <AppLink label="Aforza" href={AFORZA_SITE} />. We build consumer goods
                        management apps using React Native and Typescript.
                    </p>
                ),
                imgUrl: AforzaLogo,
                imgAlt: 'Aforza logo',
            };
        case AFORZA_FUNDING:
            return {
                title: 'Summer 2021',
                description: (
                    <p>
                        18 months after I joined the company, Aforza won $22 million of{' '}
                        <AppLink
                            label="series A investment"
                            href={AFORZA_SERIES_A}
                            shadowWidth={255}
                        />
                        .
                    </p>
                ),
                imgUrl: AforzaSeriesA,
                imgAlt: 'Aforza logo',
            };
        case NOW:
            return {
                title: 'The future...',
                description: (
                    <p>
                        I&apos;m still coding and currently based in Bristol. Let&apos;s work
                        together! <Emoji label="grin" unicode={GRINNING_FACE} />
                    </p>
                ),
                imgUrl: Bristol,
                imgAlt: 'Bristol',
            };
        default:
            return {
                description: '',
            };
    }
};
