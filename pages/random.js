import Page from '../components/Page';
import Image from '../components/Image';
import TextBlock, { NAV, BOLD, LINK } from '../components/TextBlock';
import { WHACK_MOLES_DEMO, REDUX_DEMO, MATRIX_DEMO, PUZZLE_DEMO } from '../constants/urls';

const RandomPage = () => (
  <Page>
    <h1>Random Stuff</h1>
    <Image imageSrc="/nathan.jpg" imageAlt="Stange planet" maxWidth="500px" />
    <p>
      There are a bunch of little apps here. Just a few little games and apps that I have put together for demo
      purposes...
    </p>

    <h2>Games</h2>
    <ul>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: PUZZLE_DEMO, text: 'Jigsaw Puzzle', bold: true },
            {
              text:
                ' | Adding drag and drop functionality to a web site usually becomes a UX rabbit hole. However, you add Giant Days artwork into the mix then down the rabbit hole I go...',
            },
          ]}
        />
      </li>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: WHACK_MOLES_DEMO, text: 'Whack a mole!', bold: true },
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
            { type: NAV, href: MATRIX_DEMO, text: 'Enter The Matrix', bold: true },
            {
              text:
                ' | You\'re not a real developer until you recreate the "digital rain" sequence from The Matrix in JavaScript. Ok, so technically I reverse engineered if from some minified code I found. That still counts, right?',
            },
          ]}
        />
      </li>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: REDUX_DEMO, text: 'Redux Todos', bold: true },
            {
              text: " | The classic Redux demo. It's a to do list app, built in Redux!",
            },
          ]}
        />
      </li>
      <li>
        <TextBlock contents={[{ type: BOLD, text: 'More coming soon...' }]} />
      </li>
    </ul>
  </Page>
);

export default RandomPage;
