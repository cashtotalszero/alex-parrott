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
    {contents.map(({ type, text, href, unicode, label, onClick, bold }) => {
      switch (type) {
        case TEXT:
          return `${text}`;
        case BOLD:
          return <strong>{`${text}`}</strong>;
        case LINK:
          return (
            <StyledAnchor bold={bold}>
              <a href={href} onClick={onClick}>{`${text}`}</a>
            </StyledAnchor>
          );
        case NAV:
          return (
            <StyledAnchor bold={bold}>
              <Link href={href} onClick={onClick}>
                <a>{`${text}`}</a>
              </Link>
            </StyledAnchor>
          );
        case BUTTON:
          return (
            <StyledAnchor bold={bold}>
              <Link onClick={onClick}>
                <a>{`${text}`}</a>
              </Link>
            </StyledAnchor>
          );
        case EMOJI:
          return <Emoji label={label} unicode={unicode} />;
        default:
          return `${text || ''}`;
      }
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
