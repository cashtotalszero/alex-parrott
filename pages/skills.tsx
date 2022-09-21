import React, { useState } from 'react';
import styled from 'styled-components';

import Table from '../components/skills';
import { Page } from '../components/Page';
import { AppLink } from '../components/ui/AppLink';
import { SkillsModal } from '../components/skills/SkillsModal';

const Container = styled.div`
    min-height: 1000px;
`;

const SkillsPage = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    return (
        <Page>
            <Container>
                <h1>Technology I use</h1>

                <p>
                    Got a project that needs an engineer? I might be able to help. Search here for
                    some of the technologies that I know. Note, this is not an exhaustive list - I
                    am always learning new stuff!
                </p>

                <p>
                    {'Skill levels are described using the highly scientific '}
                    <AppLink href="" label="emoji scale" onClick={openModal} shadowWidth={150} />
                </p>

                <Table />
            </Container>

            <SkillsModal isOpen={modalIsOpen} handleClose={closeModal} />
        </Page>
    );
};

export default SkillsPage;
