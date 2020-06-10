/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Emoji from './Emoji';

export const TEXT = 'text';
export const BOLD = 'boldText';
export const LINK = 'link';
export const NAV = 'nav';
export const EMOJI = 'emoji';
export const BUTTON = 'button';

const StyledAnchor = styled.span`
  position: relative;

  button,
  a {
    font-weight: ${({ bold }) => (bold ? 700 : '')};
  }

  button,
  a:before {
    height: 5px;
    position: absolute;
    content: '';
    width: 100%;
    bottom: -2px;
    transform: skew(-20deg) rotate(-2deg);
    background-color: ${({ theme }) => theme.colors.palette5};
    opacity: 0.5;
  }
`;

const TextBlock = ({ contents }) => (
  <p style={{ position: 'relative' }}>
    {contents.map(({ type, text, href, unicode, label, onClick, bold }, index) => {
      let content = '';
      switch (type) {
        case TEXT:
          content = `${text}`;
          break;
        case BOLD:
          content = <strong>{`${text}`}</strong>;
          break;
        case LINK:
          content = (
            <StyledAnchor bold={bold}>
              <a href={href} onClick={onClick} target="_blank" rel="noreferrer">{`${text}`}</a>
            </StyledAnchor>
          );
          break;
        case NAV:
          content = (
            <StyledAnchor bold={bold} onClick={onClick}>
              <Link href={href}>
                <a>{`${text}`}</a>
              </Link>
            </StyledAnchor>
          );
          break;
        case BUTTON:
          content = (
            <StyledAnchor bold={bold} onClick={onClick}>
              <Link>
                <a>{`${text}`}</a>
              </Link>
            </StyledAnchor>
          );
          break;
        case EMOJI:
          content = <Emoji label={label} unicode={unicode} />;
          break;
        default:
          content = `${text || ''}`;
      }
      // eslint-disable-next-line react/no-array-index-key
      return <Fragment key={`${type}${index}`}>{content}</Fragment>;
    })}
  </p>
);

TextBlock.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string,
      unicode: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
};

export default TextBlock;
