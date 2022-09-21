/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme, footerHeight } from '../styles/styles';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CssReset } from '../css-reset';

const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
`;

const PageWrapper = styled.div`
    padding-bottom: ${footerHeight};
`;

const App = ({ Component, pageProps }: AppProps) => (
    <div>
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
    </div>
);

export default App;
