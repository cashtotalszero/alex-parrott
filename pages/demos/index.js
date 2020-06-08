import Page from '../../components/Page';
import TextBlock, { NAV } from '../../components/TextBlock';

const DemosPage = () => (
  <Page>
    <h1>Demos</h1>
    <p>Link to your code here!!!</p>

    <h2>Some apps & fun stuff</h2>
    <ul>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: '/demos/moles', text: 'Whack a mole!', bold: true },
            {
              text:
                ' | A little shout out to Wes Bos. This is a game based on his awesome JavaScript 30 course. I just built it in React instead.',
            },
          ]}
        />
      </li>
      <li>
        <TextBlock
          contents={[
            { type: NAV, href: '/demos/todos', text: 'Redux Todos', bold: true },
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

export default DemosPage;
