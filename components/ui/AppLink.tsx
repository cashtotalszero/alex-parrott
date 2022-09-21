/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { isDesktop } from 'react-device-detect';

type AnchorProps = {
    shadowWidth: number;
};

const StyledAnchor = styled.a<AnchorProps>`
    box-shadow: ${({ theme }) => {
        if (isDesktop) {
            return `inset 0 0 0 0 ${theme.colors.palette5}`;
        }
        return '';
    }};
    display: inline-block;
    color: ${({ theme }) => theme.colors.black};
    margin: 0 -0.25rem;
    padding: 0 0.25rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    font-weight: bold;
    text-decoration-color: ${({ theme }) => theme.colors.palette5};

    :hover {
        box-shadow: ${({ theme, shadowWidth }) => {
            if (isDesktop) {
                const { palette5 } = theme.colors;
                return `inset ${shadowWidth}px 0 0 0 ${palette5}`;
            }
            return '';
        }};
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
`;

type Props = {
    href: string;
    onClick?: () => void;
    label: string;
    shadowWidth?: number;
};

export const AppLink = (props: Props) => {
    const { href, onClick, label, shadowWidth = 100 } = props;

    const isExternal = href.startsWith('http');

    return (
        <Link href={href} passHref>
            <StyledAnchor
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                onClick={onClick}
                shadowWidth={shadowWidth}
            >
                {`${label}`}
            </StyledAnchor>
        </Link>
    );
};
