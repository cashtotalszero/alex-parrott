import React from 'react';
import styled from 'styled-components';

import { AppModal } from '../ui/AppModal';
import { Emoji } from '../Emoji';
import Button from '../ui/Button';
import { SMILING_FACE, HALO as HALO_FACE, FLUSHED_FACE } from '../../constants/emojis';

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
`;

type Props = {
    isOpen: boolean;
    handleClose: () => void;
};

export const SkillsModal = (props: Props) => {
    const { isOpen, handleClose } = props;

    return (
        <AppModal isOpen={isOpen} onClose={handleClose} label="Skills description modal">
            <ModalContent>
                <Button onClick={handleClose}>close</Button>

                <h2>Skill levels</h2>

                <ul>
                    <li>
                        <Emoji unicode={HALO_FACE} label="Smiling face with halo" />
                        <span> = I am currently using this or have used it extensively.</span>
                    </li>
                    <li>
                        <Emoji unicode={SMILING_FACE} label="Smiling face" />
                        <span>
                            {' '}
                            = I have used this professionally or in personal projects and am
                            comfortable using it.
                        </span>
                    </li>
                    <li>
                        <Emoji unicode={FLUSHED_FACE} label="Flushed face" />
                        <span>
                            {' '}
                            = I have used this in a limited capacity or it&apos;s been a while so I
                            might be rusty!
                        </span>
                    </li>
                </ul>
            </ModalContent>
        </AppModal>
    );
};
