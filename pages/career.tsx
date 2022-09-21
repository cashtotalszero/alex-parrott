import React from 'react';

import { LINKEDIN_BIO } from '../constants/urls';
import { AppLink } from '../components/ui/AppLink';
import { CvSlider } from '../components/cv';
import { Page } from '../components/Page';

const CareerPage = () => (
    <Page>
        <h1>My Career History</h1>

        <p>
            Here&apos;s my CV / résumé in slider form! Drag the handle to see my employment and
            education history. If you prefer to look at a more conventional list of jobs then you
            can find me on <AppLink label="LinkedIn" href={LINKEDIN_BIO} shadowWidth={120} />.
        </p>

        <CvSlider />
    </Page>
);

export default CareerPage;
