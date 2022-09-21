import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Page } from '../../components/Page';
import { AppLink } from '../../components/ui/AppLink';
import {
    A4_APP_ANDROID,
    A4_APP_IOS,
    VR_SHOWROOM,
    VIVE_DEMO_EMBED,
    SOMO_GLOBAL_SITE,
    AUDI_UK,
} from '../../constants/urls';

import AlexInVr from '../../public/alex_in_vr.jpg';
import VrShowroom from '../../public/vr_showroom.png';
import SteamLogo from '../../public/steam_vr.png';
import UnityLogo from '../../public/unity_logo.png';
import GoogleVrLogo from '../../public/google_VR.png';

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;

    div {
        padding: 0 20px;
    }

    @media only screen and (${({ theme }) => `${theme.display.mScreen}`}) {
        flex-direction: column;
        div {
            padding: 10px 0;
        }
    }
`;

const VideoContainer = styled.div`
    width: 420px;
    height: 315px;
    margin: 0 auto;

    @media only screen and (${({ theme }) => `${theme.display.sScreen}`}) {
        width: 300px;
        height: 225px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const VrPage = () => (
    <Page>
        <h1>Alex does VR</h1>

        <ImageContainer>
            <Image src={AlexInVr} alt="alex in vr" style={{ maxWidth: '300px' }} />
        </ImageContainer>

        <p>
            One of the things I loved about working at{' '}
            <AppLink label="Somo" href={SOMO_GLOBAL_SITE} /> is that they weren&apos;t afraid to let
            me play with tech toys. All I had to do was promise to build something in return...
        </p>

        <p>
            I was visiting the Somo London office in winter 2015 when I stumbled across the
            innovation lab and shown their HTC Vive VR demo.
        </p>

        <ImageContainer>
            <Image src={VrShowroom} alt="vr showroom" style={{ maxWidth: '500px' }} />
        </ImageContainer>

        <p>
            One of Somo&apos;s major clients at the time was{' '}
            <AppLink label="Audi UK" href={AUDI_UK} />. They had given us a bunch of very cool 3D
            models of a car showroom and an Audi A4.
        </p>

        <p>
            I had some experience making apps in Unity 3D so we made a deal - Somo would send a Vive
            headset to the Bristol office if I could develop something Audi could use.
        </p>

        <h2>See for yourself</h2>

        <p>
            I became the lead developer on two projects. Both were built in Unity 3D and programmed
            in C#
        </p>

        <LogoContainer>
            <ImageContainer>
                <Image src={SteamLogo} alt="Steam VR" />
            </ImageContainer>

            <ImageContainer>
                <Image src={UnityLogo} alt="Unity 3D" style={{ maxWidth: '200px' }} />
            </ImageContainer>

            <ImageContainer>
                <Image src={GoogleVrLogo} alt="Google VR" style={{ maxWidth: '200px' }} />
            </ImageContainer>
        </LogoContainer>

        <p>
            The first app a simple A4 showroom experience built with Google VR library. At the time
            of writing you can still download a copy of the app for both{' '}
            <AppLink label="iOS" href={A4_APP_IOS} /> and{' '}
            <AppLink label="Android" href={A4_APP_ANDROID} /> devices.
        </p>

        <p>
            The second project was larger and designed as a fully immersive HTC Vive experience.
            This app was later nominated for a <AppLink label="DADI award" href={VR_SHOWROOM} />.
            Somo produced a little demo video of it in action which you can view below.
        </p>

        <VideoContainer>
            <iframe title="VR Showroom demo" width="100%" height="100%" src={VIVE_DEMO_EMBED} />
        </VideoContainer>
    </Page>
);

export default VrPage;
