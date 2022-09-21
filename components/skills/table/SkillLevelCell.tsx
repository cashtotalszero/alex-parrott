import React from 'react';

import { Emoji } from '../../Emoji';
import { SKILL_LEVELS } from '../../../constants/skills';
import { SMILING_FACE, HALO as HALO_FACE, FLUSHED_FACE } from '../../../constants/emojis';

const { HALO, SMILE, FLUSHED } = SKILL_LEVELS;

export const SkillLevelCell = ({ value }: { value: string }) => {
    switch (value) {
        case HALO:
            return <Emoji unicode={HALO_FACE} label="Smiling face with halo" />;
        case SMILE:
            return <Emoji unicode={SMILING_FACE} label="Smiling face" />;
        case FLUSHED:
            return <Emoji unicode={FLUSHED_FACE} label="Flushed face" />;
        default:
            return <Emoji unicode={SMILING_FACE} label="Smiling face" />;
    }
};
