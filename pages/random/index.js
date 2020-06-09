import Page from '../../components/Page';
import Image from '../../components/Image';
import TextBlock, { NAV, BOLD, EMOJI, LINK } from '../../components/TextBlock';

const RandomPage = () => (
  <Page>
    <h1>Random Stuff</h1>
    <Image imageSrc="/nathan.jpg" imageAlt="Stange planet" />
    <p>
      There are a bunch of little apps here. Just a few little games and apps that I have put together for demo
      purposes...
    </p>

    <h2>Games</h2>
    <ul>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: '/random/moles', text: 'Whack a mole!', bold: true },
            {
              text:
                ' | A little shout out to Wes Bos. This is a game based on his awesome JavaScript 30 course. I just built it in React instead.',
            },
          ]}
        />
      </li>
    </ul>

    <h2>Apps & Demos</h2>

    <ul>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: 'random/matrix', text: 'Enter The Matrix', bold: true },
            {
              text:
                ' | You\'re not a real developer until you recreate the "digital rain" sequence from The Matrix in JavaScript.',
            },
          ]}
        />
      </li>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: '/random/todos', text: 'Redux Todos', bold: true },
            {
              text: " | The classic Redux demo. It's a to do list, build in Redux!",
            },
          ]}
        />
      </li>
      <li>
        <TextBlock contents={[{ type: NAV, href: '/demos', text: 'More coming soon...', bold: true }]} />
      </li>
    </ul>
  </Page>
);

export default RandomPage;
