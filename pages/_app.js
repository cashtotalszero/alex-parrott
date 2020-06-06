/* eslint-disable react/jsx-props-no-spreading, react/forbid-prop-types */
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import PropTypes from 'prop-types';
import { useStore } from '../store';
import Header from '../components/Header';
import Footer from '../components/AppFooter';

const colour1 = '#3b66db';
const colour2 = '#715b81';
const colour3 = '#8affea';
const colour4 = '#ff0505';
const colour5 = '#c5cae1';
const black = '#000';
const white = '#fff';

const theme = {
  colors: {
    primary: '#0070f3',
    palette1: `${colour1}`,
    palette2: `${colour2}`,
    palette3: `${colour3}`,
    palette4: `${colour4}`,
    palette5: `${colour5}`,
    black: `${black}`,
    white: `${white}`,
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${black};
    background-color: ${colour5};
    font-family: 'Montserrat'
  }

  h1, h2, h3, h4, h5.h6 {
    font-family: 'Lexend Tera';
  }

  h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    margin: 20px 0;
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 20px 0;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 20px 0;
    font-weight: 400;
  }

  strong {
    font-weight: 600;
  }

  a {
    color: black;
    text-decoration-color: ${colour1};
  }

  ul {
    li {
      line-height: 1.5rem;
      padding: 10px;
    }
  }

  input {
    display: block;
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    appearance: none;
    background-color: #fff;
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
  }

  select {
    display: block;
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #444;
    cursor: pointer;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;

    option {
      font-weight: normal;
    }
  }

  select:hover {
    border-color: #888;
  }

  select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }

  select:disabled {
    color: graytext;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
  }
  
  select:disabled:hover {
    border-color: #aaa;
  }
`;

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
      <Reset />
      <GlobalStyle />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};
