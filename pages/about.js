import Page from '../components/Page';
import Image from '../components/Image';
import TextBlock, { BOLD, EMOJI, LINK } from '../components/TextBlock';

import { VR_SHOWROOM, MONKEY_KNIFE_FIGHT, CONTRACT_FOR_THE_WEB } from '../constants/urls';
import { GB_FLAG, MAN_SHRUGGING, WINKING_FACE } from '../constants/emojis';

const AboutPage = () => (
  <Page>
    <h1>About Me</h1>
    <Image imageSrc="/alex.png" imageAlt="alex" subtitle="Hey, I'm Alex Parrott" />

    <h2>In short...</h2>

    <TextBlock
      contents={[
        { text: "I'm a full stack web developer based in Bristol, UK " },
        { type: EMOJI, unicode: GB_FLAG, label: 'GB flag emoji' },
        {
          text:
            '. I have been making websites since 2012 after a chance meeting on a Thai beach inspired me to go back to university to study computer science.',
        },
      ]}
    />

    <TextBlock
      contents={[
        { text: 'I mainly use HTML, CSS and JavaScript. While ' },
        { type: BOLD, text: 'I specialise in making React.js applications,' },
        { text: ' I can work effectively on any JavaScript project.' },
      ]}
    />

    <TextBlock
      contents={[
        {
          text:
            'My tech interests vary widely and I have worked on a wide variety of projects. These include - Vue.js apps, React Native mobile apps, Node/Express servers, ',
        },
        { type: LINK, href: VR_SHOWROOM, text: 'VR experiences' },
        { text: ' and Unity 3D games.' },
      ]}
    />

    <Image
      imageSrc="/office.jpg"
      imageAlt="my office"
      subtitle="I spend a lot of my days hanging out with Mr Peanutbutter and Lying
            Cat..."
      width="100%"
    />

    <h2>Tell me more...</h2>

    <TextBlock
      contents={[
        { text: 'I have a bit of an ' },
        { type: BOLD, text: 'unusual career history' },
        {
          text: '! I originally went to university to study Sociology. Afterwards I spent several years working as a ',
        },
        { type: LINK, href: MONKEY_KNIFE_FIGHT, text: 'music promoter' },
        {
          text:
            ' and then banking. After a stint travelling I ended up back at university doing a masters degree in computer science... I like to think it makes me well rounded ',
        },
        { type: EMOJI, unicode: MAN_SHRUGGING, label: 'shrug emoji' },
        { text: '.' },
      ]}
    />

    <TextBlock
      contents={[
        { text: 'I love making ' },
        { type: BOLD, text: 'tech that inspires' },
        {
          text:
            " and believe that we should be building applications responsibly. Our goal should be to improve people's lives and I fully support Tim Berners-Lee's ",
        },
        { type: LINK, href: CONTRACT_FOR_THE_WEB, text: 'Contract for the Web' },
        { text: '.' },
      ]}
    />

    <TextBlock
      contents={[
        { text: 'I ' },
        { type: BOLD, text: 'love to learn' },
        {
          text:
            " and am constantly trying to learn something new. At the moment I'm playing with Golang. Tomorrow, it'll be blockchain...",
        },
      ]}
    />

    <TextBlock
      contents={[
        { text: 'I prefer ' },
        { type: BOLD, text: 'agile working' },
        {
          text:
            " practises and think that a happy work environment counts for a lot. I've been told that I'm fun to work with. Take from that what you will ",
        },
        { type: EMOJI, unicode: WINKING_FACE, label: 'wink emoji' },
        { text: '.' },
      ]}
    />
  </Page>
);

export default AboutPage;
