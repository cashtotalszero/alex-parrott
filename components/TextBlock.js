import styled from 'styled-components';
import PropTypes from 'prop-types';

import Emoji from './Emoji';

export const TEXT = 'text';
export const BOLD = 'boldText';
export const LINK = 'link';
export const EMOJI = 'emoji';

const StyledAnchor = styled.span`
  position: relative;

  a:before {
    height: 5px;
    position: absolute;
    content: '';
    width: 100%;
    bottom: -2px;
    /* z-index: 0; */
    transform: skew(-20deg) rotate(-2deg);
    /* transition: transform 0.1s ease 0s; */
    /* color: red; */
    /* background-color: red; */
    background-color: ${({ theme }) => theme.colors.palette5};
    opacity: 0.5;
  }
`;

const TextBlock = ({ contents }) => (
  <p style={{ position: 'relative' }}>
    {contents.map(({ type, text, href, unicode, label }) => {
      switch (type) {
        case TEXT:
          return `${text}`;
        case BOLD:
          return <strong>{`${text}`}</strong>;
        case LINK:
          return (
            <StyledAnchor>
              <a href={href}>{`${text}`}</a>
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
