import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const black = '#0e1111';
export const blackLighter = '#222';
export const white = '#fff';
export const gray = '#444';
export const greyLighter = '#888';
export const greyLightest = '#aaa';

export const primaryColour = '#0070f3';
export const palette1 = '#008080';
export const palette2 = '#373E40';
export const palette3 = '#B7D5D4';
export const palette4 = '#931621';
export const palette5 = '#3F84E5';
export const palette6 = '#E8EEF2';

export const selectionHighlight = 'rgba(59, 153, 252, .7)';
export const shadow = 'rgba(0, 0, 0, 0.26)';
export const shadowLighter = 'rgba(55,55,55,0.6)';

export const headerFont = 'Lexend Tera';
export const contentFont = 'Montserrat';

export const footerHeight = '60px';
export const screenXS = '400px';
export const screenS = '500px';
export const screenM = '800px';
export const screenL = '1000px';

export const theme: DefaultTheme = {
  colors: {
    primary: `${primaryColour}`,
    palette1: `${palette1}`,
    palette2: `${palette2}`,
    palette3: `${palette3}`,
    palette4: `${palette4}`,
    palette5: `${palette5}`,
    palette6: `${palette6}`,
    black: `${black}`,
    white: `${white}`,
    gray: `${gray}`,
    greyLighter: `${greyLighter}`,
    greyLightest: `${greyLightest}`,
    shadow: `${shadow}`,
    shadowLighter: `${shadowLighter}`,
    highlight: `${selectionHighlight}`,
  },
  fonts: {
    header: `${headerFont}`,
    content: `${contentFont}`,
  },
  display: {
    footerHeight: `${footerHeight}`,
    xsScreen: `max-width: ${screenXS}`,
    sScreen: `max-width: ${screenS}`,
    mScreen: `max-width: ${screenM}`,
    lScreen: `max-width: ${screenL}`,
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${black};
    background-color: ${palette5};
    font-family: ${contentFont};
  }

  h1, h2, h3, h4, h5.h6 {
    font-family: ${headerFont};
  }

  h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    margin: 20px 0;
    font-weight: 600;

    @media only screen and (max-width: 400px) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 20px 0;
    font-weight: 600;

    @media only screen and (max-width: 400px) {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
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
    text-decoration-color: ${palette2};
  }

  ul {
    list-style-type: none;
    li {
      line-height: 1.5rem;
      padding: 10px;
    }
  }

  input {
    display: block;
    font-size: 16px;
    font-family: ${contentFont};
    font-weight: 700;
    color: ${gray};
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid ${greyLightest};
    box-shadow: 0 1px 0 1px ${shadow};
    border-radius: .5em;
    appearance: none;
    background-color: ${white};
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
  }

  select {
    display: block;
    font-size: 16px;
    font-family: ${contentFont};
    font-weight: 700;
    color: ${gray};
    cursor: pointer;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid ${greyLightest};
    box-shadow: 0 1px 0 1px ${shadow};
    border-radius: .5em;
    appearance: none;
    background-color: ${white};
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;

    option {
      font-weight: normal;
    }
  }

  select:hover {
    border-color: ${greyLighter};
  }

  select:focus {
    border-color: ${greyLightest};
    box-shadow: 0 0 1px 3px ${selectionHighlight};
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: ${blackLighter};
    outline: none;
  }

  select:disabled {
    color: graytext;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
  }
  
  select:disabled:hover {
    border-color: ${greyLightest};
  }
`;
