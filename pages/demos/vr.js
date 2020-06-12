import styled from 'styled-components';
import Page from '../../components/Page';
import TextBlock, { LINK } from '../../components/TextBlock';
import Image from '../../components/Image';
import { A4_APP_ANDROID, A4_APP_IOS, VR_SHOWROOM, VIVE_DEMO_EMBED, SOMO_GLOBAL, AUDI_UK } from '../../constants/urls';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    padding: 0 20px;
  }

  @media only screen and (${({ theme }) => `${theme.display.mScreen}`}) {
    flex-direction: column;
    img {
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

const VrPage = () => (
  <Page>
    <h1>Alex does VR</h1>
    <Image imageSrc="/alex_in_vr.jpg" imageAlt="alex in vr" maxWidth="300px" />

    <TextBlock
      contents={[
        {
          text: 'One of the things I loved about working at ',
        },
        { type: LINK, href: SOMO_GLOBAL, text: 'Somo' },
        {
          text:
            " is that they weren't afraid to let me play with tech toys. All I had to do was promise to build something in return...",
        },
      ]}
    />

    <TextBlock
      contents={[
        {
          text:
            'I was visiting the Somo London office in winter 2015 when I stumbled across the innovation lab and shown their HTC Vive VR demo.',
        },
      ]}
    />

    <Image imageSrc="/vr_showroom.png" imageAlt="alex in vr" maxWidth="500px" />

    <TextBlock
      contents={[
        {
          text: "One of Somo's major clients at the time was ",
        },
        { type: LINK, href: AUDI_UK, text: 'Audi UK' },
        {
          text: '. They had given us a bunch of very cool 3D models of a car showroom and an Audi A4.',
        },
      ]}
    />

    <TextBlock
      contents={[
        {
          text:
            'I had some experience making apps in Unity 3D so we made a deal - Somo would send a Vive headset to the Bristol office if I could develop something Audi could use.',
        },
      ]}
    />

    <h2>See for yourself</h2>

    <TextBlock
      contents={[
        {
          text:
            'I was eventually the lead developer on two projects. Both were built in Unity 3D and programmed in C#.',
        },
      ]}
    />

    <LogoContainer>
      <Image imageSrc="/steam_vr.png" imageAlt="Steam VR" maxWidth="200px" />
      <Image imageSrc="/unity_logo.png" imageAlt="Unity 3D" maxWidth="200px" />
      <Image imageSrc="/google_vr.png" imageAlt="Google VR" maxWidth="200px" />
    </LogoContainer>

    <TextBlock
      contents={[
        {
          text:
            'The first app a simple A4 showroom experience built with Google VR library. At the time of writing (spring 2020) you can still download a copy of the app for both ',
        },
        { type: LINK, href: A4_APP_IOS, text: 'iOS' },
        { text: ' and ' },
        { type: LINK, href: A4_APP_ANDROID, text: 'Android' },
        { text: ' devices.' },
      ]}
    />

    <TextBlock
      contents={[
        {
          text:
            'The second project was larger and designed as a fully immersive HTC Vive experience. This app was later nominated for a DADI ',
        },
        { type: LINK, href: VR_SHOWROOM, text: 'award' },
        { text: '. Somo produced a little demo video of it in action which you can view below.' },
      ]}
    />

    <VideoContainer>
      <iframe title="VR Showroom demo" width="100%" height="100%" src={VIVE_DEMO_EMBED} />
    </VideoContainer>
  </Page>
);

export default VrPage;
