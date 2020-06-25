/* eslint-disable react/jsx-props-no-spreading, react/forbid-prop-types */
// import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import PropTypes from 'prop-types';

import { GlobalStyle, theme, footerHeight } from '../styles';
import { wrapper } from '../store';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const PageWrapper = styled.div`
  padding-bottom: ${footerHeight};
`;

function App({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <PageWrapper>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PageWrapper>
        </PageContainer>
      </ThemeProvider>
      <Reset />
      <GlobalStyle />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(App);
