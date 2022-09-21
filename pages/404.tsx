import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import RantImage from '../public/rant.jpg';

import { Page } from '../components/Page';

const Container = styled.div`
    p {
        text-align: center;
    }
`;

const NotFoundPage = () => (
    <Page>
        <Container>
            <p>
                <strong>404</strong> | This page could not be found
            </p>

            <Image src={RantImage} alt="Page not found" style={{ maxWidth: '500px' }} />
        </Container>
    </Page>
);

export default NotFoundPage;
