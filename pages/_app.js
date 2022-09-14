/* eslint-disable react/jsx-props-no-spreading, react/forbid-prop-types */
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { GlobalStyle, theme, footerHeight } from '../styles';
import { useStore } from '../store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CssReset } from '../css-reset'

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const PageWrapper = styled.div`
  padding-bottom: ${footerHeight};
`;

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <PageWrapper>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PageWrapper>
        </PageContainer>
      </ThemeProvider>
      <CssReset />
      <GlobalStyle />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};
