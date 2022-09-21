import React from 'react';

type Props = {
    unicode: string;
    label: string;
};

export const Emoji = ({ unicode, label }: Props) => (
    <span role="img" aria-label={label}>
        {unicode}
    </span>
);
